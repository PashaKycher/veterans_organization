import mongoose from "mongoose";

const analyticalSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, index: true },

  excerpt: { type: String, maxlength: 300 },
  content: { type: String, required: true },

  category: { type: mongoose.Schema.Types.ObjectId, ref: 'AnalyticalCategory' },
  tags: [{ type: String, index: true }],

  image_urls: [{ type: String }],

  post_type: { type: String, enum: ['text', 'image', 'text_with_image'], required: true },

  position_type: { type: String, enum: ['analysis', 'position'], default: 'analysis' },

  status: { type: String, enum: ['draft', 'review', 'published', 'archived'], default: 'draft' },

  publishedAt: { type: Date, default: null },
  archivedAt: { type: Date, default: null },

  views_count: { type: Number, default: 0 },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  reading_time: { type: Number },
  is_featured: { type: Boolean, default: false }

}, { timestamps: true });

const Analytical = mongoose.model('Analytical', analyticalSchema);
export default Analytical;