import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  AlertCircle,
  Plus
} from "lucide-react";
import Link from "next/link";

const LinkItem = ({ icon, label, active = false, href }) => (
  <Link
    href={href}
    className={`flex items-center gap-4 cursor-pointer p-2 rounded-lg transition-all ${active ? "bg-red-800 text-white" : "text-red-200 hover:text-white hover:bg-red-800/50"}`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

const Sidebar = () => {
  return (
    <aside className="w-64 bg-red-900 text-white flex flex-col p-6 hidden md:flex">
      <div className="mb-12">
        <h2 className="text-2xl font-serif tracking-tight border-b border-red-800 pb-4">
          FABIRR <span className="text-red-300">Admin</span>
        </h2>
      </div>

      <nav className="space-y-6 flex-1">
        <LinkItem
          href={"/admin/"}
          icon={<LayoutDashboard size={20} />}
          label="Overview"
          active
        />
        <LinkItem
          href={"/admin/inventory"}
          icon={<Package size={20} />}
          label="Inventory"
        />
        <LinkItem
          href={"/admin/orders"}
          icon={<ShoppingBag size={20} />}
          label="Orders"
        />
        <LinkItem
          href={"/admin/customers"}
          icon={<Users size={20} />}
          label="Customers"
        />
      </nav>

      <div className="mt-auto pt-6 border-t border-red-800 opacity-70 text-sm">
        <p>© 2024 Fabirr Elegance</p>
      </div>
    </aside>
  );
};

export default Sidebar;
