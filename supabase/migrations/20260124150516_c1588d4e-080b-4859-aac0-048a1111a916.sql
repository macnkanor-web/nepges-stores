-- Wishlists table for saving products
CREATE TABLE public.wishlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  product_handle text NOT NULL,
  product_data jsonb,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_handle)
);

-- Enable RLS
ALTER TABLE public.wishlists ENABLE ROW LEVEL SECURITY;

-- Users can only see their own wishlist
CREATE POLICY "Users can view their own wishlist"
ON public.wishlists
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can add to their own wishlist
CREATE POLICY "Users can add to their own wishlist"
ON public.wishlists
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can remove from their own wishlist
CREATE POLICY "Users can delete from their own wishlist"
ON public.wishlists
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);