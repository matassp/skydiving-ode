import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import getPointsEuler from '../Utils/Euler';

const defaultOptions = {
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    legend: {
        horizontalAlign: 'left'
    },
    tooltip: {
        enabled: true
    },
    xaxis: {
        labels: {
            formatter: function (value) {
                return Math.round(value * 100) / 100;
            }
        },
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return Math.round(value * 100) / 100;
            }
        }
    },
    theme: {
        mode: 'dark',
    }
};

const landing = (time, speed) => {
    if (time <= 25)
        return (9.8 * 130 - 0.25 * Math.pow(speed, 2)) / 130;
    return (9.8 * 130 - 10 * Math.pow(speed, 2)) / 130;
}

const LineChart = ({ func }) => {
    const [series, setSeries] = useState([[0, 0]]);

    useEffect(() => {
        const newData = getPointsEuler(landing, 0, 0, 100, 0.05);
        setSeries([{ data: newData }]);
    }, []);

    return (
        <>
            <div className="chart">
                <Chart options={defaultOptions} series={series} type="area" width="80%" />
            </div>
        </>
    );
}

export default LineChart;