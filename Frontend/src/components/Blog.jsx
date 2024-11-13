import React from 'react'
import img1 from '../assets/blogs/blog-1.jpg'
import img2 from '../assets/blogs/blog-2.jpg'
import img3 from '../assets/blogs/blog-3.jpg'
import BlogCard from './BlogCard';
const blogData = [
    {
      id: 1,
      image: img1,  // Replace with the actual image URL or import statement
      title: 'Top 10 Gadgets to Boost Your Productivity',
      subtitle: 'Discover the latest gadgets that can enhance your daily workflow and increase efficiency. From smart watches to noise-cancelling headphones, these tools are designed for modern professionals.'
    },
    {
      id: 2,
      image: img2,  // Replace with the actual image URL or import statement
      title: 'How to Choose the Perfect Smartphone for Your Needs',
      subtitle: 'Selecting the right smartphone involves balancing features, budget, and personal preferences. This guide covers the key factors to consider, including camera quality, battery life, and more.'
    },
    {
      id: 3,
      image: img3,  // Replace with the actual image URL or import statement
      title: 'Essential Tips for Setting Up a Home Office',
      subtitle: 'A well-organized home office can improve productivity and comfort. Learn about the must-have equipment and setup tips to create an effective workspace at home.'
    }
  ];
  
  
function Blog() {
  return (
    <div>

    <div className='container mt-14 md:mt-20'>
      {/* Header */}
      <div className=' text-center mb-10 max-w-[600px] mx-auto space-y-2 '>
                <h1 className=' font-bold text-3xl sm:text-4xl'>
                    Recent News
                </h1>
                <p className=' text-gray-700 dark:text-gray-100 test-md
                '>Explore Our Blogs</p>
            </div>

            {/* Blog Section */}

            <div className=' grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 '>
                {/* Blog Card */}
                {
                    blogData.map(blog => (
                        <BlogCard key={blog.id} blog={blog}/>
                    ))
                }

            </div>



    </div>
    </div>
  )
}

export default Blog