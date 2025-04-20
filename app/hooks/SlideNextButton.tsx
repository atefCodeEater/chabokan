"use client";

import { FaChevronRight } from "react-icons/fa";
import Swiper from "swiper";
import { useSwiper } from "swiper/react";

export default function SlideNextButton({ swiper }: { swiper: any }) {
  //   const swiper = useSwiper();

  return (
    <button
      onClick={() => {
        swiper.current?.slideNext();

        console.log("swiper : ", swiper);
      }}
    >
      <FaChevronRight className="text-red-600  text-2xl" />
    </button>
  );
}
