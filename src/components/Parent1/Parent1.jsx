import React, { Component } from 'react';
import Child from '../Child/Child';

export default class Parent1 extends Component {
  state = {
    products: [{
      id: 123,
      name: 'Samsung',
      price: 2000,
      count: 12,
      category: 'mobile',
      isSale: true,
    }, {
      id: 133,
      name: 'Nokia',
      price: 1500,
      count: 12,
      category: 'mobile',
      isSale: false,
    }, {
      id: 144,
      name: 'iPhone',
      price: 15000,
      count: 12,
      category: 'mobile',
      isSale: true,
    }, {
      id: 155,
      name: 'Realme',
      price: 5000,
      count: 12,
      category: 'mobile',
      isSale: false,
    }, {
      id: 166,
      name: 'OPPO',
      price: 3000,
      count: 12,
      category: 'mobile',
      isSale: true,
    }, {
      id: 175,
      name: 'Techno',
      price: 2500,
      count: 15,
      category: 'mobile',
      isSale: false,
    }, {
      id: 176,
      name: 'Techno',
      price: 2500,
      count: 14,
      category: 'mobile',
      isSale: true,
    }, {
      id: 177,
      name: 'Techno',
      price: 2500,
      count: 13,
      category: 'mobile',
      isSale: false,
    },]
  }
  deleteProduct = (deleteId) => {
    // علشان اعمل اي حاجه في ال state 
    // Deep Copy
    let myProducts = [...this.state.products];
    // Delete
    myProducts = myProducts.filter((product) => product.id !== deleteId);
    // setState
    this.setState({ products: myProducts });
  }

  updateProduct = (index, step) => {
    // علشان اعمل اي حاجه في ال state 
    // Deep Copy
    let myProducts = [...this.state.products];
    // Update
    myProducts[index].count += step;
    // setState
    this.setState({ products: myProducts });
  }

  render() {
    return <>
      <div className="container">
        <div className="row bg-dark p-2 gy-3">
          {this.state.products.map((product, index) => <Child key={index} i={index} productDetails={product} delete={this.deleteProduct} update={this.updateProduct} />)}
        </div>
      </div>
    </>
  }
}
