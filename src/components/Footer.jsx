import { Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // to-red-400 from-red-300 bg-gradient-to-r
   <footer className="bg-white border-t py-12 px-8 md:px-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-red-900 mb-4">FABIRR</h3>
            <p className="text-sm text-gray-500">
              Wrap yourself in the elegance you deserve.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/shop/silk">Silk Scarves</Link>
              </li>
              <li>
                <Link href="/shop/cashmere">Cashmere</Link>
              </li>
              <li>
                <Link href="/shop/linen">Linen Collection</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/shipping">Shipping & Returns</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/size-guide">Size Guide</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-red-500">
                <Instagram/>
                Instagram
              </Link>
              <Link href="#" className="hover:text-red-500">
               <Twitter/>
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;


// import React from "react";

// const Footer = () => {
//   return (
//     // to-red-400 from-red-300 bg-gradient-to-r
//     <footer className="mt-64 border-t absolute left-[5%] bottom-0 w-[90%] px-16  text-center text-red-400 text-[.9rem] py-4">
//       &copy;{new Date().getFullYear()} FABIRR. All Rights Reserved.
//     </footer>
//   );
// };

// export default Footer;
