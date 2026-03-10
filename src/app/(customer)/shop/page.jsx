// import React from "react";
// import ProductCard from "@/components/ProductCard";

// const products = [
//   {
//     name: "",
//     availableColors: [],
//     image: "",

//   }
// ]
// const shopPage = () => {

//   return (
//     <div className="pt-32">
//       <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
//         Fe<span className="border-b-3">atured Collectio</span>ns
//       </h2>
//       <section id="featuredProduct" className="py-16 px-12">
//         <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
//           Silk Scarves
//         </h2>
//         <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
//           {[...Array(5)].map((_, idx) => (
//             <ProductCard  cart nodesc key={idx} />
//           ))}
//         </div>
//       </section>

//       <section id="featuredProduct" className="py-16 px-12">
//         <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
//           Silk Scarves
//         </h2>
//         <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
//           {[...Array(5)].map((_, idx) => (
//             <ProductCard cart nodesc key={idx} />
//           ))}
//         </div>
//       </section>

//       <section id="featuredProduct" className="py-16 px-12">
//         <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
//           Silk Scarves
//         </h2>
//         <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
//           {[...Array(5)].map((_, idx) => (
//             <ProductCard cart nodesc key={idx} />
//           ))}
//         </div>
//       </section>

//       <section id="featuredProduct" className="py-16 px-12">
//         <h2 className="text-center text-[1.2rem] md:text-[1.6rem] font-semibold text-red-900">
//           Silk Scarves
//         </h2>
//         <div className="py-8 lg:columns-5 md:columns-2 columns-1 ">
//           {[...Array(5)].map((_, idx) => (
//             <ProductCard cart nodesc key={idx} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default shopPage;

import React from "react";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/db";

const ShopPage = async () => {
  // Fetch products from database
  const allProducts = await getAllProducts();

  // Group products by category (Material)
  const categories = ["Silk Scarves", "Cashmere Wraps", "Linen Collection"];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. ELEGANT HEADER */}
      <header className="pt-40 pb-20 bg-stone-50 border-b border-stone-100 px-8">
        <div className="container mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif text-red-900 tracking-tight">
            The Masterpieces
          </h1>
          <p className="text-stone-500 uppercase tracking-[0.3em] text-xs">
            Curated Elegance for the FABIRR Queen
          </p>
        </div>
      </header>

      {/* 2. CATEGORY SECTIONS */}
      <div className="container mx-auto py-12 space-y-24">
        {categories.map((category) => {
          // Filter products based on category (Material)
          // Note: Adjust 'material' to match your DB schema field
          const categoryProducts = allProducts.filter(
            (p) => p.category === category || category.includes(p.material)
          );

          return (
            <section key={category} className="px-8 md:px-16">
              {/* Category Title with refined line styling */}
              <div className="flex items-center gap-8 mb-12">
                <h2 className="text-2xl md:text-3xl font-serif text-red-900 whitespace-nowrap">
                  {category}
                </h2>
                <div className="h-[1px] w-full bg-stone-200"></div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 whitespace-nowrap">
                  View All
                </span>
              </div>

              {/* Product Grid - Using Grid instead of columns for better control */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
                {categoryProducts.length > 0
                  ? categoryProducts.map((product) => (
                      <ProductCard
                        key={product._id.toString()}
                        product={{ ...product }}
                        cart
                        nodesc
                      />
                    ))
                  : // Fallback for demo if no DB products match the category
                    null}
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. ASSURANCE SECTION (Trust Signals) */}
      <section className="bg-stone-50 py-20 mt-20 border-t border-stone-100">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <h4 className="text-red-900 font-bold uppercase tracking-widest text-xs">
              Global Shipping
            </h4>
            <p className="text-sm text-stone-500">
              From our hands to yours, Nationwide.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-red-900 font-bold uppercase tracking-widest text-xs">
              Authentic Quality
            </h4>
            <p className="text-sm text-stone-500">
              100% genuine silk and premium cashmere.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-red-900 font-bold uppercase tracking-widest text-xs">
              Royal Support
            </h4>
            <p className="text-sm text-stone-500">
              Dedicated assistance for every Queen.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
