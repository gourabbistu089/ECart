import React from "react";
import Slider from "react-slick";
import image1 from "../assets/hero/headphone.png";
import image2 from "../assets/hero/watch.png";
import image3 from '../assets/category/macbook.png'

import Button from "./Button";

const HeroSlideData = [
    {
      id: 1,
      image: image1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphones",
    },
    {
      id: 2,
      image: image2,
      subtitle: "Smart Watch",
      title: "Top Rated",
      title2: "Electronics",
    },
    {
      id: 3,
      image: image3,
      subtitle: "MacBook Pro",
      title: "Trending",
      title2: "Laptops PCs",
    },
  ];
  
function Hero() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlaySpeed: 4000,
    cssEase: "",
    pauseOnFocus: true,
    pauseOnHover: true,
  };
  return (
    <div className=" container mt-10 mb-10">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center"> 
      <div className=" container pb-8 sm:pb-0">
          {/* Hero section */}
          <Slider {...settings}>
    {
        HeroSlideData.map((slide) => {
          return (
            <div key={slide.id}>
            <div className=" flex justify-center flex-col md:flex-row items-center">

                {/* Text Content */}
                <div className=" flex flex-col justify-between gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left relative z-10"> 
                    <h1 
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    data-aos-once='true'
                    className=" text-2xl sm:text-6xl lg:text-2xl font-bold" >{slide.subtitle}</h1>
                    <h1
                      data-aos='zoom-out'
                      data-aos-duration='500'
                      data-aos-once='true'
                    className=" text-5xl sm:text-6xl lg:text-7xl font-bold">{slide.title}</h1>
                    <h1 
                    data-aos='zoom-out'
                    data-aos-duration='500'
                    data-aos-once='true'
                    className=" text-5xl uppercase text-white dark:text-[#535257] sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{slide.title2}</h1>
                    <div
                    
                    data-aos='fade-up'
                    data-offset='0'
                    data-aos-duration='500'
                    data-aos-delay='300'>
                      <Button
                      text={"Shop By Category"}
                      bgcolor={"bg-primary"}
                      color={"text-white"}
                      handler={()=>{}}
                      />
                    </div>
                </div>

                {/* Img Content */}
                <div
                     data-aos='zoom-in'
                     data-aos-duration='500'
                     data-aos-once='true'
                
                >
                    <img src={slide.image} alt="" className="w-[300px] h-[300px] object-cotain
                     mx-auto drop-shadow-xl relative z-20" />
                </div>
            </div>
            </div>
          );
        })
    }

        </Slider>
      </div>
      </div>
    </div>
  );
}

export default Hero;
