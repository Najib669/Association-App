import {  ADD_ORDER} from "../Actions/Types";

const orderReducer = (state={orders:[]},{type,payload})=>{
    switch(type){
        case ADD_ORDER:
            return {...state,orders:[...state.orders,payload]}
  
        default: return state
    }
    
}
export default orderReducer