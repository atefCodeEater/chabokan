"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButto from "./SlidePrevButto";
import { useRef } from "react";

export default function SliderComponents({
  slidesPerView,
  children,
}: {
  slidesPerView: number;
  children: React.ReactNode;
}) {
  const swiperRef = useRef<null | any>(null);
  const swiper = useSwiper();
  const style = {
    "--swiper-pagination-bullet-inactive-color": "#999999",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "8px",
    "--swiper-pagination-bullet-horizontal-gap": "6px",
  };
  return (
    <div
      className="w-full flex justify-center 
    items-center space-x-2 h-auto"
    >
      <SlidePrevButto swiper={swiperRef} />
      <Swiper
        style={style as any}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        pagination={{ clickable: true }}
        className=" w-1/2 flex items-center max-h-96"
        spaceBetween={50}
        slidesPerView={slidesPerView}
        // width={700}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
      >
        {children}
      </Swiper>
      <SlideNextButton swiper={swiperRef} />
    </div>
  );
}
