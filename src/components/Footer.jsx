import React from "react";

const Footer = () => {
  return (
    // to-red-400 from-red-300 bg-gradient-to-r
    <footer className="mt-64 border-t mx-16  text-center text-red-400 text-[.9rem] py-4">
      &copy;{new Date().getFullYear()} FABIRR. All Rights Reserved.
    </footer>
  );
};

export default Footer;
