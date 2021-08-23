import React from 'react'
import './ProductPurchase.css';
import ProductToCart from '../ProductToCart/ProductToCart'

class ProductPurchase extends React.Component {

    state = {
        countProduct: 1,
    }

    handleChange(event) {
        if (event.target.countProduct !== 'e' && event.target.value > 0) {
            this.setState({countProduct: event.target.value});
        }
    }

    handleUp() {
        this.setState({countProduct: this.state.countProduct + 1});
    }

    handleDown() {
        if (this.state.countProduct > 1) {
            this.setState({countProduct: this.state.countProduct - 1});
        }
    }
    
    render() {
        const productInfo = this.props.productInfo;
        const productAltUnit = productInfo.unit === productInfo.unitAlt
        ? <p className='product_one-units'>
            Цена за штуку
        </p>
        : <div className='list--unit-desc'>
            <div className='unit--info'>
                <div className='unit--desc-i'></div>
                <div className='unit--desc-t'>
                    <p>
                        <span className='ng-binding'>
                            Продается {productInfo.unitFull === "упаковка" ? 'упаковками' : productInfo.unitFull === "штука" ? 'штуками' : 'метрами погонными'}:
                        </span>
                        <br/>
                        <span className='unit--infoInn'>
                            {+productInfo.unitRatio * this.state.countProduct} {productInfo.unit} = {(+productInfo.unitRatioAlt.toFixed(2)* this.state.countProduct).toFixed(2)} {productInfo.unitAlt}
                        </span>
                    </p>
                </div>
            </div>
        </div> 

        return(
            <div className='product_wrapper'>
                {productAltUnit}
                <ProductToCart 
                    handleUp = {()=>this.handleUp()}
                    handleDown = {()=>this.handleDown()}
                    handleChange ={(event)=>this.handleChange(event)} 
                    value={this.state.countProduct}
                    productInfo = {productInfo}
                />
            </div>
        )
        }
   } 

export default ProductPurchase