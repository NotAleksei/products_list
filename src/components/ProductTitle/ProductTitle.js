import React from 'react'
import './ProductTitle.css';


const ProductTitle = props => {
    const assocProductsArr = props.productInfo.assocProducts.split(';') 
    const assocProducts = assocProductsArr.map((item, index)=>{
        if(assocProductsArr.length-2 === index && item[item.length-1] != '.'){
            return item ? <a href ='#' className='url--link'> {item}.</a> : null
        } else if (item[item.length-1] === '.') {
            return <a href ='#' className='url--link'> {item}</a>
        }
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