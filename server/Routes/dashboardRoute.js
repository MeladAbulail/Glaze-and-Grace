const dashboardController = require('../Controllers/dashboardController');
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

router.post('/dashboard/addproduct',dashboardController.createproduct);
//router.post('/dashboard/product/:id/addproductimage',dashboardController.addproductimage);
router.get('/dashboard/product/:id', dashboardController.productdetail);
router.put('/dashboard/product/:id/update', dashboardController.updateproduct);
router.put('/dashboard/product/:id/delete', dashboardController.deleteproduct);


module.exports = router;
