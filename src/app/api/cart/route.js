// import { addToCart } from "@/actions/cart";
import { Product } from "@/lib/db";
import getSession from "@/lib/session";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getSession();

  return NextResponse.json({
    items: session.cartItems,
    total: session.cartItems?.reduce((acc, item) => acc + item.amount, 0) || 0
  });
}

export async function POST(req) {
  const { productId, color } = await req.json();
  const session = await getSession();

  const existingItem = session.cart.find(
    (item) => item.productId === productId && item.color === color
  );

  try {
    const currentProduct = await Product.findOne({ _id: productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.amount = currentProduct.price * existingItem.quantity;
    } else {
      session.cartItems.push({
        color,
        productId,
        quantity,
        amount: currentProduct.price * quantity
      });
    }

    await session.save();
  } catch (err) {
    console.error(err);
  }
  return NextResponse.json({
    cartItems: session.cartItems
  });
}

// export async function PATCH(req) {
//   const session = await getSession();

//   const { productId, quantity } = await req.json();


// }
