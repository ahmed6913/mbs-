const Product = require('../models/Product');

const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

const addProduct = async (req, res) => {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json(newProduct);
};

module.exports = { getProducts, addProduct };