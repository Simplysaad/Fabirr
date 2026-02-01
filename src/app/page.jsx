import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen container min-w-[70vw] flex justify-between gap-3 items-center py-32 px-16 font-sans"
      >
        <div className="hero-text md:w-[50%]">
          <div className="flex flex-col gap-3">
            <h1 className="text-red-900 text-[3rem]">
              Wrap In Elegance. <br /> Extrude Elegant fragrance.
            </h1>
            <h6 className="text-[1.2rem]">
              Discover our curated collection of silk, cashmere, and linen
              scarves. Crafted with care, designed for elegance.
            </h6>
          </div>
          <button className="cta relative text-[1.2rem] text-red-50 my-10  px-4 py-2 rounded bg-red-400">
            Order now
          </button>
        </div>
        <div className="hero-image  not-md:hidden">
          <Image
            style={{
              backgroundBlendMode: "multiply"
            }}
            alt="Fabirr Image"
            src={"/hero.png"}
            width={300}
            height={300}
          />
        </div>
      </section>

      <section id="featuredProduct" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Fe<span className="border-b-3">atured Produ</span>cts
        </h2>
        <div className="py-8 columns-5">
          {[...Array(3)].map((_, idx) => (
            <ProductCard key={idx} />
          ))}
        </div>
      </section>
      <section id="testimonials" className="py-16 px-12">
        <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
          Wh<span className="border-b-3">at Our FABIRR Queens S</span>ay
        </h2>
        <div className="py-8 flex overflow-scroll flex-nowrap gap-4 align-center">
          {[...Array(8)].map((_, idx) => (
            <TestimonialCard key={idx} />
          ))}
        </div>
      </section>
      <section id="brandStory"></section>
      <section></section>
    </>
  );
};

export default Homepage;
