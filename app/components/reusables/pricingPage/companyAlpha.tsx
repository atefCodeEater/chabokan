"use client";

import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { motion } from "framer-motion";
export function RenderImages_GridRow({ lists }: { lists: string[] }) {
  const renderImages = lists.map((list: string) => {
    return (
      <div key={list} className="section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Image className=" " alt="#" width={100} height={100} src={list} />
        </motion.div>
      </div>
    );
  });
  return <div className="  grid grid-cols-11 grid-rows-2">{renderImages}</div>;
}
