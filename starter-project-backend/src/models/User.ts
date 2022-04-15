import mongoose, { Schema, Document } from "mongoose";

// model
export interface UserI extends Document {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const userSchema: Schema<UserI> = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserI>("User", userSchema);
export default User;
