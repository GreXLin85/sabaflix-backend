const contentCategoryService = require('../services/contentCategoryService');

module.exports = {
    listContentCategories: async (req, res) => {
        try {
            const contentCategories = await contentCategoryService.listContentCategories();
            res.status(200).json({ message: contentCategories });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.getContentCategory(req.params.id);
            res.status(200).json({ message: contentCategory });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.createContentCategory(req.body);
            res.status(200).json({ message: contentCategory });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.updateContentCategory(req.body);
            res.status(200).json({ message: contentCategory });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.deleteContentCategory(req.params.id);
            res.status(200).json({ message: contentCategory });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}