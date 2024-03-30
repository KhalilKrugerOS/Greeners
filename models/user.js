import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email must be unique"],
  },
  username: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should be 8-20 alphanumeric letters and be without special characters!",
    ],
  },
  image: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
