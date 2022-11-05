import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import React, {Component} from "react";
import Squad from './Components/Squad'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import Header from './Components/Experiment/Header';

class App extends Component {
  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div className="App">
        
      <Header/>
      <Squad/>
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
  
        <Data/>
      </div>
    );
  }
}


export default App;
