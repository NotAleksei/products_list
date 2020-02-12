import React from 'react'
import './ProductPrice.css';


const ProductPrice = props => {

    return(
        <div className='product_price'>
            <div className='product-gold-price-block'>
                <span className='product-gold-price-text'>По карте<br/>клуба</span>
                <div>
                <span className='goldPrice'>{props.productInfo.priceGold}</span>
                <span className='rouble__i'>
                <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                    <svg id='rouble_black'>
                        <path fill="#010101" d="M44.431,6.112c-1.719-2.395-4.211-4.125-7.055-4.899c-3.884-0.647-7.824-0.894-11.759-0.735H9.743v22.194H3.031v8.329h6.712v4.556H3.031v8.329h6.712v5.683h9.799v-5.634h14.698v-8.329H19.542v-4.507h6.467c3.427,0.083,6.854-0.147,10.24-0.686c1.764-0.451,3.427-1.232,4.899-2.303c1.763-1.273,3.192-2.954,4.165-4.899c1.155-2.36,1.711-4.968,1.617-7.594C47.17,12.259,46.291,8.917,44.431,6.112z M35.955,19.585c-0.757,1.1-1.835,1.938-3.087,2.401c-2.557,0.664-5.201,0.928-7.839,0.784h-5.487V8.855h4.899c2.373-0.064,4.748,0.051,7.104,0.343c1.528,0.25,2.927,1.01,3.969,2.156c1.068,1.215,1.629,2.793,1.568,4.409C37.112,17.123,36.718,18.459,35.955,19.585L35.955,19.585z"></path>
                    </svg>
                </svg>
                </span>
                </div>
                
            </div>
            <div className='product-price-block'>
                <span className='retailPrice'>{props.productInfo.priceRetail}</span>
                <span className='rouble__i'>
                    <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50">
                        <svg id='rouble_g'>
                        <path fill="#a7a7a7 " d="M28.109,29.658c5.173,0.578,10.357-0.979,14.355-4.312c4.172-4.748,5.151-11.509,2.499-17.246c-0.847-1.953-2.2-3.644-3.92-4.899c-1.813-1.204-3.872-1.991-6.026-2.303c-2.464-0.37-4.955-0.534-7.447-0.49H9.05v23.272H3.562v5.781H9.05v5.977H3.562v5.781H9.05v8.378h6.467v-8.133h20.088v-5.781H15.517v-6.026H28.06H28.109z M15.566,6.386h12.543c2.019-0.074,4.04,0.074,6.026,0.441c1.673,0.442,3.132,1.467,4.116,2.891c1.062,1.539,1.611,3.373,1.568,5.242c0.138,2.473-0.832,4.879-2.646,6.565c-2.601,1.812-5.76,2.645-8.917,2.352H15.517V6.386H15.566z"></path>
                        </svg>
                    </svg>
                </span>
            </div>
            <div className='product-points-price-block'>
                <span className="ng-binding">можно купить за {props.productInfo.bonusAmount} балла</span>
            </div>
           { props.productInfo.unit === props.productInfo.unitAlt ? null :
            <div className='product_units'>
                <div className='unit--select unit--active'>
                    <p className='ng-binding'>За м.кв.</p>
                </div>
                <div className='unit--select'>
                    <p className='ng-binding'>За упаковку</p>
                </div>
            </div>}
        </div>
    )
}

export default ProductPrice