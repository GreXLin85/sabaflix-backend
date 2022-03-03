const models = require('../models/index');

module.exports = {
    listContentCategories: async () => {
        try {
            return await models.ContentCategory.findAll();
        } catch (error) {
            throw error;
        }
    },
    getContentCategory: async (id) => {
        try {
            const contentCategory = await models.ContentCategory.findOne({ where: { id } });
            if (contentCategory) {
                return contentCategory;
            } else {
                throw new Error("ContentCategory not found");
            }
        } catch (error) {
            throw error;
        }
    },
    getContentCategoryByTitle: async (title) => {
        try {
            const contentCategory = await models.ContentCategory.findOne({ where: { title } });
            if (contentCategory) {
                return contentCategory;
            } else {
                throw new Error("ContentCategory not found");
            }
        } catch (error) {
            throw error;
        }
    },
    getContentCategoryBySlug: async (slug) => {
        try {
            const contentCategory = await models.ContentCategory.findOne({ where: { slug } });
            if (contentCategory) {
                return contentCategory;
            } else {
                throw new Error("ContentCategory not found");
            }
        } catch (error) {
            throw error;
        }
    },
    createContentCategory: async ({
        title,
        slug,
        description,
    }) => {
        try {
            // Check if all required fields are provided
            if (!title || !slug || !description) {
                throw new Error("All required fields must be provided");
            }
            // Check if contentCategory with the same title already exists
            const contentCategory = await models.ContentCategory.findOne({ where: { title } });
            if (contentCategory) {
                throw new Error("ContentCategory with same title already exists");
            }
            // Check if contentCategory with the same slug already exists
            const contentCategoryBySlug = await models.ContentCategory.findOne({ where: { slug } });
            if (contentCategoryBySlug) {
                throw new Error("ContentCategory with same slug already exists");
            }

            const createdContentCategory = await models.ContentCategory.create({
                title,
                slug,
                description,
            });
            return createdContentCategory;
        } catch (error) {
            throw error;
        }
    },
    updateContentCategory: async (id, {
        title,
        slug,
        description,
    }) => {
        try {
            const updatedContentCategory = await models.ContentCategory.update({
                title,
                slug,
                description,
            }, { where: { id } });
            return updatedContentCategory;
        } catch (error) {
            throw error;
        }
    },
    deleteContentCategory: async (id) => {
        try {
            const deletedContentCategory = await models.ContentCategory.destroy({ where: { id } });
            return deletedContentCategory;
        } catch (error) {
            throw error;
        }
    }
};