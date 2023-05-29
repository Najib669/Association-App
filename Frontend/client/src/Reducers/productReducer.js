import { GET_PRODUCTS } from "../Actions/Types";

const productReducer = (state={products:[]},{type,payload})=>{
    switch(type){
       
        case GET_PRODUCTS:
            return {...state,products:payload}
        default: return state
    }
    
}
export default productReducer

