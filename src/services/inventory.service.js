let products = [ 
    { id: 1, name: '노트북', category: '전자제품', stock: 15, price: 1500000 },
];

const getAllProducts = () => {
    return products;
};

module.exports = {
    getAllProducts,
};