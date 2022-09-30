import { books } from './books.js';
import { getTechBooks } from './techBookModel.js';

(async () => {
	const techBooks = await getTechBooks();

	const contentElem = document.querySelector('.content');

	contentElem.innerHTML += `
<p>There are ${books.length} books loaded locally:</p>
	${books
		.map((book) => {
			return `
		<div class="book">
			<div class="title">${book.title}</div>
			<div class="author">by ${book.author}</div>
		</div>
		`;
		})
		.join('')}
`;

// 	contentElem.innerHTML += `
// <p>There are ${techBooks.length} books loaded locally:</p>
// 	${techBooks
// 		.map((techBook) => {
// 			return `
// 		<div class="techBook">
// 			<div class="title">${techBook.title}</div>
// 			<div class="description">by ${techBook.description}</div>
// 		</div>
// 		`;
// 		})
// 		.join('')}
// `;
})();
