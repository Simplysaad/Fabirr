import Footer from "@/components/Footer";
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "@/components/Navbar";

export default function AdminLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex min-h-screen gap-4 bg-stone-50 font-sans text-gray-800">
        <Sidebar />
        <div className="w-full flex-1 p-8 md:p-12 overflow-y-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
}
