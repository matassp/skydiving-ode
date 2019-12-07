export default {
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
        enabled: true,
        x: {
            formatter: (x) => Math.round(x * 100) / 100 + ' s'
        },
        y: {
            formatter: (y) => Math.round(y * 100) / 100 + ' m'
        }
    },
    xaxis: {
        title: {
            text: "Time",
            style: {
                cssClass: 'axis-title',
            },
        },
        labels: {
            formatter: function (value) {
                return Math.round(value * 100) / 100;
            }
        },
        tooltip: {
            enabled: false,
        }
    },
    yaxis: {
        title: {
            text: "Height",
            style: {
                cssClass: 'axis-title',
            },
        },
        min: 0,
        labels: {
            formatter: function (value) {
                return Math.round(value * 100) / 100;
            }
        }
    },
    theme: {
        mode: 'dark',
    },
    chart: {
        background: '#282c34',
    },
}