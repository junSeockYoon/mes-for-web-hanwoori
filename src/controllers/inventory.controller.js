const inventoryService = require('../services/inventory.service');

const getProducts = async (req, res)=> {

    //todo 재고 관리 API 생성 
     const result = await inventoryService.getAllProducts();

     console.log(result);

    res.render('inventory' , {result} );
};

module.exports = {
    getProducts,
};