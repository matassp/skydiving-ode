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
            formatter: (y) => Math.round(y * 100) / 100 + ' m/s'
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
            text: "Velocity",
            style: {
                cssClass: 'axis-title',
            },
        },
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
        id: 'pirmas',
        background: '#282c34',
        zoom: {
            enabled: false,
        }
    },
}