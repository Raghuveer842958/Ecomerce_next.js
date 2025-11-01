import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IProduct {
  name: string;
  category?: string;
  price: number;
  descriptions?: string;
  images?: string[];
  stockQuantity?: number;
  status?: 'active' | 'discontinued';
}

export interface IProductDocument extends IProduct, Document {}

const ProductSchema: Schema<IProductDocument> = new Schema({
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  descriptions: String,
  images: [String],
  stockQuantity: Number,
  status: { type: String, enum: ['active', 'discontinued'], default: 'active' },
}, { timestamps: true });

const Product: Model<IProductDocument> = mongoose.models.Product || mongoose.model<IProductDocument>('Product', ProductSchema);

export default Product;
