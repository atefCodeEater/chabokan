"use client";
import { CustomDropDown } from "@/app/components/hoverableDropdown";

import CloadServer_drop from "@/app/components/Header/HeaderDrops/cloadServer_drop";
import CloadHost_drop from "@/app/components/Header/HeaderDrops/cloadHost_drop";

import Link from "next/link";
import { Avatar } from "@heroui/react";
import Image from "next/image";

export default function headerComp() {
  return (
    <div
      className="bg-slate-800 w-full flex 
     justify-center items-center text-white text-lg space-x-8 h-20 font-B_Nazanin"
    >
      <button className="bg-orange-600 mr-12 w-44 h-9 flex justify-center items-center rounded-md  ">
        ورود | ثبت نام
      </button>
      <CustomDropDown buttonClass="" title="ارتباط با ما" />
      <CustomDropDown buttonClass="" title="پایگاه دانش" />
      <CustomDropDown buttonClass="w-32" title="خدمات دیگر" />
      <Link href={"#"}>خرید دامنه</Link>
      <Link href={"#"}>تعرفه ها</Link>
      <Link href={"#"}>دستیار مدیر سرور</Link>
      <CustomDropDown
        ResolveComponets={<CloadServer_drop />}
        buttonClass=""
        title="سرور ابری"
      />
      <CustomDropDown
        ResolveComponets={<CloadHost_drop />}
        contentClass=""
        buttonClass=""
        title="هاست ابری"
      />
      <div className=" mb-2">
        <Image
          width={100}
          height={100}
          alt="&"
          src="/images/Orrange-Logo_1.svg"
        />
      </div>
    </div>
  );
}
