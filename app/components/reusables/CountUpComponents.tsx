"use client";

import CountUp from "react-countup";
import { BiPlus } from "react-icons/bi";

export default function countUpComponents({
  target,
  outCss,
  title,
}: {
  target: number;
  outCss: string;
  title: string;
}) {
  return (
    <div
      className={`${outCss}   flex-wrap flex rounded-xl -space-y-12 justify-center items-center `}
    >
      <div className="w-auto font-thin text-slate-400 h-12 flex justify-center items-center text-3xl">
        <BiPlus />
        <CountUp enableScrollSpy end={target} />
      </div>
      <p className="w-full text-center font-B_Nazanin  text-slate-400 text-xl h-9">
        {title}
      </p>
    </div>
  );
}
