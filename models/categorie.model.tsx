import { Schema, model, models, Document } from "mongoose";

export interface ICategorie extends Document {
    name: string;
    description: string;
    posts: Schema.Types.ObjectId[];
}

const CategorieSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'DonationPosts' }]

});

const Categorie = models.Categorie || model("Categorie", CategorieSchema);

export default Categorie;
