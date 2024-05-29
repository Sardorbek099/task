import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function PerformanceCard() {
    const options = {
        series: [{
            data: [28, 29, 33, 36, 32, 32, 33]
        }],
        options: {
            chart: {
                type: 'line',
                stacked: false,
                height: 350,
                enabled: false,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            stroke: {
                curve: 'smooth'
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            title: {
                enabled: false
            },
            grid: {
                enabled: false,
                row: {
                    enabled: false,
                    opacity: 0
                }
            },
            yaxis: {
                enabled: true,
            },
            xaxis: {
                title: {
                    enabled: false
                },
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0)
                    }
                }
            }
        },
    };
    return (
        <div className='bg-white pl-28px pr-[27px] shadow-custom'>
            <ReactApexChart options={options.options} series={options.series} type='line' height={300} />
        </div>
    )
}
