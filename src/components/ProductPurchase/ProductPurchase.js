import React from 'react'
import './ProductPurchase.css';


const ProductPurchase = props => {
    const productAltUnit = props.productInfo.unit === props.productInfo.unitAlt ?
        <p className='product_units'>
            Цена за штуку
        </p>:
        <div className='list--unit-desc'>
            <div className='unit--info'>
                <div className='unit--desc-i'></div>
                <div className='unit--desc-t'>
                    <p>
                        <span className='ng-binding'> Продается упаковками:</span>
                        <br/>
                        <span className='unit--infoInn'> {props.productInfo.unitRatio} {props.productInfo.unit} = {props.productInfo.unitRatioAlt.toFixed(2)} {props.productInfo.unitAlt}</span>
                    </p>
                </div>
            </div>
        </div> 

    return(
        <div className='product_wrapper'>
            {productAltUnit}
            <div className='product_count_wrapper'>
                <div className='stepper'>
                    <input className='product__count stepper-input' type='number' value='1'></input>
                    <span className='stepper-arrow up'></span>
                    <span className='stepper-arrow down'></span>
                </div>
                <div className='btn btn_cart'>
                    <svg className='ic ic_cart'></svg>
                    <span className='ng-binding'>В корзину</span>
                </div>
            </div>
        </div>
    )
}

export default ProductPurchase