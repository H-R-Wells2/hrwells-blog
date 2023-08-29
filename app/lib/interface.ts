export interface Post {
  title: string;
  overview: string;
  content: string;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}
