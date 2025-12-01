import { useState, useEffect } from "react";
import { StoreNavbar } from "@/components/shop/StoreNavbar";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield, CreditCard, Package, LogOut, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get current user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account.",
      });
      
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error logging out",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar products={mockProducts} />
      <main className="pt-20 pb-16">
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Settings
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Manage your account and app preferences
              </p>
            </div>

            {/* Account Information */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Account Information</CardTitle>
                      <CardDescription>Your account details and status</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {user ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Email</span>
                        <span className="font-medium">{user.email}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Account Status</span>
                        <span className="font-medium text-green-600">Active</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Member Since</span>
                        <span className="font-medium">
                          {new Date(user.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-muted-foreground mb-4">You are not logged in</p>
                      <Button onClick={() => navigate("/auth")}>Sign In</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Notifications */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Manage your notification preferences</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Order Updates</span>
                    <span className="text-sm text-primary">Enabled</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Promotions</span>
                    <span className="text-sm text-primary">Enabled</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Newsletter</span>
                    <span className="text-sm text-primary">Enabled</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Security & Privacy */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Security & Privacy</CardTitle>
                      <CardDescription>Manage your security settings</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Two-Factor Authentication</span>
                    <span className="text-sm text-muted-foreground">Not Enabled</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Password</span>
                    <Button variant="outline" size="sm">Change Password</Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Privacy Settings</span>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Methods */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Payment Methods</CardTitle>
                      <CardDescription>Manage your saved payment methods</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className="text-muted-foreground mb-4">No payment methods saved</p>
                    <Button variant="outline" size="sm">Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* App Information */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>About Nepges Store</CardTitle>
                      <CardDescription>App version and information</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">1.0.0</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Terms of Service</span>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Privacy Policy</span>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium">Contact Support</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>support@nepgesstore.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Logout Button */}
            {user && (
              <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Card className="border-destructive/50">
                  <CardContent className="pt-6">
                    <Button
                      variant="destructive"
                      className="w-full"
                      size="lg"
                      onClick={handleLogout}
                      disabled={loading}
                    >
                      <LogOut className="w-5 h-5 mr-2" />
                      {loading ? "Logging out..." : "Log Out"}
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      You will be logged out of your account
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
