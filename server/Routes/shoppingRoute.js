const express = require('express');
const router = express.Router();
const shoppingController = require('../Controllers/shoppingController');

router.post('/addtocart/:id', shoppingController.addtocart);
router.get('/shoppingcart', shoppingController.getcartproducts);
router.get('/shoppingcart/totalprice', shoppingController.totalprice);
router.delete('/product/delete/:id', shoppingController.deleteproduct);


module.exports = router;