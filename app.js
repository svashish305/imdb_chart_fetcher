#!/usr/bin/env node
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const axios = require('axios').default;
const baseUrl = 'https://www.imdb.com';
const [chartUrl, itemsCount] = process.argv.slice(2);
const chart_url = chartUrl;
const items_count = parseInt(itemsCount);
if (items_count > 50) {
	console.error('Please provide any value less than 50!');
}
console.log('Loading Movies...');
(async () => {
	const res = await axios.get(chart_url);
	const domDoc = new JSDOM(res.data).window.document;
	const tableRows = domDoc.getElementsByTagName('tr');
	if (items_count > tableRows.length) {
		console.error('Insufficient Data! Please lower the items count!');
	}
	let movies = [];
	for (let i = 1; i <= items_count; i++) {
		let title = tableRows[i].querySelector('td:nth-child(2) a').innerHTML;
		let movie_release_year = tableRows[i]
			.querySelector('td:nth-child(2) span')
			.innerHTML.substr(1, 4);
		let imdb_rating = tableRows[i].querySelector('td:nth-child(3) strong')
			.innerHTML;
		let movieDetailsUrl =
			baseUrl + tableRows[i].querySelector('td:nth-child(2)').children[0].href;
		const movieDetails = await axios.get(movieDetailsUrl);
		const domDoc2 = new JSDOM(movieDetails.data).window.document;
		let summary = domDoc2.querySelector('.summary_text').innerHTML.trim();
		let duration = domDoc2.querySelector('div .subtext time').innerHTML.trim();
		let genre = domDoc2.querySelector('div .subtext a').innerHTML;
		movies.push({
			title,
			movie_release_year,
			imdb_rating,
			summary,
			duration,
			genre,
		});
	}
	console.log(movies);
	return movies;
})();
