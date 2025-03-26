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
export default function cloadHost_Drop() {
  return (
    <div
      className=" flex justify-center items-center   w-[1300px]
    flex-wrap h-[500px]"
    >
      <Link_Componet
        content="پیکربندی حرفه ای برای کتابخانه ها و فریمورک های پایتون "
        title="هاست پایتون"
        Icon={<FaPython />}
      />

      <Link_Componet
        content="مناسب برای فریمورک Laravel سریع و قدرتمند"
        title="هاست لاراول"
        Icon={<FaLaravel />}
      />

      <Link_Componet
        content="کانفیگ پیشرفته و منحصر به فرد مناسب Django"
        title="هاست جنگو"
        Icon={<SiDjango />}
      />

      <Link_Componet
        content="تجربه سرعت چندین برابری با فناوری کلود"
        title="هاست وردپرس ابری"
        Icon={<FaWordpressSimple />}
      />

      <Link_Componet
        content="مناسب برای حرفه ای ها باسرعتی باونکردنی"
        title="asp.net هاست"
        Icon={
          <Image
            alt="#"
            width={50}
            height={50}
            src={"/images/asp.net.logo.png"}
          />
        }
      />

      <Link_Componet
        content="انعطاف پذیری بالا و نهایت سرعت را تجربه کنید"
        title="هاست ووگاپرس"
        Icon={<SiWoocommerce />}
      />

      <Link_Componet
        content="بهینه شده برای اپ های Node Js"
        title="هاست نوودجی اس"
        Icon={<FaNodeJs />}
      />

      <Link_Componet
        content="میزبانی از برنامه های PHP با سخت افزار هایی قوی"
        title="php هاست"
        Icon={<FaPhp />}
      />

      <Link_Componet
        content="پشتیبان گیری (backup) در فضایی امن و پایدار"
        title="هاست بکاپ"
        Icon={<MdBackup />}
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
        content="مناسب ربات تلگرام پایتون، php ، نود جی اس و ..."
        title="هاست ربات تلگرام"
        Icon={<FaTelegramPlane />}
      />

      <Link_Componet
        content="مدیریت آسان پورت های کانتینر، مدیریت دیسک ها ..."
        title="هاست داکر"
        Icon={<IoLogoDocker />}
      />

      <Link_Componet
        content="مناسب برای انواع برنامه ها"
        title="هاست لینوکس"
        Icon={<VscTerminalLinux />}
      />
      <Link_Componet
        content="بهینه‌سازی شده برای فریم ورک ناکست"
        title="nuxt هاست"
        Icon={<TbBrandNuxt />}
      />
    </div>
  );
}
