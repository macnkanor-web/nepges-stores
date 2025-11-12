import { StoreNavbar } from "@/components/shop/StoreNavbar";
import { CustomerCare } from "@/components/shop/CustomerCare";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";

const CustomerCarePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreNavbar products={mockProducts} />
      <main className="pt-20">
        <CustomerCare />
      </main>
      <Footer />
    </div>
  );
};

export default CustomerCarePage;
