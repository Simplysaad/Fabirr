"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SmartProductCard({ product }) {
  // Default to the main product image or the first color's image
  const [activeImage, setActiveImage] = useState(
    product.image || product.colors[0]?.image
  );
  const [activeColorName, setActiveColorName] = useState(
    product.colors[0]?.name
  );

  return (
    <div className="group bg-white border border-stone-100 p-4 rounded-sm shadow-sm hover:shadow-md transition-all">
      {/* 1. IMAGE WITH HOVER TRANSITION */}
      <Link
        href={`/shop/${product._id}`}
        className="relative block aspect-[3/4] overflow-hidden bg-stone-50"
      >
        <Image
          src={`/scarves/${activeImage}`}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>

      {/* 2. PRODUCT INFO */}
      <div className="mt-6 space-y-2 text-center">
        <h3 className="font-serif text-2xl text-red-900 capitalize tracking-tight">
          {product.name}
        </h3>
        <p className="text-stone-400 text-xs uppercase tracking-widest italic">
          {activeColorName}
        </p>
        <p className="text-lg font-light text-stone-800">
          ₦{product.price.toLocaleString()}
        </p>
      </div>

      {/* 3. QUICK COLOR SWATCHES (Your ColorSchema in action) */}
      <div className="mt-6 flex flex-wrap justify-center gap-2 px-2">
        {product.colors.slice(0, 6).map((color) => (
          <button
            key={color._id}
            onMouseEnter={() => {
              setActiveImage(color.image);
              setActiveColorName(color.name);
            }}
            style={{ backgroundColor: color.hex }}
            className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-125 ${
              activeColorName === color.name
                ? "border-red-900 scale-110"
                : "border-white shadow-sm"
            }`}
          />
        ))}
        {product.colors.length > 6 && (
          <Link
            href={`/shop/${product._id}`}
            className="text-[10px] flex items-center text-stone-400 hover:text-red-900"
          >
            +{product.colors.length - 6} More
          </Link>
        )}
      </div>

      {/* 4. ACTION */}
      <Link
        href={`/shop/${product._id}`}
        className="mt-6 block w-full border border-red-900 text-red-900 py-3 text-xs uppercase tracking-[0.2em] font-bold hover:bg-red-900 hover:text-white transition-all text-center"
      >
        Explore Collection
      </Link>
    </div>
  );
}
