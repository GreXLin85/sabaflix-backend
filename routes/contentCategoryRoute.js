const { Router } = require("express");
const router = Router()
const {
    listContentCategories,
    getContentCategory,
    createContentCategory,
    updateContentCategory,
    deleteContentCategory 
} = require("../controllers/contentCategoryController");

router.get('/', listContentCategories)
router.get('/:id', getContentCategory)
router.post('/', createContentCategory)
router.patch('/:id', updateContentCategory)
router.delete('/:id', deleteContentCategory)

module.exports = router