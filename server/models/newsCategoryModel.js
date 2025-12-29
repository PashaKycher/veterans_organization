import mongoose from "mongoose";

const newsCategorySchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, default: "" },
    isAvaliable: { type: Boolean, default: true },
}, { timestamps: true })

const NewsCategory = mongoose.model('NewsCategory', newsCategorySchema);
export default NewsCategory;