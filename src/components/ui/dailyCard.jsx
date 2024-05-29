import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function DailyCard({ today, percent, expected, title, bg_color }) {
  const rgbaColor = bg_color.replace(/, \d+(\.\d+)?\)/, ', 0.1)');
  const [options, setOptions] = useState({
    chart: {
      height: 150,
      type: 'radialBar',
    },
    stroke: {
      lineCap: "round"
    },
    colors:[bg_color],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "50%",
          background: `${rgbaColor}`
        },
        dataLabels: {
          name: {
            // offsetY: -10,
            color: `${bg_color}`,
            fontSize: "10px",
            fontWeight: '500',
            lineHeight: '11.72px'
          },
          value: {
            color: "#fff",
            fontSize: "10px",
            show: false
          }
        }
      }
    },
    labels: [`${title}`]
  });

  return (
    <div className='rounded-custom bg-white shadow-custom grid grid-cols-3 w-[310px] py-[23px] px-[20px]'>
      <div className="flex flex-col">
        <p className='font-medium text-2xl leading-custom-2 text-custom-purple'>{today}</p>
        <p className='text-custom-gray font-bold text-sm leading-custom-1 mt-[10px]'>Today</p>
      </div>
      <div className="flex">
        <ReactApexChart options={options} series={[percent]} type="radialBar" height={150} />
      </div>
      <div className="flex flex-col">
        <p className='font-medium text-2xl leading-custom-2 text-custom-purple'>{expected}</p>
        <p className='text-custom-gray font-bold text-sm leading-custom-1 mt-[10px]'>Expected</p>
      </div>
    </div>
  )
}
