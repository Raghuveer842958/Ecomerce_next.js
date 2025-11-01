import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
  address?: string;
  phone?: string;
  role?: string;
  isVerified?: boolean;
  profilePicture?: string;
}

export interface IUserDocument extends IUser, Document {}

const UserSchema: Schema<IUserDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  role: { type: String, default: 'user' },
  isVerified: { type: Boolean, default: false },
  profilePicture: String,
}, { timestamps: true });

const User: Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', UserSchema);

export default User;