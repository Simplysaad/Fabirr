import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-red-100 to-red-300">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
