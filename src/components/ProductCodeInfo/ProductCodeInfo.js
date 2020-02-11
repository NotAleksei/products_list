import React from 'react'
import './ProductCodeInfo.css';


const ProductCodeInfo = props => {
    return(
        <div className='product_code-info'>
            <span>код: {props.productInfo.code}</span>
            <div className = 'product_status_container'>
                <span className = 'product_status'>Наличие</span>
            </div>
        </div>
    )
}

export default ProductCodeInfo