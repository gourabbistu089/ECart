import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Banner({bannerData}) {
  return (
    <div className=' min-h-[500px] flex justify-center items-center py-12 '>
        <div
        className=' container'>
            <div
            data-aos='zoom-in-down'
            data-aos-duration='1000'
            data-aos-once='true'
            style={{ backgroundColor: bannerData.bgcolor }}
            
            className=' grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-white rounded-3xl '>
                {/* first col */}
                <div
                data-aos='fade-right'
                data-aos-duration='500'
                data-aos-once='true'
                className=' p-6 sm:p-8 '>
                    <p className=' text-sm'>{bannerData.discount}</p>
                    <h1 className=' uppercase text-4xl lg:text-7xl font-bold'>{bannerData.title}</h1>
                    <p>{bannerData.date}</p>
                </div>
                {/* second col */}
                <div
                data-aos='zoom-in'
                data-aos-duration='1000'
                data-aos-once='true'
                className=' h-full flex items-center '>
                    <img src={bannerData.image} alt="" className=' scale-125 w-[250px] md:w-[340px] drop-shadow-2xl  object-cover mx-auto ' />
                </div>
                {/* third col */}
                <div
                data-aos='fade-left'
                data-aos-duration='500'
                data-aos-once='true'
                className=' flex flex-col justify-center sm:p-8 gap-4 p-6 '>
                    <p className=' font-bold text-xl '>{bannerData.title1}</p>
                    <p className=' text-3xl sm:text-5xl font-bold'>{bannerData.title2}</p>
                    <p className=' text-sm tracking-wide leading-5'>{bannerData.title4}</p>
                    <div>
                        <button 
                        style={{color:bannerData.bgcolor}}
                        className=' bg-white font-semibold  px-4 py-2 rounded-lg  hover:scale-105 transition-all duration-300 '>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
