"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
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
  return (
    <section
      id="nav"
      className="backdrop-blur min-w-screen text-red-900 fixed top-0 px-4 lg:px-16 flex gap-16 items-center py-6 justify-between"
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
                className={`${pathname === link.path ? "text-red-600 underline " : ""} hover:text-red-600 hover:underline underline-offset-4`}
                href={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
