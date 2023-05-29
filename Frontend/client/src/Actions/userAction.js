import {
    ADD_USER,
    GET_USERS
} from './Types'
import {useDispatch} from "react-redux"
import axios from "axios"

// export const add = (newuser)=>(dispatch)=>{
//     axios.post("http://localhost:8080/newuser",newuser)
//     .then(({data})=>dispatch({
//         type:ADD_USER,
//         payload:data,
//     }))
//     .catch((err)=>alert("ERROR IN ADD NEW USER"))
// }

export const getUsers =()=>(dispatch)=>{
    axios.get("http://localhost:8080/users/")
    .then(({data})=>dispatch({
        type:GET_USERS,
        payload:data,
    })
    //.catch((err)=>{alert("ERROR IN GET USERS")})
    )
} 