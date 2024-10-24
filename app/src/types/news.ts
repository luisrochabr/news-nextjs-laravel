import { Category } from "./category";

export interface NewsItem {
  id: number;
  headline: string;
  articleBody: string;
  slug: string;
  imageUrl: string;
  published_at: string;
  source: string;
  category: Category;
}
