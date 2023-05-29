const express = require ('express')
const router = express.Router()
const Order  = require ('../Models/orderSchema')


//post order
router.post('/neworder' ,(req,res)=>{
    let newOrder = new Order(req.body)
    newOrder.save((err,data)=>{
    err ? console.log(err) : res.send('order was added')
    })
    })

 //get orders
router.get('/' ,(req,res)=>{
    Order.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })



module.exports = router