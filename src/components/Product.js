import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'


const Product = () => {
    const products = useSelector(state => state.allProducts.products)
    const renderList  = products.map((({id, title, category}) => {
        return (
            <div className="four column wide" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui links cards">
                    <div className="card">
                        <div className="image"></div>
                        <div className="content">
                            <div className="header">{title}</div>
                      </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    }))

    return (
        <div>
            {renderList}
        </div>
    )
}

export default Product