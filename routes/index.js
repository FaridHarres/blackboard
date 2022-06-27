var express = require('express');
var router = express.Router();
var articleModel = require('../model/article')
var mongoose = require('mongoose')
var ordersModel = require('../model/orders')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {

  var allArticle= await articleModel.find();
  //console.log(allArticle)


  res.render('catalog',{allArticle});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  var allOrders = await ordersModel.find()
  //console.log("liste des commandes",allOrders)
  res.render('orders-list',{allOrders});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
 // console.log("bouton voir",req.query.id)

  var allOrders = await ordersModel.findById(req.query.id)
  .populate('articles')
  .exec()
  console.log("les produit ",allOrders);
  // console.log("nom de l'article",allOrders.articles)
  

  res.render('order', {allOrders: allOrders.articles, order: allOrders});
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
