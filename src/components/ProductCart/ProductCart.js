import React from 'react'
import './ProductCart.css';
import ProductPrice from '../ProductPrice/ProductPrice'
import ProductPurchase from '../ProductPurchase/ProductPurchase'


const ProductCart = props => {
    return(
        <div className='product_cart'>
            <ProductPrice productInfo = {props.productInfo}/>
            <ProductPurchase productInfo = {props.productInfo}/>
        </div>
    )
}

export default ProductCart