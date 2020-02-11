import React from 'react';
import './App.css';
import ProductItem from './containers/ProductItem/ProductItem'



class App extends React.Component {
  
  state = {
    products: null,
  }

  componentDidMount() {
    fetch('http://localhost:3000/products.json')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }


  
  render(){
    let product = this.state.products ? this.state.products.map((item) => {
      return <ProductItem 
        key = {this.state.products.productId}
        product = {item}
      />
    }) : null
    return (
        <div className="App">
          {product}
        </div>
    );
  }

}

export default App;
