import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet, Plus, History, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

export const VirtualWallet = () => {
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast.error("Please sign in to use the wallet");
      navigate("/auth");
      return;
    }

    setUserId(user.id);
    await fetchWallet(user.id);
    await fetchTransactions(user.id);
  };

  const fetchWallet = async (uid: string) => {
    const { data, error } = await supabase
      .from("wallets")
      .select("balance")
      .eq("user_id", uid)
      .single();

    if (error && error.code === "PGRST116") {
      // Wallet doesn't exist, create one
      const { error: insertError } = await supabase
        .from("wallets")
        .insert({ user_id: uid, balance: 0 });

      if (insertError) {
        toast.error("Failed to create wallet");
        console.error(insertError);
      } else {
        setBalance(0);
      }
    } else if (error) {
      toast.error("Failed to fetch wallet balance");
      console.error(error);
    } else {
      setBalance(data?.balance || 0);
    }
  };

  const fetchTransactions = async (uid: string) => {
    const { data, error } = await supabase
      .from("wallet_transactions")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false })
      .limit(5);

    if (error) {
      console.error("Failed to fetch transactions:", error);
    } else {
      setTransactions(data || []);
    }
  };

  const handleAddMoney = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      toast.error("Please sign in first");
      return;
    }

    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setLoading(true);

    try {
      // Use atomic RPC to prevent race conditions
      const { data, error } = await supabase.rpc("add_wallet_funds", {
        p_amount: depositAmount,
      });

      if (error) throw error;

      setBalance(data);
      setAmount("");
      toast.success(`Successfully added $${depositAmount.toFixed(2)} to your wallet!`);
      await fetchTransactions(userId);
    } catch (error: any) {
      toast.error("Failed to add money: " + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="virtual-wallet" className="py-12 sm:py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Virtual Wallet</h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Manage your store account balance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Current Balance
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Available funds in your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                ${balance.toFixed(2)}
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Money
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Money to Wallet</DialogTitle>
                    <DialogDescription>
                      Enter the amount you want to add to your virtual wallet
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddMoney} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="amount">Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        step="0.01"
                        min="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CreditCard className="w-4 h-4" />
                      <span>Secure payment processing</span>
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? "Processing..." : "Add Money"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardHeader className="pb-2 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <History className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Recent Transactions
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Your latest wallet activity</CardDescription>
            </CardHeader>
            <CardContent>
              {transactions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <History className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No transactions yet</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex justify-between items-center p-3 rounded-lg bg-secondary/30"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">
                          {transaction.transaction_type === "deposit" ? "Deposit" : 
                           transaction.transaction_type === "withdrawal" ? "Withdrawal" : "Purchase"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(transaction.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`font-semibold ${
                          transaction.transaction_type === "deposit"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.transaction_type === "deposit" ? "+" : "-"}$
                        {transaction.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};