import React from "react";
import { Quote } from "lucide-react"; // Optional: npm install lucide-react

const TestimonialCard = ({
  quote = "The silk is incredibly soft, and the colors are even more vibrant in person. I feel like royalty every time I drape it on.",
  author = "Sarah J.",
  location = "London, UK"
}) => {
  return (
    <div className="group relative bg-white p-8 md:p-10 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-500 min-w-[320px] md:min-w-[400px] flex flex-col justify-between">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 right-8 text-red-100 group-hover:text-red-200 transition-colors">
        <Quote size={40} fill="currentColor" />
      </div>

      <div className="space-y-6">
        {/* Star Rating - Delicate gold stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-xs">
              ✦
            </span>
          ))}
        </div>

        {/* The Review Text */}
        <p className="text-stone-700 text-lg leading-relaxed font-serif italic">
          "{quote}"
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-50 flex items-center gap-4">
        {/* Profile Initials/Avatar */}
        <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center text-red-900 font-bold text-sm border border-red-100">
          {author
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        <div>
          <h4 className="font-semibold text-red-900 text-sm tracking-widest uppercase">
            {author}
          </h4>
          <p className="text-stone-400 text-xs tracking-tight">
            Verified Queen • {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
