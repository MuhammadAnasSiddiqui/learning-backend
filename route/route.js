const express = require('express');
const user = require('./user');
const productsRoute = require('./products');
const app = express();
const router = express.Router();

router.use("/users", user)
router.use("/products", productsRoute)

module.exports = router