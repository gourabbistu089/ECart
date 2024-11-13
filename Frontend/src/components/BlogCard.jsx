import React from 'react'

function BlogCard({blog}) {
  return (
    <div className=' bg-white dark:bg-slate-900 my-12 dark:text-white duration-200 p-2 shadow-sm rounded-xl'>
        <div className='  overflow-hidden rounded-2xl mb-2'>
            <img src={blog.image} alt="" className=' w-full h-[220px] object-cover rounded-2xl hover:scale-105  duration-200' data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" />
        </div>
        <div className=' space-y-2 '>
        <p className=' text-xs to-gray-500 '>{blog.date}</p>
            <h1 className=' text-lg font-bold line-clamp-1'>{blog.title}</h1>
            <p className=' text-sm line-clamp-2 text-gray-600 dark:to-gray-100'>{blog.subtitle}</p>
        </div>
    </div>
  )
}

export default BlogCard