const contentCategoryService = require('../services/contentCategoryService');

const ErrorService = require("../services/ErrorService");
const MessageService = require("../services/MessageService");

module.exports = {
    listContentCategories: async (req, res) => {
        try {
            const contentCategories = await contentCategoryService.listContentCategories();
            return MessageService(res, contentCategories);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.getContentCategory(req.params.id);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentCategoryByTitle: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.getContentCategoryByTitle(req.params.title);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentCategoryBySlug: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.getContentCategoryBySlug(req.params.slug);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    createContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.createContentCategory(req.body);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    updateContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.updateContentCategory(req.body);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    deleteContentCategory: async (req, res) => {
        try {
            const contentCategory = await contentCategoryService.deleteContentCategory(req.params.id);
            return MessageService(res, contentCategory);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    }
}