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
        zoom: {
            enabled: false,
        }
    },
    annotations: {
        xaxis: [{
            x: 25,
            strokeDashArray: 5,
        }, {
            x: 118.79999999999752,
            strokeDashArray: 5,
        }],
        points: [{
            x: 25,
            y: 1072.3173778797357,
            seriesIndex: 0,
            marker: {
                size: 6,
                radius: 2,
            },
            label: {
                text: 'Parachute deployed',
                borderColor: 'transparent',
                style: {
                    cssClass: 'axis-annotation',
                    background: 'transparent',
                }
            }
        }, {
            x: 118.79999999999752,
            y: 0,
            seriesIndex: 0,
            marker: {
                size: 6,
                radius: 2,
            },
            label: {
                text: 'Landing',
                borderColor: 'transparent',
                style: {
                    cssClass: 'axis-annotation',
                    background: 'transparent',
                }
            }
        }]
    }
}