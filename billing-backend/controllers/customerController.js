const Customer = require('../models/Customer');

const getCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
};

const addCustomer = async (req, res) => {
    const { name, email, phone } = req.body;
    const newCustomer = new Customer({ name, email, phone });
    await newCustomer.save();
    res.status(201).json(newCustomer);
};

module.exports = { getCustomers, addCustomer };