const models = require('../models/index');

module.exports = {
    listContents: async () => {
        try {
            return await models.Content.findAll({ include: ["contentCategory"] });
        } catch (error) {
            throw error;
        }
    },
    getContent: async (id) => {
        try {
            const content = await models.Content.findOne({ where: { id }, include: ["contentCategory"] });
            if (content) {
                return content;
            } else {
                throw new Error("Content not found");
            }
        } catch (error) {
            throw error;
        }
    },
    getContentByTitle: async (title) => {
        try {
            const content = await models.Content.findOne({ where: { title }, include: ["contentCategory"] });
            if (content) {
                return content;
            } else {
                throw new Error("Content not found");
            }
        } catch (error) {
            throw error;
        }
    },
    getPopularContents: async () => {
        try {
            return await models.Content.findAll({ order: [["rank", "DESC"]], limit: 11, include: ["contentCategory"] });

        } catch (error) {
            throw error;
        }
    },
    getLastAddedContents: async () => {
        try {
            return await models.Content.findAll({ order: [["createdAt", "DESC"]], limit: 20, include: ["contentCategory"] });
        } catch (error) {
            throw error;
        }
    },
    createContent: async ({
        title,
        titleLogo,
        background,
        price,
        description,
        categoryId,
        rank,
        isOriginal,
        isSeries,
        buyLink,
        moreInfoLink,
    }) => {
        try {
            // Check all required fields are present
            if (!title || !titleLogo || !background || !price || !description || !categoryId || !rank || !isOriginal || !isSeries || !buyLink || !moreInfoLink) {
                throw new Error("Missing required fields");
            }
            // Check if content with same title already exists
            const content = await models.Content.findOne({ where: { title: title } });
            if (content) {
                throw new Error("Content with same title already exists");
            }
            // Check if category exists
            const category = await models.ContentCategory.findOne({ where: { id: categoryId } });
            if (!category) {
                throw new Error("Category not found");
            }
            // Check if rank is valid
            if (rank < 0 || rank > 100) {
                throw new Error("Rank must be between 0 and 100");
            }

            return await models.Content.create(contentData);
        } catch (error) {
            throw error;
        }
    },
    updateContent: async (id, {
        title,
        titleLogo,
        background,
        price,
        description,
        categoryId,
        rank,
        isOriginal,
        isSeries,
        buyLink,
        moreInfoLink,
    }) => {
        try {
            // Check all required fields are present
            if (!title || !titleLogo || !background || !price || !description || !categoryId || !rank || !isOriginal || !isSeries || !buyLink || !moreInfoLink) {
                throw new Error("Missing required fields");
            }
            // Check if content exists
            const content = await models.Content.findOne({ where: { id } });
            if (!content) {
                throw new Error("Content not found");
            }
            // Check if category exists
            const category = await models.ContentCategory.findOne({ where: { id: categoryId } });
            if (!category) {
                throw new Error("Category not found");
            }
            // Check if rank is valid
            if (rank < 0 || rank > 100) {
                throw new Error("Rank must be between 0 and 100");
            }

            return await models.Content.update(contentData, { where: { id } });
        } catch (error) {
            throw error;
        }
    },
    deleteContent: async (id) => {
        try {
            // Check if content exists
            const content = await models.Content.findOne({ where: { id } });
            if (!content) {
                throw new Error("Content not found");
            }
            return await models.Content.destroy({ where: { id } });
        } catch (error) {
            throw error;
        }
    },
}
