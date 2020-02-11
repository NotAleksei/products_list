import React from 'react'
import './ProductPhoto.css';


const ProductPhoto = (props) => {
    return(
        <div className='product_photo'>
            <a href='#' className ='url--link product__link'>
                <img src={props.url}/>
            </a>
        </div>
    )
}

export default ProductPhoto