import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    user: {type: String, required: true, ref: 'User'},
    content: {type: String, default: ''},
    image_urls: [{type: String, default: ''}],
    post_type: {type: String, enum: ['text', 'image', 'text_with_image'], required: true},
    likes_count: [{type: String, ref: 'User'}],
},{timestamps: true, minimize: false});

const News = mongoose.model('News', newsSchema);

export default News