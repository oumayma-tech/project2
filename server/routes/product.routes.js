const express=require('express')
const { addProduct, getProduct, updateProduct, deleteProduct, getallProduct } = require("../controllers/product.controller")
const router=express.Router()
const   Upload=require('../middlewares/Upload')
const path=require('path')


//add product
//req.body
router.post('/',addProduct)

//get product
//req.params
router.get('/:ID',getProduct)

//update product
// req.params
router.put('/:ID',updateProduct)

//delete product
// req.params
router.delete('/:ID',deleteProduct)

//getall product

router.get('/',getallProduct)

module.exports=router