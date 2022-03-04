const axios = require('axios').default;
const { randomInt } = require('crypto');
const fs = require('fs');
const models = require('../models/index');

// get shows names
/*let movieNameList = [
    'Peaky Blinders',
    'Breaking Bad',
    'Game of Thrones',
    'The Sopranos',
    'The Vampire Diaries',
    'The Wire',
    'The Crown',
    'The 100',
]

Promise.all(movieNameList.map(movieName => {
    return axios.get(`http://www.omdbapi.com/?t=${movieName}&apikey=APIKEY`)
})).then(response => {
    response.forEach(movie => {
        fs.appendFileSync('movies.json', JSON.stringify(movie.data) + ',')
    })
    console.log('done');
})*/

JSON.parse(fs.readFileSync('movies.json')).forEach(movie => {
    let movieData = {
        title: movie.Title,
        titleLogo: movie.Poster,
        background: movie.Poster,
        banner: movie.Poster,
        price: randomInt(50, 600),
        description: movie.Plot,
        categoryId: randomInt(1, 5),
        rank: randomInt(1, 100),
        isOriginal : movie.Type == 'movie' ? true : false,
        isSeries : movie.Type == 'series' ? true : false,
        buyLink: "https://www.amazon.com/",
        moreInfoLink: "https://www.imdb.com/",
    }
    models.Content.create(movieData)
})
console.log('done');
