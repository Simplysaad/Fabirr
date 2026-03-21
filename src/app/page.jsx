import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmartProductCard from "@/components/SmartProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getAllProducts, insertProducts } from "@/lib/db";
import Product from "@/lib/models/product";
import newProducts from "@/lib/seed";
import { CreditCard, Globe, Globe2, Shield, ShieldCheck } from "lucide-react";
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

{/* 5. NEWSLETTER & TRUST (Redesigned) */}
<section className="py-24 px-8 bg-white border-t border-stone-100">
  <div className="container mx-auto max-w-4xl">
    <div className="flex flex-col items-center text-center space-y-12">
      
      {/* Newsletter Content */}
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-red-900 tracking-tight">
          The <span className="italic">Royal</span> Registry
        </h2>
        <p className="text-stone-500 max-w-md mx-auto font-light leading-relaxed">
          Be the first to experience limited edition drops, styling masterclasses, and exclusive "Queen-only" events.
        </p>
      </div>

      {/* Elegant Form */}
      <form className="w-full max-w-lg">
        <div className="flex flex-col md:flex-row gap-0 border border-stone-200 focus-within:border-red-900 transition-colors duration-500">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="flex-1 bg-transparent px-2 py-4 outline-none text-xs tracking-[0.2em] placeholder:text-stone-300"
          />
          <button className="bg-red-900 -transparent text-white px-8 py-4 text-xs font-bold tracking-[0.3em] uppercase hover:text-black transition-all">
            Subscribe
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-12 border-t border-stone-50">
        <div className="flex flex-col items-center space-y-3">
          <Globe className="text-red-900/40 font-light" size={28} strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
            Worldwide Delivery
          </span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <CreditCard className="text-red-900/40 font-light" size={28} strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
            Secure Payment Vault
          </span>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <ShieldCheck className="text-red-900/40 font-light" size={28} strokeWidth={1} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
            Certified Authentic
          </span>
        </div>
      </div>

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
