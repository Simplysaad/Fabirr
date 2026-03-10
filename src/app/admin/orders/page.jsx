import React from 'react';
import { Search, Filter, Eye, Truck, CheckCircle, Clock, MoreVertical, ExternalLink } from 'lucide-react';

const OrdersPage = () => {
  // Mock Data: Reflecting the high-end scarf order lifecycle
  const orders = [
    { id: 'ORD-7721', date: 'Oct 24, 2024', customer: 'Amara K.', items: 2, total: '₦25,000', status: 'Processing', method: 'Express Shipping' },
    { id: 'ORD-7720', date: 'Oct 23, 2024', customer: 'Zainab O.', items: 1, total: '₦12,500', status: 'Shipped', method: 'Standard Delivery' },
    { id: 'ORD-7719', date: 'Oct 23, 2024', customer: 'Fatima H.', items: 3, total: '₦42,000', status: 'Delivered', method: 'Express Shipping' },
    { id: 'ORD-7718', date: 'Oct 22, 2024', customer: 'Chioma A.', items: 1, total: '₦8,500', status: 'Pending', method: 'Standard Delivery' },
  ];

  const statusStyles = {
    Pending: "bg-stone-100 text-stone-600 border-stone-200",
    Processing: "bg-amber-50 text-amber-700 border-amber-200",
    Shipped: "bg-blue-50 text-blue-700 border-blue-200",
    Delivered: "bg-green-50 text-green-700 border-green-200",
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif text-red-900">Order Management</h1>
          <p className="text-gray-500 italic">Tracking the journey of every FABIRR Queen's selection.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-red-900 text-white rounded-lg shadow-lg hover:bg-black transition-all font-medium text-sm">
            <CheckCircle size={16} /> Batch Fulfill
          </button>
        </div>
      </div>

      {/* QUICK STATS FOR ORDERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Unfulfilled', count: 12, icon: <Clock className="text-amber-500" /> },
          { label: 'In Transit', count: 8, icon: <Truck className="text-blue-500" /> },
          { label: 'Completed', count: 142, icon: <CheckCircle className="text-green-500" /> },
          { label: 'Total Revenue', count: '₦1.2M', icon: <span className="text-red-900 font-bold">₦</span> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{stat.label}</p>
              <h4 className="text-xl font-bold text-red-900">{stat.count}</h4>
            </div>
            <div className="p-2 bg-stone-50 rounded-lg">{stat.icon}</div>
          </div>
        ))}
      </div>

      {/* ORDERS TABLE CONTAINER */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-stone-100 flex flex-col sm:flex-row gap-4 items-center justify-between bg-stone-50/50">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text" 
              placeholder="Search Order ID or Queen..." 
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-stone-200 focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-stone-200 rounded-full bg-white text-sm hover:bg-stone-50 transition-all">
              <Filter size={14} /> Filter
            </button>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-stone-50/80 border-b border-stone-200">
              <tr>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">Order ID</th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">Date</th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">Customer</th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">Total</th>
                <th className="px-6 py-4 text-xs font-serif uppercase tracking-widest text-red-900">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-red-50/30 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-mono text-sm font-semibold text-gray-700">{order.id}</td>
                  <td className="px-6 py-5 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-5">
                    <div className="font-medium text-gray-900">{order.customer}</div>
                    <div className="text-[11px] text-gray-400 lowercase">{order.method}</div>
                  </td>
                  <td className="px-6 py-5 font-bold text-red-900">{order.total}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${statusStyles[order.status]}`}>
                      {order.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white rounded-full border border-transparent hover:border-stone-200 shadow-sm transition-all text-red-900">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 hover:bg-white rounded-full border border-transparent hover:border-stone-200 shadow-sm transition-all text-gray-400">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-center">
          <button className="text-red-900 text-xs font-bold hover:underline inline-flex items-center gap-1">
            VIEW ARCHIVED ORDERS <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
