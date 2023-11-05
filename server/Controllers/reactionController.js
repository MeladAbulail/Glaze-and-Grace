const Reaction = require('../models/reactionsModel'); // Import your model here

const addrate = async (req, res) => {
    const { productId, userId, rate } = req.body;

    try {
        const updatedProduct = await Reaction.addrate(productId, userId, rate);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    addrate
};






