
import {ADD_DONATION} from './Types'

import axios from "axios"



export const addDonation = (newdonation)=>(dispatch)=>{
    axios.post("http://localhost:8080/donations/newdonation",newdonation)
    .then(({data})=>dispatch({
        type:ADD_DONATION,
        payload:data,
    }))
    .catch((err)=>alert("ERROR IN ADD NEW USER"))
}