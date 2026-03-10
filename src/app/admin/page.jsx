import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  AlertCircle,
  Plus
} from "lucide-react"; // Assuming lucide-react for icons

const AdminDashboard = () => {
  // Mock Data
  const stats = [
    {
      label: "Total Revenue",
      value: "₦1,240,000",
      icon: <TrendingUp className="text-red-400" />,
      change: "+12%"
    },
    {
      label: "Active Orders",
      value: "48",
      icon: <ShoppingBag className="text-red-400" />,
      change: "8 new today"
    },
    {
      label: "Low Stock Items",
      value: "5",
      icon: <AlertCircle className="text-red-900" />,
      change: "Action required"
    },
    {
      label: "FABIRR Queens",
      value: "1,120",
      icon: <Users className="text-red-400" />,
      change: "+54 this week"
    }
  ];

  const recentOrders = [
    {
      id: "#00124",
      customer: "Sarah J.",
      items: "2x Silk Hijab",
      total: "₦24,000",
      status: "Processing"
    },
    {
      id: "#00123",
      customer: "Aisha M.",
      items: "1x Chiffon Wrap",
      total: "₦12,500",
      status: "Shipped"
    },
    {
      id: "#00122",
      customer: "Elena R.",
      items: "3x Jersey Scarf",
      total: "₦31,000",
      status: "Delivered"
    }
  ];

  return (
    <div className="flex min-h-screen bg-stone-50 font-sans text-gray-800">

      {/* MAIN CONTENT */}
      <main className="">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-serif text-red-900">
              Dashboard Overview
            </h1>
            <p className="text-gray-500">Welcome back, Queen Mother.</p>
          </div>
          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded flex items-center gap-2 transition-all shadow-md">
            <Plus size={18} /> Add New Scarf
          </button>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-stone-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-stone-100 rounded-lg">{stat.icon}</div>
                <span
                  className={`text-xs font-bold ${idx === 2 ? "text-red-600" : "text-green-600"}`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-red-900">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* CONTENT ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* RECENT ORDERS TABLE */}
          <section className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h2 className="font-serif text-xl text-red-900">
                Recent Royal Orders
              </h2>
              <button className="text-red-900 text-sm font-semibold hover:underline">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-stone-50 text-gray-500 text-xs uppercase">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {recentOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-stone-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-mono text-sm">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 text-red-900 font-semibold">
                        {order.total}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium 
                          ${order.status === "Shipped" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* STOCK ALERTS / QUICK ACTIONS */}
          <section className="bg-red-900 text-white rounded-xl p-8 shadow-lg relative overflow-hidden">
            <h2 className="font-serif text-2xl mb-6 relative z-10">
              Inventory Alerts
            </h2>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4 items-center bg-red-800/50 p-4 rounded-lg border border-red-700">
                <div className="w-12 h-12 bg-red-400 rounded-md shrink-0 overflow-hidden">
                  {/* Placeholder for Scarf Image */}
                  <div className="w-full h-full bg-stone-200 animate-pulse" />
                </div>
                <div>
                  <p className="font-bold text-sm">Crimson Silk Wrap</p>
                  <p className="text-xs text-red-200">Only 2 left in stock</p>
                </div>
              </div>
              <button className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-red-900 font-bold rounded transition-colors uppercase text-sm tracking-widest">
                Restock All Items
              </button>
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-red-800 rounded-full opacity-30" />
          </section>
        </div>
      </main>
    </div>
  );
};

// Helper Component


export default AdminDashboard;
