import React, { useState } from 'react'

export default function Sidebar() {
  const[path,setPath] = useState('home')
  const icons = [
    {
      path:'../sidebar/icon1.svg',
      alt:'home',
    },
    {
      path:'../sidebar/icon2.svg',
      alt:'about_us',
    },
    {
      path:'../sidebar/icon3.svg',
      alt:'projects',
    },
    {
      path:'../sidebar/icon4.svg',
      alt:'contact',
    },
    {
      path:'../sidebar/icon5.svg',
      alt:'email',
    },
    {
      path:'../sidebar/icon6.svg',
      alt:'portfolio',
    },
    {
      path:'../sidebar/icon7.svg',
      alt:'shopping',
    },
    {
      path:'../sidebar/icon8.svg',
      alt:'about_uss',
    },
    {
      path:'../sidebar/icon9.svg',
      alt:'smm',
    },
    {
      path:'../sidebar/icon10.svg',
      alt:'target',
    },
    {
      path:'../sidebar/icon11.svg',
      alt:'calendar',
    }
  ]
  return (
    <div className='bg-white w-[102px] h-[948px]'>
      <div className="flex flex-col pb-[49px]">
        <div className="mt-[44px] mx-[40px] mb-[50px] cursor-pointer">
          <img src="../sidebar/icon.svg" alt="menu" />
        </div>
        <div className="flex flex-col items-center justify-center gap-[28px]">
          {
            icons.map((icon,index) =>{
              return(
                <div onClick={() => setPath(icon.alt)} key={index} className={`w-[66px] flex items-center justify-center px-[25px] py-[16px] rounded-[15px] ${path===`${icon.alt}` ? 'bg-custom-blue' : ''} cursor-pointer`}>
                <img src={icon.path} alt={icon.alt}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
