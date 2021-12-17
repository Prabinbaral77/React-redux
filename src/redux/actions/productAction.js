import { ActionTypes } from "../contants/action-type";
import axios from "../../apis/fakeStoreApi"

export const fetchProducts = () => {

    //this is provieded by redux thunk
    //helps asyncronous api call inside our actionCreaters
    return async (dispatch) => {
        const response = await axios.get("/products")
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })
    }
}

export const fetchProduct = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/products/${id}`)
        dispatch({
            type:ActionTypes.SELECTED_PRODUCTS,
            payload: response.data
        })
    }
}

export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

// export const selectedProducts = (product) => {
//     return {
//         type:ActionTypes.SELECTED_PRODUCTS,
//         payload:product
//     }
// }

export const removeSelectedProducts = (product) => {
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:product
    }
}