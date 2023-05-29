import {ADD_ORDER} from './Types'

import axios from "axios"



export const addOrder = (neworder)=>(dispatch)=>{
    axios.post("http://localhost:8080/orders/neworder",neworder)
    .then(({data})=>dispatch({
        type:ADD_ORDER,
        payload:data,
    }))
    .catch((err)=>alert("ERROR IN ADD NEW ORDER"))
}