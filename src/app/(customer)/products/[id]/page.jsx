// app/shop/[id]/page.jsx
import connectDB from "@/lib/db";
import Product from "@/lib/models/product";
import { notFound } from "next/navigation";
import InteractiveProductView from "./InteractiveProductView";

export default async function ProductDetails({ params }) {
  await connectDB();
  const { id } = await params;

  // Fetching the product based on your schema
  const productDoc = await Product.findById(id).lean();
  if (!productDoc) notFound();

  // Stringify to pass safely to Client Component
  const product = JSON.parse(JSON.stringify(productDoc));

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-8 md:px-16 lg:px-24">
      <InteractiveProductView product={product} />
    </main>
  );
}
