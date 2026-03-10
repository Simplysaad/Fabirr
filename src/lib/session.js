// session.js
"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function getSession() {
  // NEXT.JS 15 FIX: You must await cookies() before passing it to iron-session
  const cookieStore = await cookies();

  const session = await getIronSession(cookieStore, {
    password: process.env.COOKIE_PASSWORD,
    cookieName: "cart-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true // Recommended for security
    }
  });

  // Ensure default values exist if the session is empty
  if (!session.cartItems) {
    session.cartItems = [];
  }

  return session;
}
