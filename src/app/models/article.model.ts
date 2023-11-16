import mongoose, { Schema } from "mongoose";

export interface ArticleModel {
  id: string;
  title: string;
  content?: string;
  imageUrl: string;
  previewImage: string;
  isRecommended?: boolean;
  tags?: string[];
}

const articleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required"],
  },
  previewImage: {
    type: String,
    required: [true, "Preview Image is required"],
  },
  isRecommended: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
    default: [],
  },
});

const Article =
  mongoose.models.articles || mongoose.model("articles", articleSchema);

export default Article;
