import React, { Component } from 'react'

export default class Child extends Component {
    state = {}
    render() {
        // console.log(this.props);
        let {id, name, price, count, category, isSale} = this.props.productDetails;
        return <>
            <div className="col-md-3 bg-white position-relative">
                <h4>Id: {id}</h4>
                <h4>Product Name: {name}</h4>
                <h4>Category: {category}</h4>
                <h4>Price: {price}</h4>
                <h4>Count: {count}</h4>
                {isSale? <div className='bg-danger text-white p-1 position-absolute top-0 end-0'>Sale</div>:''}
                <button  onClick={()=>this.props.delete(id)} className='btn btn-danger w-100 btn-sm'>Delete</button>
                <button  onClick={()=>this.props.update(this.props.i, 1)} className='btn btn-info my-2 w-100 btn-sm'>+</button>
                <button  onClick={()=>this.props.update(this.props.i, -1)} className='btn btn-outline-info w-100 btn-sm'>-</button>
            </div>
        </>
    }
}

