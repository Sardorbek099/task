import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function SessionCard() {
    const [series, setSeries] = useState([55, 67, 83]);
    const [options, setOptions] = useState({
        chart: {
            height: 240,
            type: 'radialBar',
        },
        stroke: {
            lineCap: "round"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    padding: 15,
                    size: "20%"
                },
            }
        },
        labels: ['Desktop', 'Mobile', 'Tablets']
    });

    return (
        <div className='flex bg-white rounded-custom py-[55px] pr-[50px] shadow-custom'>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="radialBar" height={200} />
            </div>
            <div className="flex flex-col gap-[21px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-sm font-leading-custom-1 text-custom-gray">Desktop</p>
                    <div className="flex items-center gap-[5px]">
                        <p className='font-medium text-lg font-leading-[21.09px] text-custom-purple'>8,085</p>
                        <p className='font-medium text-custom-size font-leading-[15.23px] text-custom-gray'>13%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-sm font-leading-custom-1 text-custom-gray">Mobile</p>
                    <div className="flex items-center gap-[5px]">
                        <p className='font-medium text-lg font-leading-[21.09px] text-custom-purple'>8,085</p>
                        <p className='font-medium text-custom-size font-leading-[15.23px] text-custom-gray'>13%</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <p className="font-bold text-sm font-leading-custom-1 text-custom-gray">Tablets</p>
                    <div className="flex items-center gap-[5px]">
                        <p className='font-medium text-lg font-leading-[21.09px] text-custom-purple'>8,085</p>
                        <p className='font-medium text-custom-size font-leading-[15.23px] text-custom-gray'>13%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
