import { Book } from '../types/Book';

export class LibraryBook implements Book {
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  isAvailable: boolean;

  constructor(
    title: string,
    author: string,
    publishedYear: number,
    genre: string,
    isAvailable: boolean = true
  ) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.genre = genre;
    this.isAvailable = isAvailable;
  }

  borrowBook(): void {
    this.isAvailable = false;
  }

  returnBook(): void {
    this.isAvailable = true;
  }
}

