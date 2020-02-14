import React from 'react'
import './ProductPhoto.css';


const ProductPhoto = (props) => {
    const urlModify = props.url.split('.jpg').join('_220x220_1.jpg')
    return(
        <div className='product_photo'>
            <a href='#' className ='url--link product__link'>
                <img src={urlModify}/>
            </a>
        </div>
    )
}

export default ProductPhoto