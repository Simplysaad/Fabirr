import { connectDB } from "@/lib/db";
import Product from "@/lib/models/product";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }) {
  await connectDB();
  const { id } = await params;
  const product = await Product.findById(id).lean();

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* LEFT: IMAGE SECTION */}
        <section className="space-y-4">
          <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
            <Image
              src={`/scarves/${product.image}`}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Small gallery thumbnails could go here */}
        </section>

        {/* RIGHT: DETAILS SECTION */}
        <section className="flex flex-col justify-center space-y-8">
          <header className="space-y-2">
            <p className="text-red-900/60 uppercase tracking-[0.2em] text-xs font-semibold">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-red-900 capitalize">
              {product.name}
            </h1>
            <p className="text-2xl text-stone-800 font-light">
              ₦{product.price?.toLocaleString()}
            </p>
          </header>

          <div className="border-t border-stone-100 pt-8 space-y-6">
            <p className="text-stone-600 leading-relaxed max-w-md">
              {product.description || "A timeless masterpiece crafted for the modern Queen. This piece combines heritage craftsmanship with contemporary elegance."}
            </p>

            {/* COLOR SELECTOR */}
            {product.colors?.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-stone-400">
                  Select Shade
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color._id}
                      title={color.name}
                      disabled={!color.available}
                      className={`group relative w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center
                        ${color.available ? 'border-transparent hover:border-red-900' : 'opacity-30 cursor-not-allowed'}`}
                    >
                      <span 
                        className="w-8 h-8 rounded-full border border-stone-200" 
                        style={{ backgroundColor: color.hex }}
                      />
                      {!color.available && <span className="absolute w-full h-[1px] bg-stone-400 rotate-45" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div className="pt-8 space-y-4">
            <button className="w-full bg-red-900 text-white py-5 rounded-sm hover:bg-black transition-all duration-500 uppercase tracking-[0.3em] text-sm font-medium">
              Add To Collection
            </button>
            <p className="text-center text-xs text-stone-400 italic">
              Complimentary premium packaging included with every order.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
