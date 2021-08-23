import React from 'react'
import './MainInfo.css';
import ProductTitle from '../ProductTitle/ProductTitle'
import ProductCart from '../ProductCart/ProductCart'

const MainInfo = props => {
    return(
        <div className='product_main-info'>
            <ProductTitle productInfo = {props.productInfo}/>
            <ProductCart productInfo = {props.productInfo}/>
        </div>
    )
}

export default MainInfo