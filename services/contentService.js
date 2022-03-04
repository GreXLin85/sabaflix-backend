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
            let Content = await models.Content.findAll({ order: [["rank", "DESC"]], limit: 11, include: ["contentCategory"], where: {} });
            return Content;
        } catch (error) {
            throw error;
        }
    },
    getMostPopularContent: async () => {
        try {
            let Content = await models.Content.findOne({ order: [["rank", "DESC"]], include: ["contentCategory"], where: {} });
            return Content;
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
    getContentByIsOriginal: async () => {
        try {
            const content = await models.Content.findAll({ where: { isOriginal: true }, include: ["contentCategory"] });
            if (content) {
                return content;
            } else {
                throw new Error("Content not found");
            }
        } catch (error) {
            throw error;
        }
    },
    getContentByIsSeries: async () => {
        try {
            const content = await models.Content.findAll({ where: { isSeries: true }, include: ["contentCategory"] });
            if (content) {
                return content;
            } else {
                throw new Error("Content not found");
            }
        } catch (error) {
            throw error;
        }
    },
    createContent: async ({
        title,
        titleLogo,
        background,
        banner,
        price,
        description,
        categoryId,
        rank,
        isOriginal = false,
        isSeries = false,
        buyLink,
        moreInfoLink,
    }) => {
        try {
            // Check all required fields are present
            if (!title || !titleLogo || !banner || !background || !price || !description || !categoryId || !rank || !buyLink || !moreInfoLink) {
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

            return await models.Content.create({
                title,
                titleLogo,
                background,
                banner,
                price,
                description,
                categoryId,
                rank,
                isOriginal,
                isSeries,
                buyLink,
                moreInfoLink,
            });
        } catch (error) {
            throw error;
        }
    },
    updateContent: async (id, data) => {
        console.log("ASDASDADASDASDASDASD");
        try {
            // Check if content exists
            const content = await models.Content.findOne({ where: { id } });
            if (!content) {
                throw new Error("Content not found");
            }
            // Check if category exists
            if (data.categoryId) {
                const category = await models.ContentCategory.findOne({ where: { id: data.categoryId } });
                if (!category) {
                    throw new Error("Category not found");
                }
            }

            // Check if rank is valid
            if (data.rank) {
                if (rank < 0 || rank > 100) {
                    throw new Error("Rank must be between 0 and 100");
                }
            }

            return await models.Content.update(data, { where: { id } });
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
