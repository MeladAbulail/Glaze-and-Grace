const db = require('../config');
const Reaction = {};


Reaction.addrate = async (productId, user_id, rate) => {
    try {
    
        const insertrating = await db.query(
            `
            INSERT INTO reaction (rate, user_id, product_id) VALUES ($1, $2, $3) RETURNING rate
            `,
            [rate, user_id, productId]
        );
        
        const insertedRatingValue = insertrating.rows[0].rate;

        const result = await db.query(
            'UPDATE products SET rate= (SELECT AVG(rating) FROM reaction WHERE product_id = $1) WHERE id = $1 RETURNING *',
            [productId]
        );

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = Reaction
