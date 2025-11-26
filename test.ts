import { Library } from './classes/Library';
import { LibraryBook } from './classes/LibraryBook';
import { LibraryUser } from './classes/LibraryUser';

// Создание библиотеки
const library = new Library();

// Создание книг
const book1 = new LibraryBook(
  'Война и мир',
  'Лев Толстой',
  1869,
  'Роман'
);

const book2 = new LibraryBook(
  'Преступление и наказание',
  'Федор Достоевский',
  1866,
  'Роман'
);

const book3 = new LibraryBook(
  'Анна Каренина',
  'Лев Толстой',
  1877,
  'Роман'
);

const book4 = new LibraryBook(
  'Идиот',
  'Федор Достоевский',
  1869,
  'Роман'
);

// Добавление книг в библиотеку
console.log('=== Добавление книг в библиотеку ===');
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
console.log(`Всего книг в библиотеке: ${library.books.length}\n`);

// Регистрация пользователей
console.log('=== Регистрация пользователей ===');
const user1 = new LibraryUser(1, 'Иван Иванов');
const user2 = new LibraryUser(2, 'Мария Петрова');

library.registerUser(user1);
library.registerUser(user2);
console.log(`Зарегистрировано пользователей: ${library.users.length}\n`);

// Пользователи берут книги
console.log('=== Пользователи берут книги ===');
user1.borrow(book1);
console.log(`${user1.name} взял книгу: "${book1.title}"`);
console.log(`Статус книги "${book1.title}": ${book1.isAvailable ? 'доступна' : 'не доступна'}`);

user2.borrow(book2);
console.log(`${user2.name} взял книгу: "${book2.title}"`);
console.log(`Статус книги "${book2.title}": ${book2.isAvailable ? 'доступна' : 'не доступна'}`);

user1.borrow(book3);
console.log(`${user1.name} взял книгу: "${book3.title}"`);
console.log(`Статус книги "${book3.title}": ${book3.isAvailable ? 'доступна' : 'не доступна'}\n`);

// Поиск книг по автору
console.log('=== Поиск книг по автору ===');
const tolstoyBooks = library.findBooksByAuthor('Лев Толстой');
console.log(`Книги Льва Толстого (${tolstoyBooks.length}):`);
tolstoyBooks.forEach((book) => {
  console.log(`  - "${book.title}" (${book.publishedYear})`);
});

const dostoevskyBooks = library.findBooksByAuthor('Федор Достоевский');
console.log(`\nКниги Федора Достоевского (${dostoevskyBooks.length}):`);
dostoevskyBooks.forEach((book) => {
  console.log(`  - "${book.title}" (${book.publishedYear})`);
});

// Поиск доступных книг
console.log('\n=== Поиск доступных книг ===');
const availableBooks = library.findAvailableBooks();
console.log(`Доступных книг: ${availableBooks.length}`);
availableBooks.forEach((book) => {
  console.log(`  - "${book.title}" - ${book.author}`);
});

// Пользователь возвращает книгу
console.log('\n=== Возврат книги ===');
user1.return(book1);
console.log(`${user1.name} вернул книгу: "${book1.title}"`);
console.log(`Статус книги "${book1.title}": ${book1.isAvailable ? 'доступна' : 'не доступна'}`);

// Проверка доступных книг после возврата
console.log('\n=== Доступные книги после возврата ===');
const availableBooksAfterReturn = library.findAvailableBooks();
console.log(`Доступных книг: ${availableBooksAfterReturn.length}`);
availableBooksAfterReturn.forEach((book) => {
  console.log(`  - "${book.title}" - ${book.author}`);
});

// Информация о пользователях
console.log('\n=== Информация о пользователях ===');
library.users.forEach((user) => {
  console.log(`${user.name} (ID: ${user.id}) взял книг: ${user.borrowedBooks.length}`);
  user.borrowedBooks.forEach((book) => {
    console.log(`  - "${book.title}"`);
  });
});

