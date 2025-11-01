import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IWishList {
  userId: mongoose.Types.ObjectId;
  productId: mongoose.Types.ObjectId;
  createdAt?: Date;
}

export interface IWishListDocument extends IWishList, Document {}

const WishListSchema: Schema<IWishListDocument> = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  createdAt: { type: Date, default: Date.now },
});

const WishList: Model<IWishListDocument> = mongoose.models.WishList || mongoose.model<IWishListDocument>('WishList', WishListSchema);

export default WishList;
