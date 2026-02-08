import React from "react";
import Image from "next/image";
import { removeFromCart } from "@/actions/cart";

const CartItem = ({ item }) => {
  const { title, color, quantity, amount, image, productId } = item;
  return (
    <div className="cart-item  flex items-center gap-2 border rounded border-red-300 shadow  py-1 px-2">
      {/* <div className="cart-item-image h-16 w-auto p-2 overflow-hidden">
        <Image alt={title} src={image} height={50} width={50} />
      </div>
      <div className="cart-item-info flex gap- items-end w-full justify-between">
        <div className="flex flex-col">
          <p className="cart-item-title text-[1.1rem] font-medium">{title}</p>
          <span className="flex gap-1 text-red-800 capitalize text-[.9rem]">
            <p className="cart-item-title">{`x${quantity}`}</p>
            <p className="cart-item-title">{color}</p>
          </span>
        </div>
        <div>
          <p className="cart-item-title text-[1.2rem] font-medium">{`$${amount}`}</p>
        </div>
      </div>
      <div
        className="text-red-600 border rounded px-2"
        onClick={() => removeFromCart(item)}
      >
        x
      </div> */}
    </div>
  );
};

export default CartItem;
