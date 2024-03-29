import React from 'react'
import './ProductToCart.css';

const ProductToCart = props => {

    return(
        <div className='product_count_wrapper'>
            <div className='stepper'>
                <input className='product__count stepper-input' type='number' value={props.value} onChange = {props.handleChange}/> 
                <div className='stepper-arrow_wrapper'>
                    <span className='stepper-arrow up' onClick = {props.handleUp}/>
                    <span className='stepper-arrow down' onClick ={props.handleDown}></span>
                </div>
            </div>
            <div className='btn btn_cart'  data-product-id = {props.productInfo.productId}>
                <svg className='ic ic_cart'>
                    <svg id="cart">
                        <path d="m14.571 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
                        <path d="m7.905 16.381c.571 0 .952.381.952.952 0 .571-.381.952-.952.952-.571 0-.952-.381-.952-.952 0-.571.476-.952.952-.952m0-.952c-1.048 0-1.905.857-1.905 1.905 0 1.048.857 1.905 1.905 1.905 1.048 0 1.905-.857 1.905-1.905 0-1.048-.857-1.905-1.905-1.905"></path>
                        <path d="m16.476 14.476h-10.857l-.095-.381c0-.095-1.429-9.714-1.905-11.524-.381-1.524-3.333-1.429-3.333-1.429v-.952c.095 0 3.714-.286 4.286 2.19.381 1.714 1.619 9.333 1.81 11.143h10.1v.952"></path>
                        <path d="m4.095 3.048h15.238v.952h-15.238z"></path>
                        <path d="m5.05 10.667h12.381v.952h-12.381z"></path>
                        <path d="m16.476 11.619h.952l1.905-8.571h-.952l-1.905 8.571"></path>
                    </svg>
                </svg>
                <span className='ng-binding'>в корзину</span>
            </div>
        </div>
    )
}

export default ProductToCart