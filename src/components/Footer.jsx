import { Instagram, Twitter, Facebook, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-50 pt-20 pb-10 px-8 md:px-16 border-t border-stone-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif tracking-tighter text-red-900">
              FABBIRR
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Crafting timeless elegance for the modern Queen. Our scarves are
              heirlooms designed to be passed down through generations.
            </p>
            <div className="flex gap-5 text-red-900/60">
              <Link href="#" className="hover:text-red-900 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-red-900 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-red-900 transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* SHOP COLUMN */}
          <div>
            <h4 className="font-serif text-lg text-red-900 mb-6 uppercase tracking-widest text-xs">
              Collections
            </h4>
            <ul className="space-y-4 text-stone-600 text-sm font-light">
              <li>
                <Link
                  href="/shop/silk"
                  className="hover:text-red-900 transition-colors"
                >
                  Silk Scarves
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/chiffon"
                  className="hover:text-red-900 transition-colors"
                >
                  Chiffon Wraps
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/jersey"
                  className="hover:text-red-900 transition-colors"
                >
                  Jersey Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/new"
                  className="hover:text-red-900 transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT COLUMN */}
          <div>
            <h4 className="font-serif text-lg text-red-900 mb-6 uppercase tracking-widest text-xs">
              Client Care
            </h4>
            <ul className="space-y-4 text-stone-600 text-sm font-light">
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-red-900 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-red-900 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/care"
                  className="hover:text-red-900 transition-colors"
                >
                  Fabric Care Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-900 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER COLUMN */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg text-red-900 mb-2 uppercase tracking-widest text-xs">
              Join The Royalty
            </h4>
            <p className="text-stone-500 text-xs italic">
              Subscribe for early access to limited edition drops.
            </p>
            <form className="flex border-b border-red-900/30 pb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent text-sm w-full outline-none placeholder:text-stone-300"
              />
              <button className="text-red-900 text-xs font-bold tracking-widest uppercase">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR: TRUST & LEGAL */}
        <div className="pt-10 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-stone-400 font-bold">
            <span className="flex items-center gap-2">
              <Globe size={14} /> Free Worldwide Shipping
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} /> 100% Authentic Materials
            </span>
          </div>

          <div className="text-[10px] text-stone-400 tracking-widest">
            &copy; {new Date().getFullYear()} FABBIRR ELEGANCE. ALL RIGHTS
            RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
