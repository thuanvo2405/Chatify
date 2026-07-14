import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Please tell your name!"] },
    email: {
      type: String,
      required: [true, "Please provide email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail],
    },
    password: { type: String, required: true, minLength: 8 },
    profileURL: { type: String },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
