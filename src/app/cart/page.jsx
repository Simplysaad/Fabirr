// // "use client"; // Needs to be client-side to handle quantity changes
// import React, { useState } from "react";
import CartItem from "@/components/CartItem";
import Link from "next/link";

// const CartPage = () => {
//   // Mocking client-side state - in real app, get this from your Cart Context/Zustand
//   // const [items, setItems] = useState([
// {
//   title: "Jersey Scarf",
//   color: "Emerald Green",
//   quantity: 2,
//   amount: 3000,
//   image: "/hero.png"
// },
// {
//   title: "Silk Scarf",
//   color: "Royal Gold",
//   quantity: 1,
//   amount: 12000,
//   image: "/hero.png"
// }
//   // ]);

//   // const subtotal = items.reduce(
//   //   (acc, item) => acc + item.amount * item.quantity,
//   //   0
//   // );

//   return <div>helllo world</div>;

// //   if (items.length === 0) {
// //     return (
// //       <div className="pt-40 pb-20 text-center space-y-6">
// //         <h2 className="text-3xl font-serif text-red-900">Your bag is empty</h2>
// //         <Link
// //           href="/shop"
// //           className="inline-block border-b-2 border-red-900 pb-1 font-bold"
// //         >
// //           Back to the Collections
// //         </Link>
// //       </div>
// //     );
// //   }

// return (
//   <div className="pt-32 pb-20 px-8 md:px-16 container mx-auto">
//     <h1 className="text-4xl font-serif text-red-900 mb-12 border-b border-stone-100 pb-6">
//       Your Shopping Bag
//     </h1>

//     <div className="flex flex-col lg:flex-row gap-16">
//       {/* 1. ITEMS LIST */}
//       <div className="flex-1 space-y-8">
//         {items.map((item, idx) => (
//           <CartItem key={idx} item={item} />
//         ))}
//       </div>

//       {/* 2. ORDER SUMMARY */}
//       <div className="w-full lg:w-[380px]">
//         <div className="bg-stone-50 p-8 rounded-sm space-y-6">
//           <h2 className="text-xl font-serif text-red-900 border-b border-stone-200 pb-4">
//             Summary
//           </h2>

//           <div className="space-y-4 text-sm uppercase tracking-widest text-stone-600">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₦{subtotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Estimated Shipping</span>
//               <span className="text-green-600 text-[10px]">
//                 Complimentary
//               </span>
//             </div>
//           </div>

//           <div className="pt-6 border-t border-stone-200 flex justify-between items-end">
//             <span className="text-lg font-serif">Total</span>
//             <span className="text-2xl font-serif text-red-900">
//               ₦{subtotal.toLocaleString()}
//             </span>
//           </div>

//           <button className="w-full bg-red-900 hover:bg-black text-white py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300">
//             Proceed to Checkout
//           </button>

//           <p className="text-[10px] text-stone-400 text-center uppercase tracking-tighter">
//             Taxes calculated at checkout • Secure payment
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// // };

// export default CartPage;

import React from "react";

const page = () => {
  const items = [
    {
      title: "Jersey Scarf",
      color: "Emerald Green",
      quantity: 2,
      amount: 3000,
      image: "/hero.png"
    },
    {
      title: "Silk Scarf",
      color: "Royal Gold",
      quantity: 1,
      amount: 12000,
      image: "/hero.png"
    }
  ];
  return (
    <div className="pt-32 pb-20 px-8 md:px-16 container mx-auto">
      <h1 className="text-4xl font-serif text-red-900 mb-12 border-b border-stone-100 pb-6">
        Your Shopping Bag
      </h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* 1. ITEMS LIST */}
        <div className="flex-1 space-y-8">
          {items.map((item, idx) => (
            <CartItem key={idx} item={item} />
          ))}
        </div>

        {/* 2. ORDER SUMMARY */}
        <div className="w-full lg:w-[380px]">
          <div className="bg-stone-50 p-8 rounded-sm space-y-6">
            <h2 className="text-xl font-serif text-red-900 border-b border-stone-200 pb-4">
              Summary
            </h2>

            <div className="space-y-4 text-sm uppercase tracking-widest text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
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
                ₦{subtotal.toLocaleString()}
              </span>
            </div>

            <button className="w-full bg-red-900 hover:bg-black text-white py-4 uppercase tracking-[0.2em] text-xs transition-all duration-300">
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
