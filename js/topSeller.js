const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42b12cae1amshe1e28949116d7afp143c9djsn8f54fd263058',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}