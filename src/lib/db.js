import { connect } from "mongoose";
import Product from "./models/product";

export default async function connectDB() {
  try {
    const conn = await connect(process.env.MONGO_URI, {});

    if (!conn) throw new Error("Unable to connect to database");

    console.log(`Successfully connected to ${conn.host}`);
  } catch (err) {
    console.error(err);
  }
}

export async function insertProducts(products = newProducts, clear = true) {
  try {
    await connectDB();

    clear &&
      (await Product.deleteMany().then(() =>
        console.log("everything has been deleted")
      ));


    const newProducts = await Product.insertMany(products);
    console.log(`${newProducts.length} products inserted`);

    return newProducts
  } catch (err) {
    console.error(err);
  }
}


export async function getAllProducts() {
  try {
    await connectDB();
    const allProducts = await Product.find().lean()
    console.log(`${allProducts.length} products retrieved`);

    return allProducts
  } catch (err) {
    console.error(err);
  }
}


