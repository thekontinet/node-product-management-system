var express = require("express");
const { auth } = require("../middlewares/auth");
var router = express.Router();
const { Product } = require("../models");

router.get("/products", function (req, res) {
  // Get all products from DB
  // render the view file and send products in
  res.send("List of product should be displayed here");
});

router.get("/products/create", function (req, res) {
  // render the form to display the products
  res.send("New product form should be displayed here");
});

router.post("/products", function (req, res) {
  //Get all form data
  // validate the data
  // send to database
  // redirect to /products
  res.send("This route should create product and redirect");
});

router.get("/products/:id", async function (req, res) {
  // Get all product with specified :id from DB
  // render the view file that has edit form and send products data in
  res.send("product deleted");
});

router.post("/products/:id", async function (req, res) {
  let id = req.params.id;
  let user = await findOne({ where: id });
  let { title, price, quantity } = req.body;
  try {
    if (user) {
      Product.title = title;
      Product.price = price;
      Product.quantity = quantity;
      req.flash("message", "Product successfully updated");
      res.redirect("/products");
    }
  } catch (error) {
      req.flash('error', 'product not updated')
    res.redirect("back");
  }
});

router.post("/products/delete/:id", async function (req, res) {
  let id = req.params.id;
  let user = await findOne({ where: id });

  try {
    if (user) {
      await Product.destroy(user);
      req.flash('message', 'Product successfully deleted')
      res.redirect("/products");
    }
  } catch (error) {
      req.flash('error', 'unable to delete')
    res.redirect("/products/:id");
  }
});

module.exports = router;
