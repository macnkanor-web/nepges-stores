-- 1) Fix overly-broad profile visibility (make profiles private-by-default)
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- 2) Atomic wallet deposit function to prevent race conditions
CREATE OR REPLACE FUNCTION public.add_wallet_funds(
  p_amount numeric
)
RETURNS numeric
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id uuid;
  v_new_balance numeric;
BEGIN
  v_user_id := auth.uid();

  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Unauthorized';
  END IF;

  IF p_amount IS NULL OR p_amount <= 0 THEN
    RAISE EXCEPTION 'Invalid amount';
  END IF;

  -- Ensure the wallet row exists for this user
  INSERT INTO public.wallets (user_id, balance)
  VALUES (v_user_id, 0)
  ON CONFLICT (user_id) DO NOTHING;

  -- Atomic increment
  UPDATE public.wallets
  SET balance = balance + p_amount,
      updated_at = now()
  WHERE user_id = v_user_id
  RETURNING balance INTO v_new_balance;

  IF v_new_balance IS NULL THEN
    RAISE EXCEPTION 'Wallet not found';
  END IF;

  -- Record transaction
  INSERT INTO public.wallet_transactions (user_id, amount, transaction_type, description)
  VALUES (v_user_id, p_amount, 'deposit', 'Added funds to wallet');

  RETURN v_new_balance;
END;
$$;

-- Lock down execute permissions (avoid unauthenticated callers)
REVOKE ALL ON FUNCTION public.add_wallet_funds(numeric) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.add_wallet_funds(numeric) TO authenticated;