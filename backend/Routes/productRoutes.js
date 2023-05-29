const express = require ('express')
const router = express.Router()
const Product  = require ('../Models/productSchema')

//post product
router.post('/newproduct' ,(req,res)=>{
let newProduct = new Product(req.body)
newProduct.save((err,data)=>{
err ? console.log(err) : res.send('product was added')
})
})
//get products
router.get('/' ,(req,res)=>{
    Product.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })
//delete product by id
router.delete('/:id' ,(req,res)=>{
    Product.findByIdAndDelete({_id:req.params.id},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })
//update product by id
router.put('/:id' ,(req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })



module.exports = router