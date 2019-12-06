import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import LineChart from './Components/LineChart';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Parachuting diff. equation</h1>
        </header>
        <div className="content">
          <p>A parachuter weighing <i>120</i> is jumping from a plane at 2500 meters. 25 seconds in, he deploys his parachute.
          When and at what speed does he reach the ground? How high was the parachuter when he deployed his parachute?</p>
        </div>
        <LineChart />
      </div>
    </ThemeProvider>
  );
}

export default App;
