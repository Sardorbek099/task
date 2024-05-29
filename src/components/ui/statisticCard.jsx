import React from 'react';

export default function StatisticCard({ icon, title, desc, percent, bg_color }) {

    return (
        <div className='rounded-custom shadow-custom py-[20px] pl-[20px] w-[140px] bg-white'>
            <div style={{ backgroundColor: bg_color }} className={`p-[18px] w-[50px] rounded-custom`}>
                <img src={icon} alt={title} />
            </div>
            <div className="flex flex-col gap-[10px] mt-[30px]">
                <p className='text-custom-gray font-bold text-sm leading-custom-1'>{title}</p>
                <p className='text-custom-purple font-medium text-2xl leading-custom-1'>{desc}</p>
                <p className='text-custom-gray font-medium text-sm leading-custom-1'>{percent}%</p>
            </div>
        </div>
    );
}
