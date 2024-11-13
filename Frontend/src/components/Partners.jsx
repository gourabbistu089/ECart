import React from 'react'
import brand1 from '../assets/brand/br-1.png'
import brand2 from '../assets/brand/br-2.png'
import brand3 from '../assets/brand/br-3.png'
import brand4 from '../assets/brand/br-4.png'
import brand5 from '../assets/brand/br-5.png'
function Partners() {
  return (
    <div className=' py-8 mt-10 hidden md:block bg-gray-200
     dark:bg-white/10'>
        <div className=' container'>
            <div className="grid  lg:grid-cols-5 gap-4 place-items-center opacity-50 ">
           
                <img src={brand1} alt=""  className=' w-[80px]'/>
                <img src={brand2} alt="" className=' w-[80px]' />
                <img src={brand3} alt="" className=' w-[80px]' />
                <img src={brand4} alt="" className=' w-[80px]' />
                <img src={brand5} alt="" className=' w-[80px]' />
                

            </div>

        </div>
    </div>
  )
}

export default Partners