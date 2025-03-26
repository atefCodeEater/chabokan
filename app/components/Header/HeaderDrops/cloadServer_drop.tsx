import Link from "next/link";
import { FaPython } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { FaWordpressSimple } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import Image from "next/image";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { MdBackup } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";
import { VscTerminalLinux } from "react-icons/vsc";
import { TbBrandNuxt } from "react-icons/tb";
import Link_Componet from "@/app/components/reusables/link_Componet";
export default function cloadServer_Drop() {
  return (
    <div
      className=" flex justify-center items-center   w-[1300px]
    flex-wrap h-[250px]"
    >
      <Link_Componet
        content="سرور ابری Hetzner"
        title="سرور ابری هتزنر"
        Icon={
          <Image
            alt="#"
            width={50}
            height={50}
            src={"/images/Hetzner-logo1.png"}
          />
        }
      />
      <Link_Componet
        content="سرور ابری Digital Ocean"
        title=" سرور ابری دیجیتال اوشن"
        Icon={
          <Image
            width={50}
            height={50}
            alt="*"
            src={"/images/DigitalOcean_logo.svg.png"}
          />
        }
      />
      <Link_Componet
        content="سرور ابری چابکان در موقعیت ایران"
        title=" سرور ابری ایران"
        Icon={
          <Image
            width={50}
            height={50}
            alt="*"
            src={"/images/Orrange-Logo_1.svg"}
          />
        }
      />

      <Link_Componet
        content="هاست ریکت برای فرانت اند کاران حرفه ای"
        title="هاست react"
        Icon={<FaReact />}
      />
      <Link_Componet
        content="هاست vue پیکربندی شده برای پروژه های این فریمورک"
        title="هاست ویو"
        Icon={<FaVuejs />}
      />
      <Link_Componet
        content="ارائه سرور از موقعیت های مطرح دنیا "
        title="سرور ابری One Provider"
        Icon={
          <Image
            width={50}
            height={50}
            alt="*"
            src={"/images/bb9eed12a0.png"}
          />
        }
      />
    </div>
  );
}
