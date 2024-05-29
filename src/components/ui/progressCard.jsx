import React from 'react'

export default function ProgressCard() {
    return (
        <div className='bg-white rounded-custom p-[30px] shadow-custom'>
            <p className='font-bold text-xl leading-custom-4'>Sessions By Device</p>
            <table className='w-full mt-[25px]'>
                <thead className='text-left'>
                    <tr>
                        <th>Channel</th>
                        <th>Traffic (%)</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody className='font-medium text-sm text-custom-gray font-leading-custom-1'>
                    <tr className='mb-[31px]'>
                        <td>Direct</td>
                        <td>
                            <div className="w-[234px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-custom-blue h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </td>
                        <td>23.28%</td>
                    </tr>
                    <tr className='mb-[31px]'>
                        <td>Direct</td>
                        <td>
                            <div className="w-[234px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-custom-green h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </td>
                        <td>23.28%</td>
                    </tr>
                    <tr className='mb-[31px]'>
                        <td>Direct</td>
                        <td>
                            <div className="w-[234px] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-custom-yellow h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </td>
                        <td>23.28%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
