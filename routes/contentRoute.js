const { Router } = require("express");
const router = Router()
const {
    listContents,
    getContent,
    getContentByTitle,
    getPopularContents,
    getLastAddedContents,
    createContent,
    updateContent,
    deleteContent
} = require("../controllers/contentController.js");

// main routes
router.get('/', listContents)
router.get('/:id', getContent)
router.get('/title/:title', getContentByTitle)
router.post('/', createContent)
router.patch('/:id', updateContent)
router.delete('/:id', deleteContent)

// Other routes
router.get('/popular', getPopularContents)
router.get('/last-added', getLastAddedContents)


module.exports = router