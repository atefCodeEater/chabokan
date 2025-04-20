"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface AcoordionInterface {
  contents: { title: string; description: string }[];
}

export default function AccordionComponents({ contents }: AcoordionInterface) {
  const [indicator, setIndicator] = useState<number>(0);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("indicator : ", indicator);

  const renderAccordion = contents.map((item, i) => {
    return (
      <div key={item.title} className="h-auto ">
        <section className={`text-right font-B_Nazanin  `}>
          <h1
            className={`${
              indicator === i + 1
                ? "text-orange-500"
                : "text-white border-b-0  "
            }  flex border-1  border-slate-800  py-4 h-16 px-4 justify-end
                 cursor-pointer  items-center space-x-2`}
            onClick={() => {
              setIndicator((n) => {
                if (n === i + 1) return 0;
                else return i + 1;
              });
            }}
          >
            <p className={` text-lg `}>{item.title}</p>
            <div className="w-4 h-4">
              <div
                className="relative h-full
              "
              >
                <FaPlus
                  className={`absolute    ${
                    indicator === i + 1 ? "opacity-100" : "opacity-0"
                  }`}
                />
                <FaMinus
                  className={`absolute   ${
                    indicator === i + 1 ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </div>
          </h1>
          <div
            id={indicator.toString()}
            className={`${
              indicator === i + 1
                ? `max-h-[500px] delay-150 ease-in  duration-700`
                : "max-h-0  py-0 ease-out duration-500"
            } border-1 border-t-0 border-b-0 tracking-wider font-B_Nazanin 
             overflow-hidden text-base font-normal
           border-slate-800 text-white   px-4  `}
          >
            <br />
            {item.description}
            <br />
            <br />
          </div>
        </section>
      </div>
    );
  });

  return <div className=" border-b-1 border-slate-800 ">{renderAccordion}</div>;
}
