const express = require('express');
const PRODUCTS = require('../constants');
const app = express();
const productsRoute = express.Router();

productsRoute.get("/", (req, res) => {
    res.status(200).json({ products : PRODUCTS })
})

module.exports = productsRoute;