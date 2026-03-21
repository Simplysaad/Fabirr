import React from "react";
import getSession from "@/lib/session";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const page = async () => {
  const session = await getSession();

  const items = new Array(...session.cartItems);
  console.log("\n items", items)

  const subtotal = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <div className="pt-32 pb-20 px-8 md:px-16 container mx-auto">
      <h1 className="text-4xl font-serif text-red-900 mb-12 border-b border-stone-100 pb-6">
        Your Shopping Bag
      </h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* 1. ITEMS LIST */}

        {items.length > 0 ? (
          <div className="flex-1 space-y-8">
            {items.map((item, idx) => (
              <CartItem key={idx} item={item} />
            ))}
          </div>
        ) : (
          <EmptyCart />
        )}

        {/* 2. ORDER SUMMARY */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-stone-50 lg:p-8 md:p-4 p-2 rounded-sm space-y-6">
            <h2 className="text-xl font-serif text-red-900 border-b border-stone-200 pb-4">
              Summary
            </h2>

            <div className="space-y-4 text-sm uppercase tracking-widest text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="text-green-600 text-[10px]">
                  Complimentary
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 flex justify-between items-end">
              <span className="text-lg font-serif">Total</span>
              <span className="text-2xl font-serif text-red-900">
                ₦{subtotal?.toLocaleString()}
              </span>
            </div>

            <button
              disabled={items.length === 0}
              className="w-full bg-red-900 disabled:bg-stone-600 hover:bg-black text-white py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300"
            >
              Proceed to Checkout
            </button>

            <p className="text-[10px] text-stone-400 text-center uppercase tracking-tighter">
              Taxes calculated at checkout • Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
