import { combineReducers} from 'redux'
import userReducer from './userReducer'
import newsReducer from './newsReducer'
import eventReducer from './eventReducer'
import productReducer from './productReducer'
import authReducer from './authReducer'
import donationReducer from './donationReducer'
import orderReducer from './orderReducer'


export default combineReducers({newsReducer,eventReducer,userReducer,productReducer,authReducer,donationReducer,orderReducer})