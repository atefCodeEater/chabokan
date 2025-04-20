"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swiper from "swiper";
import { useSwiper } from "swiper/react";

export default function SlideNextButton({ swiper }: { swiper: any }) {
  // const swiper = useSwiper();

  return (
    <button onClick={() => swiper.current?.slidePrev()}>
      <FaChevronLeft className="text-red-600  text-2xl" />
    </button>
  );
}
