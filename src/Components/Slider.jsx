import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-11/12 h-[400px] mx-auto py-5">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
      >
        <SwiperSlide>
          <div
            className="w-full h-[300px] md:h-[400px] bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('./slider1.webp')" }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
                Nurture Your Green Space
              </h1>
              <p className="text-white/90 text-center mt-2 text-lg">
                Green Space Nurture
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[300px] md:h-[400px] bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('./slider2.webp')" }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
                Breathe Life Into Your Home
              </h1>
              <p className="text-white/90 text-center mt-2 text-lg">
                Home Life Breathe
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[300px] md:h-[400px] bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('./slider3.webp')" }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
                Grow Your Own Oasis
              </h1>
              <p className="text-white/90 text-center mt-2 text-lg">
                Grow Home Oasis
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[300px] md:h-[400px] bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: "url('./slider4.jpg')" }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
                Find Your Inner Zen
              </h1>
              <p className="text-white/90 text-center mt-2 text-lg">
                Find Inner Zen
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
