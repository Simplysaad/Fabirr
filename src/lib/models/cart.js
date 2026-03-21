import { Schema, connect, model, models } from "mongoose";

const CartItemSchema = new Schema(
  {
    productId: { type: String, required: true },
    name: String,
    quantity: { type: Number, default: 1 },
    color: String,
    amount: Number
  },
  { _id: false }
);
// {
//     name: "Silk Scarf",
//     color: "Royal Gold",
//     quantity: 1,
//     amount: 12000,
//     image: "/hero.png"
//   }

const OrderSchema = new Schema(
  {
    // 1. Customer & Tracking (No account needed)
    orderNumber: { type: String, unique: true, required: true }, // e.g., ORD-7721
    email: { type: String, required: true, index: true },
    phone: String,
    customerName: String,

    // 2. Delivery Info
    items: [CartItemSchema],
    deliveryOption: {
      type: String,
      enum: ["standard", "express", "pickup"],
      required: true
    },
    shipping: {
      address: String,
      city: String,
      zipCode: String
    },

    // 3. Payment & Evidence
    totalAmount: { type: Number, required: true },
    paymentEvidenceUrl: { type: String }, // URL to the uploaded image (S3/Cloudinary)
    transactionRef: String, // Manual text ref provided by user

    // 4. Status Tracking
    status: {
      type: String,
      enum: ["pending", "verifying", "paid", "shipped", "cancelled"],
      default: "pending"
    },

    // 5. Timestamps (Critical for Admin sorting)
    confirmedAt: Date
  },
  { timestamps: true }
);

// Indexing for fast guest lookups via Email + Order Number
OrderSchema.index({ email: 1, orderNumber: 1 });

const Order = mongoose.model("Order", OrderSchema);
