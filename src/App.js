import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import LineChart from './Components/LineChart';
import SpeedChartOptions from './Components/VelocityChartOptions';
import HeightChartOptions from './Components/HeightChartOptions';
import { getPointsEuler, euler2 } from './Utils/Euler';

const freefall = (time, speed) => {
  if (time <= 25)
    return (9.8 * 130 - 0.25 * Math.pow(speed, 2)) / 130;
  return (9.8 * 130 - 10 * Math.pow(speed, 2)) / 130;
}

const series = [{ name: "Step 0.05", data: getPointsEuler(freefall, 0, 0, 120, 0.05) },
{ name: "Step 0.15", data: getPointsEuler(freefall, 0, 0, 120, 0.15) },
{ name: "Step 0.2", data: getPointsEuler(freefall, 0, 0, 120, 0.2) }];

const landing = (time, speed, step) => {
  return freefall(time, speed);
}

const series2 = [{ name: "Step 0.05", data: euler2(landing, 0, 0, 2500, 120, 0.05) },
{ name: "Step 0.15", data: euler2(landing, 0, 0, 2500, 120, 0.15) },
{ name: "Step 0.2", data: euler2(landing, 0, 0, 2500, 120, 0.2) }];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Skydiving diff. equation</h1>
        </header>
        <div className="content">
          <p>A skydiver weighing 120 jumps from a plane at 2500 meters. 25 seconds in, he deploys his parachute.
          When and at what speed does he reach the ground? How high was the skydiver when he deployed his parachute?</p>
        </div>
        <h3>Velocity</h3>
        <LineChart options={SpeedChartOptions} series={series} />
        <h3>Height</h3>
        <LineChart options={HeightChartOptions} series={series2} />
      </div>
    </ThemeProvider>
  );
}

export default App;
