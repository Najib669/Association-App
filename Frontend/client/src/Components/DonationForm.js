import React from "react";
import{ useEffect, useState } from "react";
import {addDonation } from "../Actions/donationAction"
import { useDispatch, useSelector } from "react-redux";

const DonationForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
      donorName: "",
      email: "",
      amount: "",
      currency: ""
  
    });
    const handleChange=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
     
    }
  
    const handleDonation = () => {
    
      dispatch(addDonation(input))
     };
  return (
    <>
    <form className="form">
    <h2>Send a donation</h2>
    <div>
      <label>Your Name</label>
      <input type='text' name="donorName" onChange={handleChange}></input>
    </div>
        <div>
      <label>Your Email</label>
      <input type='text' name="email" onChange={handleChange}></input>
    </div>
    <div>
    <label>Amount</label>
    <input type='number' name="amount" autoComplete="off" onChange={handleChange} ></input>
  </div>
    <div>
    <label>Currency</label>
    <select id="currency" name="currency"  onChange={handleChange} >
    <option value="">Select currency</option>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="DT">DT</option>
  </select>
  </div>
  <button type="submit" onClick={handleDonation} >Send</button>
  </form>

    </>
    
  );
};

export default DonationForm;
