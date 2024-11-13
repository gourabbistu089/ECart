import React from 'react'

import img1 from '../assets/product/p-1.jpg';
import img2 from '../assets/product/p-2.jpg';
import img3 from '../assets/product/p-3.jpg';
import img4 from '../assets/product/p-4.jpg';
import img5 from '../assets/product/p-5.jpg';
import img6 from '../assets/product/p-5.jpg';
import img7 from '../assets/product/p-7.jpg';
import img8 from '../assets/product/p-7.jpg';
import img9 from '../assets/product/p-9.jpg';
import ProductCard from './ProductCard';

const productData = [
    {
      id: 1,
      img: img1,
      title: 'Boat Headphone',
      price: 49.99,
      aosDelay: 100
    },
    {
      id: 2,
      img: img2,
      title: 'Stylish Goggles',
      price: 19.99,
      aosDelay: 200
    },
    {
      id: 3,
      img: img3,
      title: 'Smart Watch',
      price: 99.99,
      aosDelay: 300
    },
    {
      id: 4,
      img: img4,
      title: 'Bluetooth Speaker',
      price: 59.99,
      aosDelay: 400
    },
    {
      id: 5,
      img: img5,
      title: 'Gaming Laptop',
      price: 799.99,
      aosDelay: 500
    },
    {
      id: 6,
      img: img6,
      title: 'Wireless Earbuds',
      price: 29.99,
      aosDelay: 600
    },
    {
      id: 7,
      img: img7,
      title: 'Fitness Tracker',
      price: 39.99,
      aosDelay: 700
    },
    {
      id: 8,
      img: img8,
      title: 'Portable Charger',
      price: 24.99,
      aosDelay: 800
    },
    // {
    //   id: 9,
    //   img: img9,
    //   title: 'Drone Camera',
    //   price: 299.99,
    //   aosDelay: 900
    // }
  ];
  
function Products() {
  return (
    <div>
        <div className='container'>
            {/* Header */}
            <div className=' text-center mb-10 max-w-[600px] mx-auto space-y-2 '>
                <h1 className=' font-bold text-3xl sm:text-4xl'>
                    Our Products
                </h1>
                <p className=' text-gray-500 test-sm
                '>Explore Our Products</p>
            </div>

            {/* Body Section */}

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {
                    productData.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }
            </div>      
        </div>
    </div>
  )
}

export default Products