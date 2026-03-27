import React from "react";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title1: "Lessons and insights",
    title2: "from 8 years",
    text: "Where to grow your business as a photographer: site or social media?",
    image: "/hero-image.svg",
  },
  {
    id: 2,
    title1: "Grow your business",
    title2: "with smart strategy",
    text: "Build your brand with modern tools and better online presence.",
    image: "/hero-image.svg",
  },
  {
    id: 3,
    title1: "Manage your clients",
    title2: "with confidence",
    text: "Simple solutions to help your team work faster and better.",
    image: "/hero-image.svg",
  },
];

const Hero = () => {
  return (
    <section className="bg-[#F5F7FA] py-4">
      <div className="max-w-[1280px] mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="hero-swiper !pb-14"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-12 min-h-[400px]">
                <div className="max-w-2xl text-center md:text-left">
                  <h1 className="text-4xl md:text-6xl font-semibold text-[#4D4D4D] leading-tight">
                    {slide.title1} <br />
                    <span className="text-[#4CAF4F]">{slide.title2}</span>
                  </h1>

                  <p className="text-[#717171] mt-4 text-lg">{slide.text}</p>

                  <Button
                    type="primary"
                    size="large"
                    className="mt-8 !bg-[#4CAF4F] !border-[#4CAF4F] hover:!bg-[#3d8b3f] !h-[50px] !px-8 text-white rounded-[4px] font-medium"
                  >
                    Register
                  </Button>
                </div>

                <div className="mt-10 md:mt-0 flex justify-center">
                  <img
                    src={slide.image}
                    alt="Hero illustration"
                    className="w-[300px] md:w-[390px] h-auto object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
