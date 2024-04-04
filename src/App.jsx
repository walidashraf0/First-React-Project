// import './App.css';
import { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Parent1 from './components/Parent1/Parent1';
import Contacts from './components/Contacts/Contacts';
import Product from './components/Product/Product';

class App extends Component {
  state = {}

  render() {
    return <div>
      {/* <h1>App Component</h1> */}
      {/* <Home /> */}
      {/* <Parent1 /> */}
      <About />
      {/* <Contacts /> */}
      <Product />
    </div>
  }
}

export default App;
