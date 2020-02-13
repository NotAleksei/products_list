import React from 'react'
import './ProductTitle.css';


const ProductTitle = props => {
    const assocProductsArr = props.productInfo.assocProducts.split(';')
    let assocProducts = assocProductsArr.map((item)=>{
        return item ? <a href ='#' className='url--link'> {item},</a> : null
    })
    return(
        <div className='product_title'>
            <div className ='product_description'>
                <a href ='#' className='product__link'>{props.productInfo.title}</a>
            </div>
            <div className ='product_tags'>
                <p>Могут понадобиться:</p>
                {assocProducts}
            </div>
        </div>
    )
}

export default ProductTitle