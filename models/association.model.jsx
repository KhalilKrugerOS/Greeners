import { Schema, model, models, Document } from "mongoose";

export interface IAssociation extends Document {
    Id: String
    associationname: string;
    email: string;
    password?: string;
    phonemumber?: string;
    bio?: string;
    picture?: string;
    location: string;
    portfolioWebsite?: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;

}

const AssociationSchema: Schema = new Schema({
    Id: { type: String, required: true },
    associationname: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String },
    phonenumber: { type: String },
    bio: { type: String },
    picture: { type: String },
    location: { type: String, required: true },
    portfolioWebsite: { type: String },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'DonationPosts' }],
    joinedAt: { type: Date, default: Date.now }
});

const Association = models.Association || model("Association", AssociationSchema);

export default Association;
