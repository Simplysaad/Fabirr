import connectDB, { Product, Product } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  const { slug } = params;
  const name = slug.split("-").join(" ");

  try {
    const products = await Product.findOne({ name }).lean();

    return NextResponse.json({
      products
    });
  } catch (err) {
    NextResponse.json({
      error: "Failed to fetch products "
    });
  }
}
