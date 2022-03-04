const contentService = require('../services/contentService');

const ErrorService = require("../services/ErrorService");
const MessageService = require("../services/MessageService");

module.exports = {
    listContents: async (req, res) => {
        try {
            const contents = await contentService.listContents();
            return MessageService(res, contents);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContent: async (req, res) => {
        try {
            const content = await contentService.getContent(req.params.id);
            return MessageService(res, content);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentByTitle: async (req, res) => {
        try {
            const content = await contentService.getContentByTitle(req.params.title);
            return MessageService(res, content);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getMostPopularContent: async (req, res) => {
        try {
            const content = await contentService.getMostPopularContent();
            return MessageService(res, content);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getPopularContents: async (req, res) => {
        try {
            const contents = await contentService.getPopularContents();
            return MessageService(res, contents);
        } catch (error) {
            console.log(error);
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getLastAddedContents: async (req, res) => {
        try {
            const contents = await contentService.getLastAddedContents();
            return MessageService(res, contents);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentByIsOriginal: async (req, res) => {
        try {
            const contents = await contentService.getContentByIsOriginal();
            return MessageService(res, contents);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    getContentByIsSeries: async (req, res) => {
        try {
            const contents = await contentService.getContentByIsSeries();
            return MessageService(res, contents);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },

    createContent: async (req, res) => {
        try {
            const content = await contentService.createContent(req.body);
            return MessageService(res, content);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    updateContent: async (req, res) => {
        try {
            const content = await contentService.updateContent(req.params.id,req.body);
            return MessageService(res, content);
        } catch (error) {
            console.log(error);
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
    deleteContent: async (req, res) => {
        try {
            const content = await contentService.deleteContent(req.params.id);
            return MessageService(res, content);
        } catch (error) {
            return ErrorService(res, {
                message: error.message,
            });
        }
    },
}