import React from 'react'
import DailyCard from '../ui/dailyCard'
import { Input } from '../ui/input'
import StatisticCard from '../ui/statisticCard'
import SessionCard from '../ui/sessionsCard'
import ViewCard from '../ui/viewCard'
import ProgressCard from '../ui/progressCard'
import PerformanceCard from '../ui/performanceCard'

export default function Dashboard() {
    const dails = [
        {
            today: '5,561',
            percent: 60,
            expected: '8,085',
            title: 'USERS',
            bg_color: 'rgba(86, 59, 255, 1)'
        },
        {
            today: '140',
            percent: 60,
            expected: '120',
            title: 'GOALS',
            bg_color: 'rgba(255, 112, 73, 1)'
        }
    ]
    const statistics = [
        {
            icon_path: '../statistics/icon1.svg',
            title: 'Users',
            desc: '72.6k',
            percent: '+25',
            bg_color: 'rgba(53, 117, 255, 0.1)'
        },
        {
            icon_path: '../statistics/icon2.svg',
            title: 'Sessions',
            desc: '87.2k',
            percent: '+47',
            bg_color: 'rgba(243, 102, 67, 0.1)'
        },
        {
            icon_path: '../statistics/icon3.svg',
            title: 'Bounce Rate',
            desc: '26.3%',
            percent: '-28',
            bg_color: 'rgba(69, 36, 248, 0.1)'
        },
        {
            icon_path: '../statistics/icon4.svg',
            title: 'Session Duration',
            desc: '2m 18s',
            percent: '+13',
            bg_color: 'rgba(36, 214, 165, 0.1)'
        }
    ]
    return (
        <div className='block md:flex justify-between p-[30px] bg-custom-white w-full'>
            <div className="left_section w-full md:w-[650px]">
                <Input/>
                <div className="flex justify-between mt-[38px]">
                    <p className='font-bold text-xl text-custom-purple font-leading-custom-4'>Performance</p>
                    <p className='font-bold text-sm text-custom-gray font-leading-custom-1'>Year</p>
                </div>
                <div className="mt-[15px]">
                    <PerformanceCard/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 mt-[30px]">
                    {
                        statistics.map((statistic, index) => {
                            return (
                                <StatisticCard key={index} icon={statistic.icon_path} title={statistic.title} desc={statistic.desc} percent={statistic.percent} bg_color={statistic.bg_color} />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col mt-[39px]">
                    <div className="flex items-center justify-between">
                        <p className='text-custom-purple font-bold text-xl leading-custom-2'>Daily Overview</p>
                        <button className='rounded-custom bg-white py-[13px] px-[45px] font-medium text-sm font-leading-custom-1'>Export</button>
                    </div>
                    <div className="flex justify-between mt-[40px]">
                        {dails.map((dail, index) => {
                            return (
                                <DailyCard key={index} today={dail.today} percent={dail.percent} title={dail.title} bg_color={dail.bg_color} expected={dail.expected} />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="right_section w-full md:w-[514px]">
                        <div className="flex gap-[20px] float-end">
                            <img src="../dashboard/icon1.svg" alt="email" />
                            <img src="../dashboard/icon2.svg" alt="icon" />
                            <img src="../dashboard/icon3.svg" alt="profile" />
                        </div>
                <div className="flex justify-between mt-[85px]">
                    <p className='font-bold text-xl text-custom-purple font-leading-custom-4'>Sessions By Device</p>
                    <p className='font-bold text-sm text-custom-gray font-leading-custom-1'>Year</p>
                </div>
                <div className="mt-[15px]">
                    <SessionCard />
                </div>
                <div className="mt-[30px]">
                    <ProgressCard />
                </div>
                <div className="mt-[28px]">
                    <ViewCard />
                </div>
            </div>


        </div>
    )
}
