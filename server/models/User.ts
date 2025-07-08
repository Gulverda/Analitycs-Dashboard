import mongoose, { Schema, Document, mongo } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    totalOrders: number;
    lastOrderDate: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    totalOrders: { type: Number, default: 0 },
    lastOrderDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
    versionKey: false
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;