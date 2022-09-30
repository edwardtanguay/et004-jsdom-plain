const url = 'https://edwardtanguay.netlify.app/share/techBooks.json';

export const getTechBooks = () => {
	return new Promise((resolve, reject) => {
		(async () => {
			const response = await fetch(url);
			const employees = await response.json();
			resolve(employees);
		})();
	});
};
