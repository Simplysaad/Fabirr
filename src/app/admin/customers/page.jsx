import React from 'react';
import { Search, Mail, Crown, MoreHorizontal, UserPlus, Star, Filter } from 'lucide-react';

const CustomersPage = () => {
  // Mock Data: Categorized by loyalty tier and spending
  const customers = [
    { id: 'Q-9901', name: 'Amara Kanu', email: 'amara.k@example.com', orders: 12, spent: '₦150,000', tier: 'Grand Queen', joined: 'Jan 2024' },
    { id: 'Q-9892', name: 'Zainab Okoro', email: 'z.okoro@outlook.com', orders: 5, spent: '₦62,500', tier: 'Royal', joined: 'Mar 2024' },
    { id: 'Q-9855', name: 'Elena Rodriguez', email: 'elena.rod@gmail.com', orders: 2, spent: '₦28,000', tier: 'Noble', joined: 'June 2024' },
    { id: 'Q-9840', name: 'Fatima Hassan', email: 'f.hassan@web.com', orders: 8, spent: '₦95,000', tier: 'Royal', joined: 'Aug 2024' },
  ];

  const tierStyles = {
    'Grand Queen': "bg-red-900 text-amber-400 border-red-800 shadow-sm", // VIP Tier
    'Royal': "bg-red-50 text-red-900 border-red-200", // Mid Tier
    'Noble': "bg-stone-100 text-stone-600 border-stone-200", // New/Standard
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      {/* HEADER AREA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-red-900">
            The Queens' Registry
          </h1>
          <p className="text-gray-500">
            Managing your community of {`${(customers.length + 1, 116)}`}{" "}
            elegant shoppers.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-red-400 hover:bg-red-500 text-white rounded-lg transition-all shadow-md font-bold text-sm">
            <UserPlus size={18} /> Add New Queen
          </button>
        </div>
      </div>

      {/* SEGMENTATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-900 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
          <Crown className="absolute -right-4 -bottom-4 w-24 h-24 text-red-800 opacity-50 rotate-12" />
          <p className="text-red-200 text-xs uppercase tracking-widest font-bold mb-1">
            Grand Queens
          </p>
          <h3 className="text-3xl font-serif">124</h3>
          <p className="text-red-300 text-sm mt-2 font-medium">
            VIPs with 10+ orders
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">
            Total Members
          </p>
          <h3 className="text-3xl font-serif text-red-900">1,120</h3>
          <p className="text-green-600 text-sm mt-2 font-medium">
            ↑ 12% growth this month
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">
            Avg. Lifetime Value
          </p>
          <h3 className="text-3xl font-serif text-red-900">₦42,500</h3>
          <p className="text-gray-500 text-sm mt-2 font-medium">
            Per FABIRR Queen
          </p>
        </div>
      </div>

      {/* CUSTOMER TABLE */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-stone-50/50">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, email, or tier..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-red-400 text-sm transition-all shadow-inner"
            />
          </div>
          <button className="w-full md:w-auto px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-red-900 hover:bg-white rounded-xl transition-all border border-transparent hover:border-stone-200">
            <Filter size={16} /> Advanced Segments
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">
                  The Queen
                </th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">
                  Tier Status
                </th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">
                  Orders
                </th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">
                  Joined
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {customers.map((queen) => (
                <tr
                  key={queen.id}
                  className="hover:bg-red-50/30 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm">
                        {queen.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 flex items-center gap-2">
                          {queen.name}
                          {queen.tier === "Grand Queen" && (
                            <Star
                              size={12}
                              className="fill-amber-400 text-amber-400"
                            />
                          )}
                        </div>
                        <div className="text-xs text-gray-400">
                          {queen.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold border tracking-wider uppercase ${tierStyles[queen.tier]}`}
                    >
                      {queen.tier}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-gray-700">
                    {queen.orders} orders
                  </td>
                  <td className="px-6 py-5 font-bold text-red-900">
                    {queen.spent}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500">
                    {queen.joined}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        title="Message Queen"
                        className="p-2 text-gray-400 hover:text-red-900 hover:bg-white rounded-lg transition-all border border-transparent hover:border-stone-100"
                      >
                        <Mail size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-900 hover:bg-white rounded-lg transition-all">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
