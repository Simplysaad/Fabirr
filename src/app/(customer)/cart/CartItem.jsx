"use client"
import React from "react";
import Image from "next/image";
import { removeFromCart } from "@/lib/actions/cart";
import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { name, color, quantity, amount, image, productId } = item;
  return (
    <div className="cart-item font-serif flex items-center gap-2 border rounded border-red-300 shadow  py-1 px-2">
      <div className="cart-item-image border rounded shadow-2xl h-16 w-auto p-1 overflow-hidden">
        <Image
          alt={name || "random product"}
          src={image || "/test.png"}
          height={50}
          width={50}
        />
      </div>
      <div className="cart-item-info flex flex-1 items-center  w-full justify-between">
        <div className="flex flex-col">
          <p className="cart-item-title text-[1.1rem] font-medium capitalize">
            {name}
          </p>
          <span className="flex gap-1 text-red-800 capitalize text-[.9rem]">
            <p className="cart-item-title">{`x${quantity}`}</p>
            <p className="cart-item-title">{color}</p>
          </span>
        </div>
        <div className="flex-0">
          <p className="cart-item-title text-[1.2rem] font-medium">{`₦${amount}`}</p>
        </div>
      </div>
      <div
        className="text-red-600  px-1"
        onClick={() => removeFromCart(item)}
      >
        <X />
      </div>
    </div>
  );
};

export default CartItem;
