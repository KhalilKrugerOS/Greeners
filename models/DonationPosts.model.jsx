import { Schema, models, model, Document } from 'mongoose';

export interface IDonationPosts extends Document {
    title: string;
    content: string;
    categories: Schema.Types.ObjectId[]; // <- Connection to another model in our database
    views: number;
    share: Schema.Types.ObjectId[];
    author: Schema.Types.ObjectId;
    comments: Schema.Types.ObjectId[];
    createdAt: Date;
}

const DonationPostsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Categorie' }], // <- reference to a tag model
    views: { type: Number, default: 0 },
    share: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId, ref: 'Association' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    createdAt: { type: Date, default: Date.now }
});

// Check if the model alredy exists, if not create it
const DonationPosts = models.DonationPosts || model('DonationPosts', DonationPostsSchema);

export default DonationPosts;
