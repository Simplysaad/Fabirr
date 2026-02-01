import Image from "next/image";
import React from "react";

const ProductCard = ({
  product = { name: "Jersey Scarf", price: 39.99, description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, nobis?" }
}) => {
  return (
    <div className="flex flex-col col-span-2 mb-4 shadow border border-red-300 rounded gap-2 overflow-hidden">
      <div className="card-image overflow-hidden h-37.5">
        <Image src="/hero.png" width={200} height={100} alt=""/>
      </div>
      <div className="card-info px-2 py-4">
        <a href="/" className="text-[1.2rem] text-red-900 hover:underline underline-offset-4 text-ellipsis">{product.name}</a>
        <p className="card-price font-semibold text-[1.2rem]">${product.price}</p>
        <p className="text-[.9rem]">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
