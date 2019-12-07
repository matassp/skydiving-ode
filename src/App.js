import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

import LineChart from './Components/LineChart';
import VelocityChartOptions from './Components/VelocityChartOptions';
import HeightChartOptions from './Components/HeightChartOptions';
import { euler, eulerHeight } from './Utils/Euler';
import { rungeKutta, rungeKuttaHeight } from './Utils/RungeKutta';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const freefall = (time, speed) => {
  if (time < 25)
    return (9.8 * 130 - 0.25 * Math.pow(speed, 2)) / 130;
  return (9.8 * 130 - 10 * Math.pow(speed, 2)) / 130;
}

const eulerVelocitySeries = [{ name: "Step 0.05", data: euler(freefall, 0, 0, 130, 0.05) },
{ name: "Step 0.15", data: euler(freefall, 0, 0, 130, 0.15) },
{ name: "Step 0.2", data: euler(freefall, 0, 0, 130, 0.2) }];

const landing = (time, speed, step) => {
  return freefall(time, speed);
}

const eulerHeightSeries = [{ name: "Step 0.05", data: eulerHeight(landing, 0, 0, 2500, 130, 0.05) },
{ name: "Step 0.15", data: eulerHeight(landing, 0, 0, 2500, 130, 0.15) },
{ name: "Step 0.2", data: eulerHeight(landing, 0, 0, 2500, 130, 0.2) }];

const rungeKuttaVelocitySeries = [{ name: "Step 0.05", data: rungeKutta(freefall, 0, 0, 130, 0.1) }];
const rungeKuttaHeightSeries = [{ name: "Step 0.05", data: rungeKuttaHeight(landing, 0, 0, 2500, 130, 0.1) }];

function indexOfClosest(nums, target) {
  let closest = Number.MAX_SAFE_INTEGER;
  let index = 0;

  nums.forEach((num, i) => {
    let dist = Math.abs(target - num);

    if (dist < closest) {
      index = i;
      closest = dist;
    }
  });
  return index;
}

const indexOfDeploymentTimeEuler = indexOfClosest(eulerHeightSeries[0].data.map(i => i[0]), 25);
const indexOfLandingEuler = indexOfClosest(eulerHeightSeries[0].data.map(i => i[1]), 0);
const landingTimeEuler = eulerVelocitySeries[0].data[indexOfLandingEuler][0];
const landingVelocityEuler = eulerVelocitySeries[0].data[indexOfLandingEuler][1];
const deploymentHeightEuler = eulerHeightSeries[0].data[indexOfDeploymentTimeEuler][1];

const indexOfDeploymentTime = indexOfClosest(rungeKuttaHeightSeries[0].data.map(i => i[0]), 25);
const indexOfLanding = indexOfClosest(rungeKuttaHeightSeries[0].data.map(i => i[1]), 0);
const landingTime = rungeKuttaHeightSeries[0].data[indexOfLanding][0];
const landingVelocity = rungeKuttaVelocitySeries[0].data[indexOfLanding][1];
const deploymentHeight = rungeKuttaHeightSeries[0].data[indexOfDeploymentTime][1];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Skydiving</h1>
            <h4>Solving ordinary differential equation using numerical methods</h4>
          </header>
          <div className="content">
            <p>A skydiver weighing 120 jumps from a plane at 2500 meters. 25 seconds in, he deploys his parachute.
              When and at what velocity does he reach the ground? How high was the skydiver when he deployed his parachute?</p>
            <div className="menu">
              <NavLink exact to="/" activeStyle={{
                color: "rgba(78, 205, 196, 0.85)"
              }}>
                <h3>Euler</h3>
              </NavLink>
              <NavLink to="/runge-kutta" activeStyle={{
                color: "rgba(78, 205, 196, 0.85)"
              }}>
                <h3>Runge – Kutta</h3>
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <h5 className="title">Velocity</h5>
              <LineChart options={VelocityChartOptions} series={eulerVelocitySeries} />
              <h5 className="title">Height</h5>
              <LineChart options={HeightChartOptions} series={eulerHeightSeries} />
              <h3>Answers</h3>
              <ul>
                <li>Landing time: <b>{Math.round(landingTimeEuler * 100) / 100}s</b></li>
                <li>Landing velocity: <b>{Math.round(landingVelocityEuler * 100) / 100}m/s</b> </li>
                <li>Parachute deployed at: <b>{Math.round(deploymentHeightEuler * 100) / 100}m</b></li>
              </ul>
            </Route>
            <Route exact path="/runge-kutta">
              <h5 className="title">Velocity</h5>
              <LineChart options={VelocityChartOptions} series={rungeKuttaVelocitySeries} />
              <h5 className="title">Height</h5>
              <LineChart options={HeightChartOptions} series={rungeKuttaHeightSeries} />
              <h3>Answers</h3>
              <ul>
                <li>Landing time: <b>{Math.round(landingTime * 100) / 100}s</b></li>
                <li>Landing velocity: <b>{Math.round(landingVelocity * 100) / 100}m/s</b> </li>
                <li>Parachute deployed at: <b>{Math.round(deploymentHeight * 100) / 100}m</b></li>
              </ul>
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider >
  );
}

export default App;
