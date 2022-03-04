const { Router } = require("express");
const router = Router()
const {
    listContentCategories,
    getContentCategory,
    getContentCategoryByTitle,
    getContentCategoryBySlug,
    createContentCategory,
    updateContentCategory,
    deleteContentCategory 
} = require("../controllers/contentCategoryController");

router.get('/', listContentCategories)
router.get('/title/:title', getContentCategoryByTitle)
router.get('/slug/:slug', getContentCategoryBySlug)
router.get('/:id', getContentCategory)
router.post('/', createContentCategory)
router.patch('/:id', updateContentCategory)
router.delete('/:id', deleteContentCategory)

module.exports = router