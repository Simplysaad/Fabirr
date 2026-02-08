// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ProductCard = ({
//   name ,
//   price,
//   description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis?",
//   nodesc = false,
//   cart = false
// }) => {
//   return (
//     <div className="flex flex-col mb-4 shadow border border-red-300 rounded gap-2 overflow-hidden">
//       <div className="card-image overflow-hidden h-37.5">
//         <Image src="/hero.png" width={200} height={100} alt="" />
//       </div>
//       <div className="card-info px-2 py-4">
//         <a
//           href="/"
//           className="text-[1.2rem] capitalize text-red-900 hover:underline underline-offset-4 text-ellipsis"
//         >
//           {name}
//         </a>
//         <p className="card-price font-semibold text-[1.2rem]">₦{price}</p>
//         <p className="text-[.9rem]">{!nodesc && description}</p>
//       </div>
//       {/* <span>Add to Cart</span> */}
//       {cart && (
//         <Link
//           href="/"
//           className="border text-center rounded px-4 py-2 bg-red-400 text-white hover:bg-red-500"
//         >
//           {/* <ShoppingCart /> */}+ Add to Cart
//         </Link>
//       )}
//     </div>
//   );
// };

// export default ProductCard;

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { name, price, image, _id } = product;
  return (
    <Link href={`/product/${_id}`} className="group block">
      <div className="relative  overflow-hidden bg-stone-100 rounded-sm mb-4">
        {/* Product Image */}
        {/* <Image src={images?.[0] || "/hero.png"} alt={name} fill /> */}

        <Image
          src={`/scarves/${image}`}
          // src={`/scarves/chiffon-black-#010101.jpg`}
          // src="/scarves/chiffon-black-010101.jpg"
          width={200}
          height={100}
          alt={"image"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
          <button className="w-full py-2 bg-red-900 text-white text-xs uppercase tracking-widest hover:bg-black transition-colors">
            Quick Add +
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm text-stone-800 uppercase tracking-wider group-hover:text-red-900 transition-colors">
          {name}
        </h3>
        <p className="text-red-900 font-serif text-lg">
          ₦{price?.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

const ProductCardSkeleton = () => {
  return (
    <div className="group block w-full">
      {/* Image Placeholder */}
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 rounded-sm mb-4 animate-pulse">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>

      {/* Text Placeholders */}
      <div className="space-y-3">
        {/* Name Line 1 */}
        <div className="h-3 w-3/4 bg-stone-200 rounded-full animate-pulse" />

        {/* Price Line */}
        <div className="h-5 w-1/3 bg-red-50 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export { ProductCardSkeleton };
export default ProductCard;
