"use server";
// cart.js
import { revalidatePath } from "next/cache";
import getSession from "../session";

export async function addToCart({ name, productId, quantity = 1, color, amount }) {
  const session = await getSession();
  const existingItem = session.cartItems.find(
    (item) => item.productId === productId && item.color === color
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.amount += amount;
  } else {
    session.cartItems.push({ name, color, productId, quantity, amount });
  }
  
  await session.save();
  revalidatePath("/cart");
}

export async function removeFromCart({ productId, color }) {
  const session = await getSession();

  session.cartItems = session.cartItems.filter(
    (item) => item.productId !== productId || item.color !== color
  );

  await session.save();
  revalidatePath("/cart");
}

export async function updateCartQuantity({ productId, quantity = 1, color }) {
  const session = await getSession();
  const existingItem = session.cartItems.find(
    (item) => item.productId === productId && item.color === color
  );

  if (existingItem) {
    existingItem.quantity = quantity;
    if (existingItem.quantity === 0) {
      session.cartItems = session.cartItems.filter(
        (item) => item.productId !== productId && item.color !== color
      );
    }
  }

  await session.save();
  revalidatePath("/cart");
}
