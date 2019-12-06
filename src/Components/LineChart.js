import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import getPointsEuler from '../Utils/Euler';
import SpeedChartOptions from './SpeedChartOptions';

const landing = (time, speed) => {
    if (time <= 25)
        return (9.8 * 130 - 0.25 * Math.pow(speed, 2)) / 130;
    return (9.8 * 130 - 10 * Math.pow(speed, 2)) / 130;
}

const LineChart = () => {
    const [series, setSeries] = useState([{ data: [0, 0] }]);

    useEffect(() => {
        const newData = getPointsEuler(landing, 0, 0, 50, 0.05);
        setSeries([{ data: newData }]);
    }, []);

    return (
        <>
            <div className="chart">
                <Chart options={SpeedChartOptions} series={series} type="area" width="100%" />
            </div>
        </>
    );
}

export default LineChart;