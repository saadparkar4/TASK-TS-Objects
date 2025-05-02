// don't change this interface
interface Book {
	title: string;
	author: string | string[];
	publishedYear: number;
	genre: string;
	pageCount?: number;
	ISBN?: string;
}

/**
 * `createBook` function:
 * - Accepts four parameters:
 *   - `title` (string)
 *   - `author` (string)
 *   - `publishedYear` (number)
 *   - `genre` (string)
 * - Returns a new `Book` object with these properties.
 * Example:
 *  createBook("JavaScript: The Definitive Guide", "David Flanagan", 2020, "Programming");
 *   // => { title: "JavaScript: The Definitive Guide", author: "David Flanagan", publishedYear: 2020, genre: "Programming" }
 */
function createBook(title: string, author: string, publishedYear: number, genre: string): Book {
	// write your code here...
	const book: Book = {
		title,
		author,
		publishedYear,
		genre,
	};
	return book as Book; // replace "{} as Book" with what you see is fit
}

// DO NOT CHANGE THE LINE OF CODE BELOW (you can use it for testing your code)
const book = createBook("Hitchhiker's Guide to The Galaxy", "Douglas Adams", 1965, "Sci-Fi");

/**
 * `printBookTitleAndYear` function:
 * - Accepts a `book` parameter of type `Book`.
 * - Returns the book’s title with its publish year separated by a space.
 * - Access the book title using dot-notation and access the publish year using bracket-notation.
 * Example:
 *  printBookTitleAndYear(book);
 *   // => "Hitchhiker's Guide to The Galaxy 1965"
 */
function printBookTitleAndYear(book: Book): string {
	// write your code here...
	let bookTitleAndYear = `${book.title} ${book["publishedYear"]}`;
	return bookTitleAndYear; // replace empty string with what you see is fit
}

/**
 * `addPageCount` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `pageCount` parameter of type `number`.
 * - Returns the same `Book` object with a new `pageCount` property.
 * Example:
 *  addPageCount(book, 320);
 *   // => { title: "Hitchhiker's Guide to The Galaxy", author: "Douglas Adams", publishedYear: 1965, genre: "Sci-Fi", pageCount: 320 }
 */
function addPageCount(book: Book, pageCount: number): Book {
	// write your code here.
	book.pageCount = pageCount;
	return book;
}

addPageCount(book, 320);
/**
 * `addISBN` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `ISBN` parameter of type `string`.
 * - Returns the same `Book` object with a new `ISBN` property.
 * Example:
 *  addISBN(book, "978-3-16-148410-0");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0" // ✅ added ISBN
 *   //    }
 */
function addISBN(book: Book, ISBN: string): Book {
	// write your code here...

	book.ISBN = ISBN;

	return book;
}
addISBN(book, "978-3-16-148410-0");

/**
 * `updatePublishedYear` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - A `newYear` parameter of type `number` representing the updated publish year.
 * - Returns the same `Book` object with an updated `publishedYear` property.
 * Example:
 *  updatePublishedYear(book, 2022);
 *    // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: "Douglas Adams",
 *   //       publishedYear: 2022, // ✅ updated publishedYear
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function updatePublishedYear(book: Book, newYear: number): Book {
	// write your code here...

	book.publishedYear = newYear;

	return book;
}
updatePublishedYear(book, 2020);

/**
 * `addSecondAuthor` function:
 * - Accepts:
 *   - A `book` parameter of type `Book`.
 *   - An `additionalAuthor` parameter of type `string`.
 * - Updates the `author` property:
 *   - If `author` is already an array, it adds the new author.
 *   - If `author` is a string, it converts it to an array and adds the new author.
 * - Returns the updated `Book` object.
 * Example:
 *  addSecondAuthor(book, "John Doe");
 *   // => {
 *   //       title: "Hitchhiker's Guide to The Galaxy",
 *   //       author: ["Douglas Adams", "John Doe"], // ✅ two authors now
 *   //       publishedYear: 1965,
 *   //       genre: "Sci-Fi",
 *   //       ISBN: "978-3-16-148410-0"
 *   //    }
 */
function addSecondAuthor(book: Book, additionalAuthor: string): Book {
	// write your code here...
	book.author = Array.isArray(book.author) ? [...book.author, additionalAuthor] : [book.author, additionalAuthor];
	//  spread operators to fetch previous/existing values of the array to append additional values or original
	// Array.isArray

	return book;
}
addSecondAuthor(book, "John Doe");

export { createBook, printBookTitleAndYear, addPageCount, addISBN, updatePublishedYear, addSecondAuthor, Book };
