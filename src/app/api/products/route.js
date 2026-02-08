
"use server"
import { insertProducts } from "@/actions/db";
import connectDB, { Product } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  // return NextResponse.json({
  //   text: "here i am"
  // });
  try {
    const products = await Product.find({}).lean();

    return NextResponse.json({
      products
    });
  } catch (err) {
    return NextResponse.json({
      error: "Failed to fetch products " + err
    });
  }
}

export async function POST(req) {
  await connectDB();

  try {
    const products = await insertProducts();

    return NextResponse.json({
      products
    });
  } catch (err) {
    return NextResponse.json({
      error: "Failed to insert products " + err
    });
  }
}
