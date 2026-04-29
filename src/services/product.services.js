const { commonDao, mapper } = require('../dao/common.dao');

const prodList = async () => {
    try {
        const result = await commonDao(mapper.PRODUCT, 'prodList');
        // console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}
const categoryList = async () => {
    try {
        const result = await commonDao(mapper.PRODUCT, 'categoryList');
        // console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

async function saveProduct(params) {
    try {
        const result = await commonDao(mapper.PRODUCT, 'saveProduct', params);
        return result;
    } catch (error) {
        throw error;
    }
}

async function cateName(params) {
    try {
        const result = await commonDao(mapper.PRODUCT, 'cateName', params);
        return result;
    } catch (error) {
        throw error;
    }
}

async function deleteCategory(params) {
    try {
        const result = await commonDao(mapper.PRODUCT, 'deleteCategory', params);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    prodList,
    categoryList,
    saveProduct,
    cateName,
    deleteCategory
}