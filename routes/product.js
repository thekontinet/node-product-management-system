var express = require('express');
const { auth } = require('../middlewares/auth');
var router = express.Router();
const {Product} = require('../models');
const product = require('../models/product');

router.get('/products', auth, async function(req, res){
    const products = await Product.findAll();
    res.render('dashboard', {products})
    // render the view file and send products in
})

router.get('/products/create', function(req, res){
    // render the form to display the products
    res.send("New product form should be displayed here")
})

router.post('/products', function(req, res){
    //Get all form data
    // validate the data
    // send to database
    // redirect to /products
    res.send("This route should create product and redirect")
})

router.get('/products/:id', function(req, res){
    // Get all product with specified :id from DB
    // render the view file that has edit form and send products data in
    res.send("Edit product form should be displayed here")
})

router.post('/products/:id', function(req, res){
    //Get all form data
    // validate the data
    // update to database
    // redirect to /products
    res.send("This route should update product and redirect")
})

router.post('/products/delete/:id', function(req, res){
    // Get all product with specified :id from DB
    // Delete from DB
    // redirect to /products
    res.send("This route should delete product and redirect")
})


module.exports = router;
