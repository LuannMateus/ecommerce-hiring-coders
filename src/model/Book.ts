export interface Book {
  id: string;
  title: string;
  price: number;
  pageCount: number;
  publishedDate: string;
  thumbnailUrl: string;
  longDescription: string;
  authors: string[];
  language: string;
  publishingCompany: string;
}
