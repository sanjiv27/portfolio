export interface MediumPost {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  isExternal?: boolean;
}

export const mediumPosts: MediumPost[] = [
  {
    title: "Your Medium Article Title",
    url: "https://medium.com/@yourusername/your-article-slug",
    publishedAt: "2024-01-01",
    summary: "Brief description of your Medium article",
    tags: ["Tag1", "Tag2", "Category"],
    isExternal: true
  },
  // Add more of your Medium articles here
  // You can leave this array empty if you don't have Medium articles
];

export function getMediumPosts(): MediumPost[] {
  return mediumPosts;
} 