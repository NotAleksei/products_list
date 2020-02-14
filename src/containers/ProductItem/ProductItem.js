import React from 'react';
import './ProductItem.css';
import ProductPhoto from '../../components/ProductPhoto/ProductPhoto'
import ProductCodeInfo from '../../components/ProductCodeInfo/ProductCodeInfo'
import MainInfo from '../../components/MainInfo/MainInfo'



class ProductItem extends React.Component {
  

  render(){
    return (
        <div className="product_item">
          <ProductPhoto url = {this.props.product.primaryImageUrl}/>
          <ProductCodeInfo productInfo = {this.props.product}/>
          <MainInfo productInfo = {this.props.product}/>
        </div>
    );
  }

}

export default ProductItem;
