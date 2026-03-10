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

async function join(params) {
    try {
        const result = await commonDao(mapper.AUTH, 'userJoin', params);

        return result;
    } catch (error) {
        throw error
    }
}
module.exports = {
    login,
    join
}