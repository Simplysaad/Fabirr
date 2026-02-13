import React, { useState } from "react";
import Image from "next/image";

const DisplayImage = ({ defaultImage = "", handleChange }) => {
  const [currentImage, setCurrentImage] = useState(defaultImage);
  return (
    <>
      <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
        <Image
          src={`/scarves/${currentImage}`}
          alt={currentImage}
          fill
          className="object-cover"
          priority
        />
      </div>

      {product.colors?.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-stone-400">
            Select Shade
          </h3>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color._id}
                title={color.name}
                disabled={!color.available}
                className={`group relative w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center
                        ${color.available ? "border-transparent hover:border-red-900" : "opacity-30 cursor-not-allowed"}`}
              >
                <span
                  className="w-8 h-8 rounded-full border border-stone-200"
                  style={{ backgroundColor: color.hex }}
                />
                {!color.available && (
                  <span className="absolute w-full h-[1px] bg-stone-400 rotate-45" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayImage;
