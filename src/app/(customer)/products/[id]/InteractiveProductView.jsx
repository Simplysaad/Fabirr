"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { addToCart } from "@/lib/actions/cart"; // Assuming this is your action import

export default function InteractiveProductView({ product }) {
  const [mainImage, setMainImage] = useState(product.image);
  const [selections, setSelections] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateQty = (color, delta) => {
    if (color.image) setMainImage(color.image);

    setSelections((prev) => ({
      ...prev,
      [color._id]: Math.max(0, (prev[color._id] || 0) + delta)
    }));
  };

  const handleAddToCartClick = async () => {
    const itemsToProcess = product.colors.filter((c) => selections[c._id] > 0);

    setIsLoading(true);
    try {
      await Promise.all(
        itemsToProcess.map((color) =>
          addToCart({
            productId: product._id,
            quantity: selections[color._id],
            color: color.name,
            price: product.price
          })
        )
      );
      setSelections({});
    } catch (error) {
      console.error("Cart error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const totalItems = Object.values(selections).reduce((a, b) => a + b, 0);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* LEFT: DYNAMIC IMAGE SECTION */}
      <section className="stick top-32 h-fit">
        <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm border border-stone-100">
          <Image
            src={`/scarves/${mainImage || "placeholder.png"}`}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
        </div>
      </section>

      {/* RIGHT: DETAILS & QUANTITY SELECTOR */}
      <section className="flex flex-col space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-red-900 capitalize leading-tight">
            {product.name}
          </h1>
          <p className="text-3xl text-stone-800 font-light italic">
            ₦{product.price?.toLocaleString()}
          </p>
          <p className="text-stone-600 leading-relaxed text-lg">
            {product.description}
          </p>
        </header>

        <div className="border-t border-stone-100 pt-8 space-y-6">
          <h3 className="text-sm uppercase tracking-[0.2em] text-red-900 font-bold">
            Select Shades & Quantities
          </h3>

          <div className="space-y-4">
            {product.colors.map((color) => (
              <div
                key={color._id}
                onMouseEnter={() => color.image && setMainImage(color.image)}
                className={`flex items-center justify-between p-4 rounded-sm border transition-all ${
                  selections[color._id] > 0
                    ? "border-red-900 bg-red-50/30"
                    : "border-stone-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="w-10 h-10 rounded-full border border-stone-200 shadow-inner cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => color.image && setMainImage(color.image)}
                  />
                  <div>
                    <p className="font-medium text-stone-800">{color.name}</p>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                     xyz
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-full px-3 py-1">
                  <button
                    onClick={() => handleUpdateQty(color, -1)}
                    className="hover:text-red-900"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-6 text-center font-serif font-bold text-red-900">
                    {selections[color._id] || 0}
                  </span>
                  <button
                    onClick={() => handleUpdateQty(color, 1)}
                    className="hover:text-red-900"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CART ACTION */}
        <div className="pt-6">
          <button
            onClick={handleAddToCartClick}
            disabled={totalItems === 0 || isLoading}
            className="w-full bg-red-900 text-white py-5 rounded-sm hover:bg-black disabled:bg-stone-300 disabled:cursor-not-allowed transition-all duration-500 uppercase tracking-[0.3em] text-sm font-medium flex items-center justify-center gap-3"
          >
            <ShoppingBag size={18} />
            {isLoading
              ? "Adding to Collection..."
              : totalItems > 0
                ? `Add ${totalItems} to Collection`
                : "Select Your Shades"}
          </button>
        </div>
      </section>
    </div>
  );
}
