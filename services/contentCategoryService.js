const models = require('../models/index');
const slugify = require('slugify');

module.exports = {
    listContentCategories: async () => {
        try {
            return await models.ContentCategory.findAll({include: ["contents"]});
        } catch (error) {
            throw error;
        }
    },
    getContentCategory: async (id) => {
        try {
            const contentCategory = await models.ContentCategory.findOne({ where: { id },include: ["contents"] });
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
            const contentCategory = await models.ContentCategory.findOne({ where: { title } ,include: ["contents"]});
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
            const contentCategory = await models.ContentCategory.findOne({ where: { slug } ,include: ["contents"]});
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
        description,
    }) => {
        try {
            // Check if all required fields are provided
            if (!title || !description) {
                throw new Error("All required fields must be provided");
            }
            // Check if contentCategory with the same title already exists
            const contentCategory = await models.ContentCategory.findOne({ where: { title } });
            if (contentCategory) {
                throw new Error("ContentCategory with same title already exists");
            }
            // Check if contentCategory with the same slug already exists

            let slug = slugify(title, {
                replacement: '-',
                remove: undefined,
                lower: true,
                strict: false,
                locale: 'en',
                trim: true,
                remove: /[*+~.()'"!:@]/g,
            });

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