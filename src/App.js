// import './App.css';
import { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';
import Parent1 from './Parent1/Parent1';

class App extends Component {
  state = {}

  render() {
    return <div>
    <h1>App Component</h1>
    <Home/>
    <Parent1/>
    <About/>
    </div>
  }
}

export default App;
