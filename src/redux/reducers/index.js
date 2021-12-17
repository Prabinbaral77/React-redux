import {combineReducers} from 'redux'
import { ProductReducers } from './productReducer'

const reducers = combineReducers({
    allProducts: ProductReducers
})

export default reducers