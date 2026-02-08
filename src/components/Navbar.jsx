"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
const navOptions = [
  {
    text: "Home",
    path: "/",
    isActive: false
  },
  {
    text: "Shop",
    path: "/shop",
    isActive: false
  },
  {
    text: "Cart",
    path: "/cart",
    isActive: false
  }
];
const Navbar = ({ links = navOptions }) => {
  const pathname = usePathname();
  const [cartQuantity, setCartQuantity] = useState(88)


  return (
    <section
      id="nav"
      className="backdrop-blur z-10 min-w-screen text-red-900 fixed top-0 px-4 lg:px-16 flex gap-16 items-center py-6 justify-between"
    >
      <div className="nav-brand  font-semibold">
        <Link
          href="/"
          className="nav-brand-text text-red-900 text-[1.5rem] font-sans"
        >
          FABIRR
        </Link>
      </div>
      <div className="nav-options">
        <ul className="flex gap-3 font-light">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                className={`${pathname === link.path ? "text-red-600  border-b" : ""} flex gap-1 items-center hover:text-red-600 hover:border-b underline-offset-4`}
                href={link.path}
              >
                <span>{link.text}</span>
                {link.text === "Cart" && (
                  <span className="border  p-0 rounded bg-red-400 text-red-200 text-[.6rem] px-1 font-semibold">
                    {cartQuantity}
                  </span>
                )}
              </Link>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
