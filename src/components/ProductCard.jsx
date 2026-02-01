import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name = "Jersey Scarf",
  price = 39.99,
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis?",
  nodesc = false,
  cart = false
}) => {
  return (
    <div className="flex flex-col mb-4 shadow border border-red-300 rounded gap-2 overflow-hidden">
      <div className="card-image overflow-hidden h-37.5">
        <Image src="/hero.png" width={200} height={100} alt="" />
      </div>
      <div className="card-info px-2 py-4">
        <a
          href="/"
          className="text-[1.2rem] text-red-900 hover:underline underline-offset-4 text-ellipsis"
        >
          {name}
        </a>
        <p className="card-price font-semibold text-[1.2rem]">${price}</p>
        <p className="text-[.9rem]">{!nodesc && description}</p>
      </div>
      {/* <span>Add to Cart</span> */}
      {cart && (
        <Link
          href="/"
          className="border text-center rounded px-4 py-2 bg-red-400 text-white hover:bg-red-500"
        >
          {/* <ShoppingCart /> */}+ Add to Cart
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
