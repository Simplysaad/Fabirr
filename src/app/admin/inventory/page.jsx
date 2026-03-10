"use client"
import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreHorizontal,
  Edit,
  Trash2,
  ArrowUpDown
} from "lucide-react";

const InventoryPage = () => {
  // Mock Data tailored for a scarf business
  const [products] = useState([
    {
      id: "SKU-001",
      name: "Midnight Silk Hijab",
      material: "Mulberry Silk",
      stock: 45,
      price: "₦12,500",
      status: "In Stock",
      image: "/silk-blue.jpg"
    },
    {
      id: "SKU-002",
      name: "Crimson Wool Wrap",
      material: "Merino Wool",
      stock: 3,
      price: "₦28,000",
      status: "Low Stock",
      image: "/wool-red.jpg"
    },
    {
      id: "SKU-003",
      name: "Golden Chiffon Shawl",
      material: "Chiffon",
      stock: 0,
      price: "₦15,000",
      status: "Out of Stock",
      image: "/chiffon-gold.jpg"
    },
    {
      id: "SKU-004",
      name: "Emerald Jersey Scarf",
      material: "Premium Jersey",
      stock: 82,
      price: "₦8,500",
      status: "In Stock",
      image: "/jersey-green.jpg"
    }
  ]);

  return (
    <div className="space-y-8">
      {/* 1. TOP HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-red-900">The Royal Vault</h1>
          <p className="text-gray-500">
            Manage and track your exquisite scarf collections.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg bg-white hover:bg-stone-50 transition-all text-sm font-medium">
            <Download size={16} /> Export CSV
          </button>
          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg shadow-md transition-all text-sm font-bold">
            + New Scarf
          </button>
        </div>
      </div>

      {/* 2. FILTERS & SEARCH */}
      <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, SKU, or material..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-100 focus:outline-red-400 text-sm"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select className="flex-1 md:w-40 px-3 py-2 rounded-lg border border-stone-100 bg-stone-50 text-sm outline-none">
            <option>All Materials</option>
            <option>Silk</option>
            <option>Chiffon</option>
            <option>Wool</option>
          </select>
          <button className="px-4 py-2 bg-stone-100 rounded-lg hover:bg-stone-200 transition-all">
            <Filter size={18} className="text-red-900" />
          </button>
        </div>
      </div>

      {/* 3. INVENTORY TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 border-b border-stone-200">
              <th className="px-6 py-4 text-xs uppercase tracking-widest font-serif text-red-900">
                <div className="flex items-center gap-2 cursor-pointer">
                  Product <ArrowUpDown size={12} />
                </div>
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest font-serif text-red-900">
                Material
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest font-serif text-red-900">
                Price
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest font-serif text-red-900 text-center">
                Stock
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-widest font-serif text-red-900">
                Status
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-stone-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
                      {/* Placeholder for Product Image */}
                      <div className="w-full h-full bg-red-50 flex items-center justify-center text-[10px] text-red-200">
                        IMG
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-xs text-gray-400 font-mono uppercase">
                        {product.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {product.material}
                </td>
                <td className="px-6 py-4 font-semibold text-red-900">
                  {product.price}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`text-sm font-medium ${product.stock <= 5 ? "text-red-500 font-bold" : "text-gray-600"}`}
                  >
                    {product.stock} units
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${
                      product.status === "In Stock"
                        ? "bg-green-100 text-green-800"
                        : product.status === "Low Stock"
                          ? "bg-amber-100 text-amber-800 animate-pulse"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-stone-200 rounded-lg text-gray-400 hover:text-red-900 transition-all">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 4. PAGINATION */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-sm text-gray-500">
          <p>Showing 1 to 4 of 24 products</p>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border border-stone-300 rounded hover:bg-white disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 border border-stone-300 rounded bg-white font-bold text-red-900">
              1
            </button>
            <button className="px-3 py-1 border border-stone-300 rounded hover:bg-white">
              2
            </button>
            <button className="px-3 py-1 border border-stone-300 rounded hover:bg-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
