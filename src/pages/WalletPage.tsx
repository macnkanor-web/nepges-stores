import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { VirtualWallet } from "@/components/shop/VirtualWallet";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";

const WalletPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar products={mockProducts} />
      <main className="pt-20">
        <VirtualWallet />
      </main>
      <Footer />
    </div>
  );
};

export default WalletPage;
