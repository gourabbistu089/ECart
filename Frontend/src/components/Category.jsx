import React from 'react'
import image1 from '../assets/category/earphone.png'
import image2 from '../assets/category/gaming.png'
import image3 from '../assets/category/macbook.png'
import image4 from '../assets/category/smartwatch.png'
import image5 from '../assets/category/speaker.png'
import image6 from '../assets/category/vr.png'
import image7 from '../assets/category/watch.png'
import Button from './Button'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Category() {
  return (
   <div>
     
     <div className='py-8  '>
        <div className='container'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

                {/* firstcol */}

                <div className=' py-10 pl-5 bg-gradient-to-br from-black/90 to-gray-900/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className=' mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-20 mb-2 '>Earphone</p>
                            <Button 
                            bgcolor={"bg-primary"}
                            color={"text-white"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image1} alt="" className='w-full h-full object-cover rounded-3xl absolute top-0 left-0 z-10'/>
                </div>
                {/* secondclm */}
                
                <div className=' py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className=' mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-70 mb-2 '>Smart Watch</p>
                            <Button 
                            bgcolor={"bg-white"}
                            color={"text-brandYellow"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image7} alt="" className='w-[320px] rounded-3xl absolute -right-10 lg:top-[10px] z-10'/>
                </div>
                {/* third */}
                <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-70 mb-2 '>Laptop</p>
                            <Button 
                            className=''
                            bgcolor={"bg-white"}
                            color={"text-primary"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image3} alt="" className='w-[320px] rounded-3xl absolute -right-5 lg:top-[10px] z-10'/>
                </div>
                {/* fourth */}
            
            </div>

        </div>
    </div>

    {/*  **************************************          */}
     
    <div className='py-8  '>
        <div className='container'>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">

                {/* firstcol */}

                <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-200/70 text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className=' mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-20 mb-2 '>Gaming</p>
                            <Button 
                            bgcolor={"bg-primary"}
                            color={"text-white"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image2} alt="" className='w-[320px] object-cover rounded-3xl absolute top-0 right-0 z-10'/>
                </div>
                {/* secondclm */}
                
                <div className=' py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className=' mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-70 mb-2 '>
                                Visual
                            </p>
                            <Button 
                            bgcolor={"bg-white"}
                            color={"text-brandGreen"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image6} alt="" className='w-[220px] rounded-3xl absolute right-0 lg:bottom-[0] z-10'/>
                </div>
                {/* third */}
                <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue text-white rounded-3xl relative h-[320px] flex items-end '>
                    <div>
                        <div className='mb-4 '>
                            <p className=' mb-[2px]  text-gray-400 '>Enjoy</p>
                            <p className=' text-2xl font-semibold mb-[2px]'>With</p>
                            <p className=' text-4xl xl:text-5xl font-bold opacity-70 mb-2 '>Speaker</p>
                            <Button 
                            className=''
                            bgcolor={"bg-white"}
                            color={"text-primary"}
                            text='Shop Now'/>
                        </div>
                    </div>
                    <img src={image5} alt="" className='w-[240px] rounded-3xl absolute -right-4 lg:bottom-[10px] z-10'/>
                </div>
                {/* fourth */}
            
            </div>

        </div>
    </div>
   </div>
  )
}

export default Category
