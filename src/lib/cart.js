import { revalidatePath } from "next/cache";
import getCartSession from "./session";


// {
//    productId: String
//     name: String,
//     quantity: Number,
//     color: String,
//     amount: Number
// }

export async function addToCart({ productId, quantity = 1, color, amount }) {
  const session = await getCartSession();
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
  const session = await getCartSession();
  session.cartItems = session.cart.filter(
    (item) => item.productId !== productId && item.color !== color
  );

  await session.save();
  revalidatePath("/cart");
}

export async function updateCartQuantity({ productId, quantity = 1, color }) {
  const session = await getCartSession();
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
