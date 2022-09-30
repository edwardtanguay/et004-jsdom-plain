import { books } from './books.js';

console.log(books);
const booksElem = document.querySelector('.books');

booksElem.innerHTML = `
<p>There are ${books.length} books loaded locally:</p>
	${books.map(book => {
		return `
		<div class="book">
			<div class="title">${book.title}</div>
			<div class="author">by ${book.author}</div>
		</div>
		`;
	}).join('')}
`;
