import { Schema, connect, model, models } from "mongoose";

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

const Cart = models.cart || model("cart", CartSchema);

  // {
  //     title: "Silk Scarf",
  //     color: "Royal Gold",
  //     quantity: 1,
  //     amount: 12000,
  //     image: "/hero.png"
  //   }