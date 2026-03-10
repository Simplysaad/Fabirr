import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getSession from "@/lib/session";

export default async function StoreLayout({ children }) {
  const session = await getSession();
  const initialCartCount = session.cartItems?.length || 0;

  return (
    <>
      {/* Pass the count directly to your Navbar */}
      <Navbar cartCount={initialCartCount} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
