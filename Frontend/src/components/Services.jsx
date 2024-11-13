import React from 'react'
// Import icons from React Icons library
import { FaShippingFast, FaHeadset, FaSync, FaShieldAlt, FaMoneyCheckAlt } from 'react-icons/fa';

const serviceData = [
  {
    id: 1,
    icon: <FaShippingFast className=' text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    description: 'Free Shipping on All Orders'
  },
  {
    id: 2,
    icon: <FaHeadset className=' text-4xl md:text-5xl text-primary' />,
    title: '24/7 Support',
    description: 'Customer Support Available 24/7'
  },
  {
    id: 3,
    icon: <FaSync className=' text-4xl md:text-5xl text-primary' />,
    title: 'Easy Returns',
    description: '30-Day Money-Back Guarantee'
  },
  {
    id: 4,
    icon: <FaShieldAlt className=' text-4xl md:text-5xl text-primary' />,
    title: 'Secure Payment',
    description: '100% Secure Payment Protection'
  },
//   {
//     id: 5,
//     icon: <FaMoneyCheckAlt />,
//     title: 'Best Deals',
//     description: 'Best Deals on All Products'
//   },
//   {
//     id: 6,
//     icon: <FaShippingFast className=' text-4xl md:text-5xl text-primary' />,
//     title: 'Fast Delivery',
//     description: 'Get Your Order Delivered Quickly'
//   }
];


function Services() {
  return (
    <div className='  container mt-14  md:mt-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 '>
            {
                serviceData.map(service => (
                    <div
                    key={service.id}
                    data-aos='fade-up'
                    data-aos-duration='1000'
                    data-aos-once='true'
                     className='flex justify-center items-start flex-col sm:flex-row gap-4  py-10 '>
                        <div className=''>
                            {service.icon}
                            <h1 className='text-xl md:text-2xl font-bold'>{service.title}</h1>
                            <p className=' text-gray-400 text-sm'>{service.description}</p>
                        </div>
                    </div>
                ))
            } 
        </div>
    </div>
  )
}

export default Services
