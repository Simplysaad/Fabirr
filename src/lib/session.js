// session.js
"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function getSession() {
  const cookieStore = await cookies();

  const session = await getIronSession(cookieStore, {
    password: process.env.COOKIE_PASSWORD,
    cookieName: "cart-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true 
    }
  });

  if (!session) return null;
  else if (!session?.cartItems) {
    session.cartItems = [];
  }

  return session;
}
