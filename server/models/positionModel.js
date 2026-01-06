import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, index: true },
    content: { type: String, required: true },
    tags: [{ type: String, index: true }],

    position_type: { type: String, enum: ['analysis', 'news', 'single'], default: 'single' },
    article: { type: mongoose.Schema.Types.ObjectId, refPath: 'article_model', default: null },
    article_model: { type: String, enum: ['Analytical', 'News'], default: null },

    status: { type: String, enum: ['draft', 'review', 'published', 'archived'], default: 'draft' },

    publishedAt: { type: Date, default: null },
    archivedAt: { type: Date, default: null },

    views_count: { type: Number, default: 0 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

    reading_time: Number,
    is_featured: { type: Boolean, default: false }

}, { timestamps: true });

const Position = mongoose.model('Position', positionSchema);
export default Position