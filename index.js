const express = require('express');
const { urlencoded, json } = require('body-parser');
const cors = require('cors');

const app = express();

const { contentCategoryRoute, contentRoute } = require('./routes/index.js');

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cors())

app.use('/contentCategory', contentCategoryRoute)
app.use('/content', contentRoute)

app.listen("8080", async () => {
    try {
        console.log("Server is running on port 8080");
    } catch (error) {
        console.error(error);
    }
})