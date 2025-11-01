import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICart {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  quantity?: number;
  addedAt?: Date;
}

export interface ICartDocument extends ICart, Document {}

const CartSchema: Schema<ICartDocument> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
  addedAt: { type: Date, default: Date.now },
});

const Cart: Model<ICartDocument> =
  mongoose.models.Cart || mongoose.model<ICartDocument>("Cart", CartSchema);

export default Cart;
