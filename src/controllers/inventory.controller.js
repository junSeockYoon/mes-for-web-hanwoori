const inventoryService = require('../services/inventory.service');

const getProducts = (req, res) => {
    const data = inventoryService.getAllProducts();
    res.json(data);
};

module.exports = {
    getProducts,
};