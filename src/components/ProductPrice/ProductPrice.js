import React from 'react'
import './ProductPrice.css';


const ProductPrice = props => {

    return(
        <div className='product_price'>
            <div className='product-gold-price-block'>
                <span className='product-gold-price-text'>По карте клуба</span>
                <span className='goldPrice'>{props.productInfo.priceGold}</span>
                <span className='rouble__i'>
                    <svg></svg>
                </span>
            </div>
            <div className='product-price-block'>
                <span className='retailPrice'>{props.productInfo.priceRetail}</span>
                <span className='rouble__i'>
                    <svg></svg>
                </span>
            </div>
            <div className='product-points-price-block'></div>
            <div className='product_units'></div>
        </div>
    )
}

export default ProductPrice