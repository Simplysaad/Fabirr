"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function getSession() {
  const session = await getIronSession(cookies(), {
    password: process.env.COOKIE_PASSWORD,
    cookieName: "cart-session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax"
    }
  });

  const defaultSession = {
    user: null,
    cartItems: []
  };
  return { ...defaultSession, ...session };
}
