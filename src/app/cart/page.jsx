import CartItem from "@/components/CartItem";
import UnderlinedHeader from "@/components/UnderlinedHeader";
import getCartSession from "@/lib/session";
import React from "react";

const CartPage = () => {
  const cartItemsArray = [
    {
      title: "Jersey Scarf",
      color: "emerald green",
      quantity: 2,
      amount: 3000,
      image: "/hero.png"
    },
    {
      title: "Silk Scarf",
      color: "emerald green",
      quantity: 2,
      amount: 3000,
      image: "/hero.png"
    },
    {
      title: "Chiffon Scarf",
      color: "emerald green",
      quantity: 2,
      amount: 3000,
      image: "/hero.png"
    }
  ];

  const { cartItems = cartItemsArray } = getCartSession();

  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <UnderlinedHeader text="My Cart" />

      <div className="cart-group flex flex-col gap-2 md:w-[60%] lg:w-[50%] py-12">
        <div className="">
          {cartItems.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </div>
        <div className="cart-total flex justify-between ps-12 items-end w-full">
          <h1 className="title text-[1.5rem]">Total:</h1>
          <h2 className="text-[2rem]">$18,000</h2>
        </div>
      </div>
      <div className="cart-total text-[2rem] bg-red-400 rounded flex items-end gap-4 px-4 py-1">
        <h1 className="">Checkout</h1>
        <h2 className="text-[2rem]">$18,000</h2>
      </div>
    </div>
  );
};

export default CartPage;
