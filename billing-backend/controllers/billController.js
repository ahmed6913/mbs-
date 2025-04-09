const Bill = require('../models/Bill');

const getBills = async (req, res) => {
    const bills = await Bill.find();
    res.json(bills);
};

const addBill = async (req, res) => {
    const { customer, items, total } = req.body;
    const newBill = new Bill({ customer, items, total });
    await newBill.save();
    res.status(201).json(newBill);
};

module.exports = { getBills, addBill };