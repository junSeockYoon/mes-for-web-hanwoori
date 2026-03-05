const { commonDao, mapper } = require('../dao/common.dao');

async function login(params) {
    try {
        const result = await commonDao(mapper.AUTH, 'userLogin', params);
        console.log(result);

        return result;
    } catch (error) {
        throw error
    }
}

module.exports = {
    login
}