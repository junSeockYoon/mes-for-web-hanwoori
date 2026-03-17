const { commonDao, mapper } = require('../dao/common.dao');

const prodList = async () => {
    try {
        const result = await commonDao(mapper.PRODUCT, 'prodList');
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    prodList
}