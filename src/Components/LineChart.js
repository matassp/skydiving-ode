import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ options, series }) => {
    return (
        <>
            <div className="chart">
                <Chart options={options} series={series} type="line" width="100%" />
            </div>
        </>
    );
}

export default LineChart;