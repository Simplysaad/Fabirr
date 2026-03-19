import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmartProductCard from "@/components/SmartProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllProducts, insertProducts } from "@/lib/db";
import Product from "@/lib/models/product";
import newProducts from "@/lib/seed";
import Image from "next/image";
import Link from "next/link";

const Homepage = async () => {
  // Fetching directly from DB on the server

  const products = await getAllProducts();
  // const products = await insertProducts(newProducts);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* 1. HERO SECTION */}
        <section
          id="hero"
          className="md:min-h-[80vh] pt-32 container mx-auto flex flex-col md:flex-row justify-between gap-8 items-center py-16 px-8 md:px-16"
        >
          <div className="hero-text md:w-[50%] space-y-6">
            <h1 className="text-red-900 text-4xl md:text-6xl font-serif leading-tight">
              Drape Yourself in Royalty.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-md">
              Heritage craftsmanship meets modern grace. Discover our curated
              silk, chiffon, and jersey collections—designed for the Queen who
              leads with elegance.

              {/* Discover our curated collection of silk, chiffon, and jersey scarves. Crafted with care, designed for elegance. */}
            </p>
            <Link
              href="/shop"
              className="inline-block bg-red-400 hover:bg-red-500 text-white text-lg px-8 py-3 rounded transition-colors duration-300"
            >
              Explore Our Collections
            </Link>
          </div>
          <div className="hero-image relative w-full md:w-[400px] h-[400px]">
            <Image
              alt="Fabirr Elegance"
              src="/hero.png"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* 2. FEATURED PRODUCTS */}
        <section id="featured" className="py-20 bg-stone-50 px-8 md:px-16">
          <div className="container flex flex-col justify-center items-center mx-auto">
            <h2 className="text-center text-3xl font-bold text-red-900 mb-12">
              Fe
              <span className="border-b-4 border-red-200">atured Collect</span>
              ions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-[75%] center">
              {/* <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-[75%] justify-center border"> */}
              {products?.map((product, idx) => (
                <SmartProductCard
                  key={product._id?.toString() || idx}
                  product={{
                    ...product,
                    _id: product._id.toString(),
                    colors: product.colors.map((c) => ({
                      ...c,
                      _id: c._id.toString()
                    }))
                  }}
                />
              ))}

              
            </div>
          </div>
        </section>

        {/* 3. BRAND STORY (New) */}
        {/* <section
          id="brandStory"
          className="py-20 px-8 md:px-16 container mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px] bg-red-50 rounded-2xl overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-red-900">
              The FABBIRR Heritage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every FABIRR piece is a testament to timeless craftsmanship. From
              the high-altitude plains where we source our cashmere to the
              artisan studios where silk is hand-printed, we believe in "Slow
              Fashion." Our scarves aren't just accessories; they are heirlooms
              designed to be passed down through generations of Queens.
            </p>
            <Link
              href="/about"
              className="text-red-900 font-semibold border-b-2 border-red-900 pb-1 hover:text-red-700 transition-all"
            >
              Read Our Story
            </Link>
          </div>
        </section> */}

        {/* 4. TESTIMONIALS */}
        <section
          id="testimonials"
          className="py-24 bg-red-900 text-white overflow-hidden"
        >
          <div className="container mx-auto px-8 md:px-16">
            <h2 className="text-center text-3xl md:text-5xl font-serif mb-16 tracking-tight">
              Wh
              <span className="italic border-b border-amber-400">
                at Our FABIRR Queen
              </span>
              s Say
            </h2>

            {/* snap-x ensures the cards "stick" into place when scrolling on mobile */}
            <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
              {[...Array(6)].map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[85vw] md:min-w-[400px] snap-center"
                >
                  <TestimonialCard />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. NEWSLETTER & TRUST (New) */}
        <section className="py-20 px-8 bg-stone-100">
          <div className="container mx-auto text-center max-w-2xl space-y-8">
            <h2 className="text-3xl font-serif text-red-900">
              Join the Royalty
            </h2>
            <p className="text-gray-600">
              Subscribe for early access to new drops and styling tips.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded border focus:outline-red-400"
              />
              <button className="bg-red-900 text-white px-8 py-3 rounded hover:bg-black transition-all">
                Subscribe
              </button>
            </form>
            <div className="flex justify-center gap-8 pt-8 opacity-60 grayscale">
              {/* Replace with actual icons */}
              <span>Free Worldwide Shipping</span>
              <span>Secure Checkout</span>
              <span>100% Authentic</span>
            </div>
          </div>
        </section>

        {/* 6. FOOTER (New) */}
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
