# A command-line script that takes input the **chart_url**​ and ​**items_count**​,

where chart_url​ is one of IMDb Top Indian Charts:

- Top Rated Indian Movies \( ​ https://www.imdb.com/india/top-rated-indian-movies​ \)
- Top Rated Tamil Movies \( ​ https://www.imdb.com/india/top-rated-tamil-movies​ \)
- Top Rated Telugu Movies \( ​ https://www.imdb.com/india/top-rated-telugu-movies​ \)

## Ouput

A ​json​ array of the top ​items_count​ number of movie items (with
attributes as listed below) in that particular IMDb chart.
Following attributes of each movie should be printed:

- title
- movie_release_year
- imdb_rating
- summary
- duration
- genre

### To Run:

After cloning the repo, inside repo's root folder:

```
imdb_chart_fetcher 'https://www.imdb.com/india/top-rated-indian-movies' 5
OR
npm start 'https://www.imdb.com/india/top-rated-indian-movies' 5
```
