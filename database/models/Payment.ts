import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPayment {
  orderId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  status?: string;
  amount: number;
  paymentDate?: Date;
}

export interface IPaymentDocument extends IPayment, Document {}

const PaymentSchema: Schema<IPaymentDocument> = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'Pending' },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
}, { timestamps: true });

const Payment: Model<IPaymentDocument> = mongoose.models.Payment || mongoose.model<IPaymentDocument>('Payment', PaymentSchema);

export default Payment;
