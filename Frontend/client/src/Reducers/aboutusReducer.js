import { GET_ABOUTUS } from "../Actions/Types";

const aboutusReducer = (state={news:[]},{type,payload})=>{
    switch(type){
        
        case GET_ABOUTUS:
            return {...state,news:payload}
        default: return state
    }
    
}
export default aboutusReducer