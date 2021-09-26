const config = require("../config/auth.config");
const db = require("../models");

const Product = db.product;


//add product

exports.addProduct = async (req, res) => {
    try {
        const newproduct = new Product({
            ...req.body,
        })
        await newproduct.save()
        res.status(200).send({ msg: "product added", newproduct })
    } catch (error) {
        res.status(500).send({ msg: "impossible to add product" })
    }
}

// get product
exports.getProduct = async (req, res) => {
    const { ID } = req.params
    try {
        const productf = await Product.findById(ID)
        res.status(200).send({ msg: "product", productf })
    } catch (error) {
        res.status(500).send({ msg: "impossible to get product", error })
    }
}

// update product
exports.updateProduct = async(req, res) => {
    const {ID} = req.params
    try {
      const productupdate =  await Product.findByIdAndUpdate(ID, {$set: { ...req.body}})

      console.log(productupdate)
        res.status(200).send({ msg: "product updated" })
    } catch (error) {
        res.status(500).send({ msg: "impossible to update product", error })
    }
}

//delete product
exports.deleteProduct = async (req, res) => {
    const { ID } = req.params
    try {
        const product = await Product.findByIdAndDelete({ _id: ID })
        res.status(200).send({ msg: "product deleted" })
    } catch (error) {
        res.status(500).send({ msg: "impossible to delete product", error })
    }
}

// get all products
exports.getallProduct = async (req, res) => {

    try {
        const products = await Product.find()
        res.status(200).send({ msg: "all products", products })
    } catch (error) {
        res.status(500).send({ msg: "impossible to get all contacts", error })
    }
}