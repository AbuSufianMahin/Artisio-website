"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 8000 }}
            loop
            className="w-full h-full z-1"
        >
            {/* Slides - you can replace with artisan/luxury images */}
            <SwiperSlide>
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/slide1.jpg')" }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/slide2.jpg')" }}
                />
            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/slide3.jpg')" }}
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;