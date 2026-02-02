import CartItem from "@/components/CartItem";
import UnderlinedHeader from "@/components/UnderlinedHeader";
import React from "react";

const CartPage = () => {
  const cartItems = [
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
    },
  ];

  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <UnderlinedHeader text="My Cart" />

      <div className="cart-group flex flex-col gap-2 md:w-[60%] lg:w-[50%] py-12">
        {cartItems.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
