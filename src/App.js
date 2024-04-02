// import './App.css';
import { Component } from 'react';
import Home from './Home';
import About from './About';

class App extends Component {
  state = {}

  render() {
    return <div>
    <h1>App Component</h1>
    <Home/>
    <About/>
    </div>
  }
}

export default App;
