import React from 'react'

export default function ViewCard() {
  return (
    <div className='bg-white rounded-custom shadow-custom py-[46px] px-[30px]'>
    <div className="flex items-center justify-between">
        <div className="flex flex-col">
            <p className='font-bold text-xl leading-custom-4'>Sessions By Device</p>
            <p className='font-medium text-custom-size leading-custom-3 mt-[10px]'>Top Region & session</p>
        </div>
        <div className="flex">
            <button className='rounded-custom pt-[15px] pb-[14px] pl-[47px] pr-[48px] text-white bg-custom-blue'>View</button>
        </div>
    </div>
    </div>
  )
}
