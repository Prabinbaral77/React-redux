import React, {useEffect} from 'react'
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { setProducts } from '../redux/actions/productAction'



const ProductList = () => {

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
                          .catch((error) => {
                              console.log(error);
                          })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    },[])

    const products = useSelector(state => state);
    console.log(products);
    return (
        <div className="ui grid container">
            <Product />
        </div> 
    )
}

export default ProductList