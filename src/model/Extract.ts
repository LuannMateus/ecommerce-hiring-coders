import { Book } from './Book';

export interface Extract {
  dateOfPurchase: string;
  items: ExtractItemT[];
}

export interface ExtractItemT {
  product: Book;
  quantity: string;
}
