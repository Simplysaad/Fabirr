import { Schema, model, models } from "mongoose";

const ColorSchema = new Schema(
  {
    hex:  {
        type: String,
        required: true,
        
    },
    name: {
      type: String,
      required: true
    },
    image: String,
    amountInStock: Number,
    available: Boolean,
  },
  {
    _id: true
  }
);

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["jersey scarf", "silk scarf", "chiffon scarf", "inner cap"]
  },
  image: String,
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

const Product = models.product || model("product", ProductSchema);


export default Product