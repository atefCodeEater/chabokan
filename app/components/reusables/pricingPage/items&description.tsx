"use client";

import Image from "next/image";
import Link from "next/link";
import OrangeButton from "@/app/components/reusables/orangeButton";
interface Items_description {
  titles: {
    icon: any;
    title: string;
    description: string;
  };
  centerDescription: {
    description: string;
    linksRow: string[];
  };
  leftSide: {
    description: string;
  };
}

export default function Items_description({
  titles,
  centerDescription,
  leftSide,
}: Items_description) {
  const renderLinks = centerDescription.linksRow.map((link: string, i) => {
    return (
      <div className="flex w-full items-center" key={i}>
        <Link href={"#"}>
          <Image alt="#" src={link} height={60} width={60} />
        </Link>
      </div>
    );
  });
  return (
    <div className="border-2  flex justify-center  items-center rounded-md w-[1200px] h-80 border-orange-500 ">
      <section className="w-[320] text-center  space-y-4 flex justify-center flex-wrap text-white font-B_Nazanin">
        <div>
          <OrangeButton
            children="  مشاهده پلن ها"
            css="bg-orange-500 w-44 h-10 text-xl rounded-md text-white font-B_Nazanin"
          />
        </div>
        <div className="w-full">{leftSide.description}</div>
      </section>
      <section className="w-[700px]">
        <div className="text-white mb-12 text-right font-B_Nazanin">
          {centerDescription.description}
        </div>
        <div className="flex w-full">{renderLinks}</div>
      </section>
      <section className="w-[320] text-center space-y-4 flex justify-center flex-wrap text-white font-B_Nazanin">
        <div className="text-orange-500 text-6xl">{titles.icon}</div>
        <div className="text-2xl w-full">{titles.title}</div>
        <div className="text-xl">{titles.description}</div>
      </section>
    </div>
  );
}
