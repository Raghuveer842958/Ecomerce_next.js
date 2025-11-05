import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IOrder {
  productId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  paymentId?: mongoose.Types.ObjectId;
  status?: string;
  amount: number;
  orderDate?: Date;
}

export interface IOrderDocument extends IOrder, Document {}

const OrderSchema: Schema<IOrderDocument> = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  paymentId: { type: Schema.Types.ObjectId, ref: 'Payment' },
  status: { type: String, default: 'Pending' },
  amount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Order: Model<IOrderDocument> = mongoose.models.Order || mongoose.model<IOrderDocument>('Order', OrderSchema);

export default Order;
