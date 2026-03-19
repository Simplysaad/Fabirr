import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 bg-stone-50 border border-stone-100 rounded-sm">
      {/* Minimalist Icon */}
      <div className="mb-6 relative">
        <ShoppingBag className="w-10 h-10 text-stone-300 stroke-[1]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-900 rounded-full animate-pulse" />
      </div>

      {/* Typography matches your Summary header */}
      <h3 className="text-xl font-serif text-red-900 mb-2">
        Your Collection is Empty
      </h3>

      {/* Subtle supporting text */}
      <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-8">
        Discover our latest arrivals
      </p>

      {/* Button matches your "Proceed to Checkout" style */}
      <Link href={"/"} className="px-10 py-4 border border-red-900 text-red-900 hover:bg-red-900 hover:text-white uppercase tracking-[0.2em] text-xs transition-all duration-300">
        Browse Boutique
      </Link>

      {/* Decorative footer line */}
      <div className="mt-12 w-12 h-[1px] bg-stone-300" />
    </div>
  );
};

export default EmptyCart;
