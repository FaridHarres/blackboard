var express = require('express');
var router = express.Router();
var articleModel = require('../model/article')
var mongoose = require('mongoose')
var ordersModel = require('../model/orders')
var usersModel= require('../model/users')





/* GET home page. */
router.get('/', async function(req, res, next) {

  var articleIndispo = await articleModel.find({stock : 0})
  //console.log("articleIndispo", articleIndispo)
  //message non lu
  var admin =  await usersModel.find(
    {status: "admin"},

    )

  var messages=  admin[0].messages
    console.log("message non lu",admin[0].messages)
    let compteur = []
      for(i=0; i<messages.length; i++){ 
        console.log(messages[i].read)

             if(!messages[i].read) {
              
                compteur.push(messages[i].read)
                } 
               console.log("compteur, ", compteur)
      }


  //tache non cloturé

  var taches = await usersModel.find({status: "admin"})
  //console.log(taches[0].tasks)
  var alltaches = taches[0].tasks
  let compteurTache = []
  for(i=0; i<alltaches.length; i++){
    if(alltaches[i].dateCloture == null){
      compteurTache.push(alltaches[i].dateCloture)
      //console.log(compteurTache.length)
    }
  }

  res.render('index', {articleIndispo, compteur, compteurTache});
});




/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {
  
  var Admin = await usersModel.find(
    {status: "admin",},
    )
   
    var adminTasks = await Admin[0].tasks

    console.log(adminTasks)
  res.render('tasks',{adminTasks});
});




/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {

  var Admin = await usersModel.find(
    {status: "admin",},
    )
   
    var adminMessage = Admin[0].messages

  console.log("admin", adminMessage)
  res.render('messages',{adminMessage});
});





/* GET Users page. */
router.get('/users-page', async function(req, res, next) {
  var allUsers = await usersModel.find({status : "customer"})

  console.log(allUsers)
  res.render('users', {allUsers});
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
