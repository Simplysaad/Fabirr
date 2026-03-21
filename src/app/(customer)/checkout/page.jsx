"use client";
import React, { useState } from "react";
import {
  Truck,
  CreditCard,
  Upload,
  CheckCircle,
  Copy,
  MapPin,
  User,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    delivery: "standard",
    paymentProof: null,
    refNumber: ""
  });

  const updateForm = (field, value) =>
    setFormData({ ...formData, [field]: value });
  const nextStep = () => setStep(step + 1);

  const cartTotal = 150000; // Example in Naira

  return (
    <div className="max-w-2xl mx-auto my-16 p-0 bg-white shadow-sm border border-stone-200 rounded-sm font-sans text-stone-800 overflow-hidden">
      {/* Brand Header */}
      <div className="bg-red-900 p-8 text-center border-b border-stone-200">
        <h1 className="text-3xl font-serif text-white tracking-tight">
          Checkout
        </h1>
        <p className="text-red-200 text-xs uppercase tracking-[0.3em] mt-2">
          Finalizing Your Selection
        </p>
      </div>

      {/* Progress Bar - FABIRR Style */}
      <div className="flex w-full h-1 bg-stone-100">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-full transition-all duration-700 ease-in-out ${
              step >= i ? "bg-red-400 w-1/4" : "w-0"
            }`}
          />
        ))}
      </div>

      <div className="p-8 md:p-12">
        {/* Step 1: Identity & Address */}
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <section className="space-y-4">
              <h2 className="text-sm font-serif uppercase tracking-widest text-red-900 border-b border-stone-100 pb-2 flex items-center gap-2">
                <User size={16} className="text-red-400" /> Customer's Information
              </h2>
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Bello"
                    className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-red-900 outline-none transition-colors"
                    onChange={(e) => updateForm("fullName", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="queen@example.com"
                      className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-red-900 outline-none transition-colors"
                      onChange={(e) => updateForm("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234..."
                      className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-red-900 outline-none transition-colors"
                      onChange={(e) => updateForm("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-sm font-serif uppercase tracking-widest text-red-900 border-b border-stone-100 pb-2 flex items-center gap-2">
                <MapPin size={16} className="text-red-400" /> Destination
              </h2>
              <textarea
                placeholder="Full Delivery Address"
                className="w-full p-3 bg-stone-50 border-b border-stone-200 focus:border-red-900 outline-none h-24 resize-none"
                onChange={(e) => updateForm("address", e.target.value)}
              />
            </section>

            <button
              onClick={nextStep}
              className="w-full bg-red-900 hover:bg-black text-white py-5 rounded-sm font-bold tracking-[0.2em] uppercase text-xs transition-all flex items-center justify-center gap-2 group"
            >
              Continue to Delivery{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}

        {/* Step 2: Delivery */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
            <h2 className="text-xl font-serif text-red-900 mb-6">
              Select Shipping Speed
            </h2>
            {["standard", "express", "pickup"].map((option) => (
              <label
                key={option}
                className={`flex items-center justify-between p-6 border rounded-sm cursor-pointer transition-all ${
                  formData.delivery === option
                    ? "border-red-900 bg-red-50/30"
                    : "border-stone-100 hover:border-stone-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="delivery"
                    checked={formData.delivery === option}
                    onChange={() => updateForm("delivery", option)}
                    className="w-4 h-4 accent-red-900"
                  />
                  <div>
                    <span className="capitalize font-bold text-stone-800 block text-sm tracking-wide">
                      {option} Shipping
                    </span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-tighter">
                      {option === "standard"
                        ? "3-5 Working Days"
                        : "Next Day Delivery"}
                    </span>
                  </div>
                </div>
                <span className="font-serif text-red-900 font-bold">
                  {option === "standard"
                    ? "₦5,000"
                    : option === "express"
                      ? "₦15,000"
                      : "Free"}
                </span>
              </label>
            ))}
            <button
              onClick={nextStep}
              className="w-full mt-8 bg-red-900 text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs transition-all"
            >
              Proceed to Payment
            </button>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
            <div className="bg-stone-900 rounded-sm p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-red-400 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">
                  Manual Bank Transfer
                </p>
                <h3 className="text-3xl font-serif mb-6">
                  ₦{cartTotal.toLocaleString()}
                </h3>
                <div className="space-y-4 text-xs tracking-widest uppercase opacity-80 border-t border-white/10 pt-6">
                  <div className="flex justify-between">
                    Bank:{" "}
                    <span className="font-bold text-white">
                      FABIRR ROYAL BANK
                    </span>
                  </div>
                  <div className="flex justify-between">
                    Account:
                    <span className="font-bold text-white flex items-center gap-2">
                      0123456789{" "}
                      <Copy
                        size={12}
                        className="cursor-pointer hover:text-red-400"
                      />
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative Brand Watermark */}
              <div className="absolute -right-4 -bottom-4 text-white/5 font-serif text-8xl italic select-none">
                F
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-[10px] font-bold uppercase text-stone-400 tracking-[0.2em]">
                Evidence of Payment
              </h2>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="proof"
                  onChange={(e) =>
                    updateForm("paymentProof", e.target.files[0])
                  }
                />
                <label
                  htmlFor="proof"
                  className="flex flex-col items-center justify-center border border-dashed border-stone-200 rounded-sm p-10 hover:bg-stone-50 hover:border-red-900 cursor-pointer transition-all"
                >
                  <Upload className="text-red-900 mb-3" size={24} />
                  <span className="text-xs text-stone-600 font-bold uppercase tracking-widest">
                    {formData.paymentProof
                      ? formData.paymentProof.name
                      : "Upload Receipt Image"}
                  </span>
                </label>
              </div>
              <input
                type="text"
                placeholder="Transaction ID / Reference"
                className="w-full p-4 bg-stone-50 border-b border-stone-200 outline-none text-sm"
                onChange={(e) => updateForm("refNumber", e.target.value)}
              />
            </div>

            <button
              onClick={nextStep}
              className="w-full bg-red-900 text-white py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs shadow-xl"
            >
              Verify My Order
            </button>
          </div>
        )}

        {/* Branding Footer for Trust */}
        <div className="mt-12 flex justify-center items-center gap-6 border-t border-stone-100 pt-8 opacity-40 grayscale pointer-events-none">
          <div className="flex items-center gap-1 text-[9px] uppercase font-bold tracking-tighter">
            <ShieldCheck size={14} /> Secure Vault
          </div>
          <div className="flex items-center gap-1 text-[9px] uppercase font-bold tracking-tighter">
            <Truck size={14} /> Royal Delivery
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
