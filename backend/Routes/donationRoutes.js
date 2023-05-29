const express = require ('express')
const router = express.Router()
const Donation = require ("../Models/donationSchema")

//post donation
router.post("/newdonation", (req, res) => {
  let newDonation = new Donation(req.body);
  newDonation.save((err, data) => {
    err ? console.log(err) : res.send("Donation was added");
  });
});
//get donation
router.get("/", (req, res) => {
  Donation.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

module.exports = router