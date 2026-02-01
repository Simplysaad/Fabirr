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
    text: "Contact",
    path: "/contact",
    isActive: false
  }
];
const Navbar = ({ links = navOptions }) => {
  return (
    <section
      id="nav"
      className="backdrop-blur min-w-screen text-red-900 fixed top-0 px-4 lg:px-16 flex gap-16 items-center py-6 justify-between"
    >
      <div className="nav-brand  font-semibold">
        <a
          href="/"
          className="nav-brand-text text-red-900 text-[1.5rem] font-sans"
        >
          FABIRR
        </a>
      </div>
      <div className="nav-options">
        <ul className="flex gap-3 font-light">
          {links.map((link, idx) => (
            <li key={idx}>
              <a className="hover:text-red-600 hover:underline" href={link.path}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
