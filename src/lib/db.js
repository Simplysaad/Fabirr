import { Schema, connect, model } from "mongoose";

export default async function connectDB() {
  try {
    const conn = await connect(process.env.MONGO_URI, {});

    if (!conn) throw new Error("Unable to connect to database");

    console.log(`Successfully connected to ${conn.host}`);
  } catch (err) {
    console.error(err);
  }
}

const ColorSchema = new Schema(
  {
    hex: {
      type: String,
      required: true
    },
    text: String,
    amountInStock: Number,
    image: String
  },
  {
    _id: false
  }
);

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: ["jersey scarf, silk scarf, chiffon scarf"]
  },
  description: String,
  category: {
    type: String,
    default: "scarf"
  },
  colors: [ColorSchema],
  price: {
    type: Number,
    default: 0
  }
  //   discount: [DiscountSchema]
});

const Product = model("product", ProductSchema);

const CartItemSchema = new Schema(
  {
    productId: String,
    name: String,
    quantity: Number,
    color: String,
    amount: Number
  },
  { _id: false }
);

const CartSchema = new Schema({
  //   userId:
  items: [CartItemSchema]
});

const Cart = model("cart", CartSchema);

export { Cart, Product };
