
import {ADD_MAIL} from './Types'

import axios from "axios"



export const addMail = (newmail)=>(dispatch)=>{
    axios.post("http://localhost:8080/mails/newmail",newmail)
    .then(({data})=>dispatch({
        type:ADD_MAIL,
        payload:data,
    }))
    .catch((err)=>alert("ERROR IN ADD NEW MAIL"))
}