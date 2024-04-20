import { Schema, model, models, Document } from "mongoose";

// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password?: string;
//   phonemumber?: string;
//   bio?: string;
//   picture: string;
//   userlink?: string;
//   reputation?: number;
//   saved: Schema.Types.ObjectId[];
//   joinedAt: Date;

// }

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should be 8-20 alphanumeric letters and be without special characters!",
    ],
  },
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email must be unique"],
  },
  password: { type: String },
  phonenumber: { type: String },
  bio: { type: String },
  picture: { type: String },
  associationlink: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: 'Posts' }],
  joinedAt: { type: Date, default: Date.now }
});

const User = models.User || model("User", UserSchema);

export default User;
