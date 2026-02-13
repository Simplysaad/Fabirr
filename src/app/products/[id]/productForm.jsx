"use client";
import { useState } from "react";
import Image from "next/image";
import { addToCart } from "@/lib/actions/cart";

export default function ProductForm({ product }) {
  // State for dynamic image and selection
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [loading, setLoading] = useState(false);

  // Determine which image to show: Color-specific image OR the main product image
  const displayImage = selectedColor?.image || product.image;

  const handleAddToCart = async () => {
    setLoading(true);
    await addToCart({
      productId: product._id,
      quantity: 1,
      color: selectedColor?.name,
      price: product.price
    });
    setLoading(false);
    alert("Added to collection");
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT: DYNAMIC IMAGE */}
        <section className="relative aspect-[4/5] bg-stone-100 rounded-sm overflow-hidden">
          <Image
            src={`/scarves/${displayImage}`}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
        </section>

        {/* RIGHT: DETAILS */}
        <section className="flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-4xl font-serif text-red-900 capitalize">
              {product.name}
            </h1>
            <p className="text-2xl text-stone-800">
              ₦{product.price?.toLocaleString()}
            </p>
          </div>

          {/* COLOR SWATCHES */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-stone-400">
              Color:{" "}
              <span className="text-stone-900">{selectedColor?.name}</span>
            </h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color._id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all
                    ${selectedColor?._id === color._id ? "border-red-900" : "border-transparent"}`}
                >
                  <span
                    className="w-8 h-8 rounded-full border"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={loading}
            onClick={handleAddToCart}
            className="w-full bg-red-900 text-white py-5 hover:bg-black transition-all uppercase tracking-widest text-sm disabled:bg-stone-400"
          >
            {loading ? "Adding..." : "Add To Collection"}
          </button>
        </section>
      </div>
    </main>
  );
}
