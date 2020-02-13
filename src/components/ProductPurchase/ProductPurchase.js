import React from 'react'
import './ProductPurchase.css';
import ProductToCart from '../ProductToCart/ProductToCart'


class ProductPurchase extends React.Component {
    
    state = {
        value: 1,
    }

    handleChange(event) {
        if( event.target.value != 'e' && event.target.value > 0){
            this.setState({value: event.target.value});
        }
    }

    handleUp() {
        const value = this.state.value + 1
        this.setState({value: value});
    }

    handleDown() {
        if(this.state.value > 1){
            const value = this.state.value - 1
            this.setState({value: value});
        }
    }


    render(){
        const productAltUnit = this.props.productInfo.unit === this.props.productInfo.unitAlt ?
        <p className='product_one-units'>
            Цена за штуку
        </p>:
        <div className='list--unit-desc'>
            <div className='unit--info'>
                <div className='unit--desc-i'></div>
                <div className='unit--desc-t'>
                    <p>
                        <span className='ng-binding'> Продается {this.props.productInfo.unitFull === "упаковка" ? 'упаковками' : this.props.productInfo.unitFull === "штука" ? 'штуками' : 'метрами погонными'}:</span>
                        <br/>
                        <span className='unit--infoInn'> {+this.props.productInfo.unitRatio * this.state.value} {this.props.productInfo.unit} = {+this.props.productInfo.unitRatioAlt.toFixed(2)* this.state.value} {this.props.productInfo.unitAlt}</span>
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
                    value={this.state.value}
                />
            </div>
        )
        }
   } 

export default ProductPurchase