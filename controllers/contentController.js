const contentService = require('../services/contentService');

module.exports = {
    listContents: async (req, res) => {
        try {
            const contents = await contentService.listContents();
           res.status(200).json({message: contents});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getContent: async (req, res) => {
        try {
            const content = await contentService.getContent(req.params.id);
            res.status(200).json({message: content});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getContentByTitle: async (req, res) => {
        try {
            const content = await contentService.getContentByTitle(req.params.title);
           res.status(200).json({message: content});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getPopularContents: async (req, res) => {
        try {
            const contents = await contentService.getPopularContents();
           res.status(200).json({message: contents});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getLastAddedContents: async (req, res) => {
        try {
            const contents = await contentService.getLastAddedContents();
           res.status(200).json({message: contents});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    createContent: async (req, res) => {
        try {
            const content = await contentService.createContent(req.body);
           res.status(200).json({message: content});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateContent: async (req, res) => {
        try {
            const content = await contentService.updateContent(req.body);
           res.status(200).json({message: content});
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteContent: async (req, res) => {
        try {
            const content = await contentService.deleteContent(req.params.id);
           res.status(200).json({message: content});
        } catch (error) {
            res.status(500).json(error);
        }
    },
}