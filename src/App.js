import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import React, {Component} from "react";
import Squad from './Components/Squad'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, RadialChart} from 'react-vis';
import PieChart from './Components/RadialChart';

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

    const pieData = [
      { angle: 1, label: 'First section', color: 25 },
      { angle: 5, label: 'Second section', color: 100 },
      { angle: 2, label: 'Third section', color: 200 }]
    
    return (
      <div className="App">
      <Squad/>
        <XYPlot height={300} width={300}>
          <LineSeries data={data} />
        </XYPlot>
        <RadialChart
          data={pieData}
          width={300}
          height={300} />
          <PieChart width={300} height={300}/>
  
        <Data/>
      </div>
    );
  }
}


export default App;
