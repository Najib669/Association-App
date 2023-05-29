const express = require ('express')
const router = express.Router()
const Mail  = require ('../Models/mailSchema')

//post mail
router.post('/newmail' ,(req,res)=>{
let newMail = new Mail(req.body)
newMail.save((err,data)=>{
err ? console.log(err) : res.send('Mail was added')
})
})
//get mail
router.get('/' ,(req,res)=>{
    Mail.find({},(err,data)=>{
    err ? console.log(err) : res.json(data)
    })
    })




module.exports = router