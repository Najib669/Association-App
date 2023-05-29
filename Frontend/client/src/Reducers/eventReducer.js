import { GET_EVENTS } from "../Actions/Types";

const eventReducer = (state={events:[]},{type,payload})=>{
    switch(type){
 
        case GET_EVENTS:
            return {...state,events:payload}
        default: return state
    }
    
}
export default eventReducer