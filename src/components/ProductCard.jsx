import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  // 1. Destructure your properties (ensure these match your DB schema)
  const { name, price, image, _id } = product;
  const id = _id?.toString(); // Ensure ID is a string for the URL

  return (
    // REMOVE: (<div>{JSON.stringify(product)}</div>) - This was blocking the UI below
    <Link href={`/products/${id}`} className="group block">
      <div className="relative overflow-hidden bg-stone-100 rounded-sm mb-4">
        <Image
          src={`/scarves/${image}`}
          width={400} // Increased for better resolution
          height={500}
          alt={name || "Product image"}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick Add Overlay */} 
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 backdrop-blur-sm">
          <div className="text-center py-2 bg-red-900 text-white text-xs uppercase tracking-widest hover:bg-black transition-colors">
            View Details
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-sm text-stone-800 uppercase tracking-wider group-hover:text-red-900 transition-colors">
          {name}
        </h3>
        <p className="text-red-900 font-serif text-lg">
          ₦{price?.toLocaleString() || "0"}
        </p>
      </div>
    </Link>
  );
};


export default ProductCard