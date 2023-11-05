const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());

const reactionController = require('../Controllers/reactionController');

router.post('/reaction/addrate/:id', reactionController.addrate);

module.exports = router;
