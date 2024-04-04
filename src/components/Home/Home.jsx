import { Component } from "react";

class Home extends Component {
  state = {
    productName: 'samsung',
  }
  welcome() {
    return 'welcome back!'
  }

  // Binding
  render() {
    return <>
      <h1 className="text-center bg-info mb-5">
        <i className="fas fa-home"></i>
        Home Component</h1>

      {/* <h2>Product Name: {this.state.productName}</h2> */}
      {/* <h2>{this.welcome()}</h2> */}
    </>

  }

}

export default Home;