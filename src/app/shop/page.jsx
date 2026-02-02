import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "",
    availableColors: [],
    image: "",
    
  }
]
const shopPage = () => {

  return (
    <div className="pt-32">
      <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
        Fe<span className="border-b-3">atured Collectio</span>ns
      </h2>
      <section id="featuredProduct" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Silk Scarves
        </h2>
        <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
          {[...Array(5)].map((_, idx) => (
            <ProductCard cart nodesc key={idx} />
          ))}
        </div>
      </section>

      <section id="featuredProduct" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Silk Scarves
        </h2>
        <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
          {[...Array(5)].map((_, idx) => (
            <ProductCard cart nodesc key={idx} />
          ))}
        </div>
      </section>

      <section id="featuredProduct" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Silk Scarves
        </h2>
        <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
          {[...Array(5)].map((_, idx) => (
            <ProductCard cart nodesc key={idx} />
          ))}
        </div>
      </section>

      <section id="featuredProduct" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Silk Scarves
        </h2>
        <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
          {[...Array(5)].map((_, idx) => (
            <ProductCard cart nodesc key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default shopPage;
