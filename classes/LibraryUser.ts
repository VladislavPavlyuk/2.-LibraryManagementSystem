import { User } from '../types/User';
import { LibraryBook } from './LibraryBook';

export class LibraryUser implements User {
  id: number;
  name: string;
  borrowedBooks: LibraryBook[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(book: LibraryBook): void {
    this.borrowedBooks.push(book);
    book.borrowBook();
  }

  return(book: LibraryBook): void {
    this.borrowedBooks = this.borrowedBooks.filter(
      (b) => b !== book
    );
    book.returnBook();
  }
}

