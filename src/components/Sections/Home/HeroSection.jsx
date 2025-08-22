"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
    return (
        <section className="relative w-full h-[55vh] md:h-[95vh]">
            {/* Background Slider */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
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

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-5 bg-black/60" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col z-5 items-center justify-center text-center text-white px-4 md:px-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-2 md:mb-6">
                    Discover the Luxury of <span className="text-primary">Artisio</span>
                </h1>
                <p className="text-sm md:text-xl max-w-2xl mb-6 md:mb-8 text-gray-300">
                    Handcrafted artisan goods that bring timeless beauty and elegance to
                    your home and lifestyle.
                </p>
                <div>
                    <Button className="text-xs md:text-sm px-4 md:px-6 lg:px-8 py-2 md:py-5">
                        Explore Collection
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;