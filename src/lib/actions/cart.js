import { revalidatePath } from "next/cache";
import getSession from "./session";


export async function addToCart({ productId, quantity = 1, color, amount }) {
  const session = await getSession();
  const existingItem = session.cart.find(
    (item) => item.productId === productId && item.color === color
  );

  if (existingItem) {
    existingItem.qty += qty;
  } else {
    session.cartItems.push({ color, productId, quantity, amount });
  }

  await session.save();
  revalidatePath("/cart");
}

export async function removeFromCart({ productId, color }) {
  const session = await getSession();
  session.cartItems = session.cart.filter(
    (item) => item.productId !== productId && item.color !== color
  );

  await session.save();
  revalidatePath("/cart");
}

export async function updateCartQuantity({ productId, quantity = 1, color }) {
  const session = await getSession();
  const existingItem = session.cart.find(
    (item) => item.productId === productId && item.color === color
  );

  if (existingItem) {
    existingItem.quantity = quantity;
    if (existingItem.quantity === 0) {
      session.cartItems = session.cart.filter(
        (item) => item.productId !== productId && item.color !== color
      );
    }
  }

  await session.save();
  revalidatePath("/cart");
}
