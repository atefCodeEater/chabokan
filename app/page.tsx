"use client";

import Headeromponent from "@/app/components/Header/header";
import TwoGridAvretisment from "@/app/components/reusables/twoGridAvretisment";
import Pricing_1 from "@/app/components/reusables/pricingPage/pricing_1";
import Pricing_2 from "@/app/components/reusables/pricingPage/pricing_2";
import { BsDatabaseFillCheck } from "react-icons/bs";
import Items_description from "@/app/components/reusables/pricingPage/items&description";
import { RenderImages_GridRow } from "@/app/components/reusables/pricingPage/companyAlpha";

import Accordion_Components from "@/app/components/reusables/Accordion";
import { FaLaptopCode } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";
import CountUpComponents from "@/app/components/reusables/CountUpComponents";
import SliderComponents from "./hooks/SliderHook";
import { SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Button, Skeleton } from "@heroui/react";

export default function Home() {
  const contents = [
    {
      title: "   چگونه میتوانم فاکتور حقوقی و شرکتی دریافت کنم؟",
      description:
        " برای دریافت فاکتور حقوقی و شرکتی ابتدا از قسمت پروفایل کاربری (سمت  چپ بالای صفحه) روی گزینه تنظیمات فاکتورها کلیک و پس از ورود به تنظیمات گزینه اطلاعات حقوقی (شرکت) را انتخاب کنید سپس مشخصات شرکت خود را وارد نمایید. از این پس با نام و نشان شرکت فاکتورهای حقوقی را میتوانید دریافت و دانلود نمایید.",
    },
    {
      title: "  در هنگام پرداخت آنلاین به مشکل خورده ام دلیل آن چیست؟",
      description:
        "  اختلال در هنگام پرداخت آنلاین می تواند به یکی از دلایل زیر باشد: 1- ممکن است شبکه ی شتاب قطع باشد (در اینصورت لطفا چند دقیقه صبر کنید و سپس مجددا برای پرداخت اقدام کنید). 2- ممکن است درگاه پرداخت آنلاین به صورت موقت مشکل داشته باشد. (در این صورت درگاه پرداخت دیگری را امتحان کنید.) حال حاضر دو درگاه پرداخت آنلاین در چابکان موجود است: پرداخت آنلاین شاپرک و پرداخت آنلاین زرین پال. 3- ممکن است شبکه ی بانکی کارت شما قطع باشد (در اینصورت لطفا چند دقیقه صبر کنید و سپس مجددا برای پرداخت اقدام کنید یا اینکه پرداخت را با کارت دیگری انجام دهید).",
    },
    {
      title:
        "  در صورت عدم پرداخت به موقع برای سرویس های ساعتی، چه اتفاقی پیش می آید؟",
      description:
        "در صورت عدم موجودی کافی و پرداخت برای هزینه سرویس ساعتی ، به مدت 7 روز کیف پول شما منفی میخورد و در این مدت میتوانید کیف پول خود را شارژ نمایید تا سرویس مسدود نشود، بعد از 7 روز سرویس مسدود شده و در صورت عدم پرداخت بدهی کیف پول، سرویس پس از 7 روز حذف خواهد شد.",
    },
    {
      title: " آیا تمام هزینه سرویس ها به صورت یکجا گرفته می شود؟",
      description:
        "    هزینه سرویس های چابکان به صورت ساعتی نیز محاسبه می شوند. و شما میتوانید در هنگام ایجاد سرویس مشخص کنید که هزینه سرویس شما به چه صورت (ساعتی – 1 ماهه – 3 ماهه – 6 ماهه و یا سالانه) پرداخت شود.",
    },
    {
      title:
        "  اگر در کیف پول حساب خود مبلغ بیشتری شارژ کنم، استفاده از این مبلغ به چه صورت می باشد؟",
      description:
        "     طبق قوانین سایت امکان بازگشت وجه پرداخت شده وجود ندارد. این مبلغ نزد چابکان محفوظ هست و هر زمانی که نیاز بود می تونید از آن استفاده کنید.",
    },
    {
      title:
        " آیا امکان مشاهده لیست کل تراکنشهای واریزی از لحظه ساخت حساب کاربری تا به حال وجود دارد؟",
      description:
        "    بله از بخش فاکتور ها قابل مشاهده می باشد. کافیست بر روی پروفایل خود کلیک کرده و وارد قسمت فاکتور ها شوید.",
    },
  ];
  return (
    <div className="flex w-full h-auto justify-center  ">
      <div className="fixed w-full">
        <Headeromponent />
      </div>
      <div className="bg-slate-950  w-full h-full flex flex-wrap space-y-12 justify-center">
        <TwoGridAvretisment
          outCss=" w-[1200px] h-1/2 mt-24 "
          content={<Pricing_1 />}
          imageUrl={"/images/Pricing-plans-hosting.webp"}
        />
        <TwoGridAvretisment
          outCss=" flex-row-reverse w-[1200px] h-1/2 mt-24 "
          content={<Pricing_2 />}
          imageUrl={"/images/cloud-hosting-price.webp"}
        />

        <Items_description
          titles={{
            icon: <BsDatabaseFillCheck />,
            description: "ساعتی ،‌ماهانه ، سالانه",
            title: "دیتابیس ابری",
          }}
          centerDescription={{
            linksRow: [
              "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/cassandra-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/couchdb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/influxdb-platfrom-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mariadb.png",
              "/images/pricing components/rowaIcons_1/mongodb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mysql_kJwUntu-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mysql_kJwUntu-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/neo4j-platfrom-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/postgres-1.png",
              "/images/pricing components/rowaIcons_1/redis-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/rethinkdb.png",
              "/images/pricing components/rowaIcons_1/sqlserver.png",
            ],
            description:
              "سرویس دیتابیس ابری چابکان با پشتیبانی از برترین دیتابیس های SQL و NOSQL خدمات ویژه ای برای شما در نظر دارد، دیتابیس های ابری چابکان امکاناتی مثل مقیاس پذیری آنی، دسترسی سریع، نصب و راه اندازی آسان، بکاپ گیری روزانه و … را در اختیار شما می گذارند تا در کمترین زمان بدون درگیری های نصب و راه اندازی اصولی دیتابیس موردنظر خود را با ورژنی که نیاز دارید ایجاد نماید. سرویس دیتابیس ابری چابکان از اکثر ورژن های دیتابیس های ارائه شده پشتیبانی می کند و شما می توانید در زمان سفارش آن را انتخاب کنید.",
          }}
          leftSide={{ description: "شروع قیمت از ۳۴ هزار تومان" }}
        />
        <Items_description
          titles={{
            icon: <FaLaptopCode />,
            description: "ساعتی ،‌ماهانه ، سالانه",
            title: "برنامه آماده ",
          }}
          centerDescription={{
            linksRow: [
              "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/cassandra-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/couchdb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/influxdb-platfrom-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mariadb.png",
              "/images/pricing components/rowaIcons_1/mongodb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mysql_kJwUntu-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mysql_kJwUntu-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/neo4j-platfrom-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/postgres-1.png",
              "/images/pricing components/rowaIcons_1/redis-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/rethinkdb.png",
              "/images/pricing components/rowaIcons_1/sqlserver.png",
            ],
            description:
              "نصب و راه اندازی برنامه های آماده همیشه یکی از دغدغه های برنامه نویسان و مدیران کسب و کار بوده و هست، با محصول برنامه های آماده چابکان در کمترین زمان و تنها با چند کلیک بدون پیچیدگی های گذشته نصب و راه اندازی می توانید برنامه های مختلف مانند وردپرس، جوملا، گیت هاب و ده ها برنامه دیگر را در بستر ابر مسقر کنید و به راحتی از آن استفاده کنید.",
          }}
          leftSide={{ description: "شروع قیمت از ۳۴ هزار تومان" }}
        />
        <Items_description
          titles={{
            icon: <LuNetwork />,
            description: "ساعتی ،‌ماهانه ، سالانه",
            title: "میزبانی آسان",
          }}
          centerDescription={{
            linksRow: [
              "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/cassandra-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/couchdb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/influxdb-platfrom-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mariadb.png",
              "/images/pricing components/rowaIcons_1/mongodb-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/mysql_kJwUntu-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/postgres-1.png",
              "/images/pricing components/rowaIcons_1/redis-platform-removebg-preview.png",
              "/images/pricing components/rowaIcons_1/rethinkdb.png",
              "/images/pricing components/rowaIcons_1/sqlserver.png",
            ],
            description:
              "با استفاده از محصول میزبانی آسان پلتفرم ابری چابکان به راحتی و با صرف کمترین زمان ممکن می توانید سرویس های خود بر روی سرور های ابری با بروز ترین سخت افزار و در بهترین دیتاسنتر های داخل ایران و خارج از ایران استقرار دهید. محصول میزبانی آسان که یک محصول PaaS می باشد این امکان را به شما می دهد که سرویس شما با هر زبان برنامه نویسی را بدون اتلاف زمان و درگیری های کانفیگ سرور با خیالی راحت وارد دنیای اینترنت کند.",
          }}
          leftSide={{ description: "شروع قیمت از ۳۴ هزار تومان" }}
        />
        <h1 className="font-B_Nazanin text-white font-bold text-center text-4xl w-full">
          سوالات متداول{" "}
        </h1>
        <TwoGridAvretisment
          outCss="flex w-[1200px]  mt-24  "
          content={<Accordion_Components contents={contents} />}
          imageUrl={"/images/Questions-for-cloud-hosting.webp"}
        />

        <h1 className="font-B_Nazanin  text-slate-300  text-center text-xl w-full">
          با سرویس های چابکان نگران چیزی نباش و فقط رو توسعه کسب و کارت تمرکز کن
        </h1>
        <h1
          className="font-B_Nazanin  text-white font-bold border-b-1
         h-28 border-slate-800 text-center text-4xl w-2/3"
        >
          مورد اعتماد برترین ها
        </h1>

        <div className="flex w-full justify-center space-x-12">
          <CountUpComponents
            outCss="border-1  border-slate-800
         w-60 h-40"
            target={4500}
            title="تیکت پشتیبانی"
          />
          <CountUpComponents
            outCss="border-1   border-slate-800
         w-60 h-40"
            target={21300}
            title="سرویس ایجاد شده"
          />
          <CountUpComponents
            outCss="border-1   border-slate-800
         w-60 h-40"
            target={69939962}
            title="Request در ماه"
          />
          <CountUpComponents
            outCss="border-1   border-slate-800
         w-60 h-40"
            target={76201}
            title=" استقرار موفق"
          />
        </div>
        <SliderComponents slidesPerView={2}>
          <SwiperSlide className="text-white h-full border-1 border-slate-900 p-4">
            <div className="flex flex-wrap w-full space-y-3 h-full justify-center">
              <Image
                className="rounded-md "
                width={130}
                height={130}
                alt="#"
                src={"/images/12317.jpg"}
              />
              <div className="text-center w-full">
                خوبیه تو ایران. رحمان قادرپور برنامه نویس رحمان قادرپور چابکان
                یکی از معدود هاست هایی هست که باهاش کار کردم و برای سئو و کراولر
                های گوگل پیکربندی شده و همچنین لوکیشن های مختلف داره و محدود به
                ایران نیست و علاوه بر اینا آپتایم فوق العاده ای داره و اگر
                کمپینی رفتید و ترافیک سایتتون خیلی زیاد شد میتونید
              </div>
              <h1 className="text-2xl w-full text-center">نفر اول</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-white border-1 border-slate-900 p-4">
            <div className="flex flex-wrap w-full space-y-3 h-full justify-center">
              <Image
                className="rounded-md "
                width={130}
                height={130}
                alt="#"
                src={"/images/12317.jpg"}
              />
              <div className="text-center w-full">
                خوبیه تو ایران. رحمان قادرپور برنامه نویس رحمان قادرپور چابکان
                یکی از معدود هاست هایی هست که باهاش کار کردم و برای سئو و کراولر
                های گوگل پیکربندی شده و همچنین لوکیشن های مختلف داره و محدود به
                ایران نیست و علاوه بر اینا آپتایم فوق العاده ای داره و اگر
                کمپینی رفتید و ترافیک سایتتون خیلی زیاد شد میتونید
              </div>
              <h1 className="text-2xl w-full text-center">نفر دوم</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-white border-1 border-slate-900 p-4">
            <div className="flex flex-wrap w-full space-y-3 h-full justify-center">
              <Image
                className="rounded-md "
                width={130}
                height={130}
                alt="#"
                src={"/images/12317.jpg"}
              />
              <div className="text-center w-full">
                خوبیه تو ایران. رحمان قادرپور برنامه نویس رحمان قادرپور چابکان
                یکی از معدود هاست هایی هست که باهاش کار کردم و برای سئو و کراولر
                های گوگل پیکربندی شده و همچنین لوکیشن های مختلف داره و محدود به
                ایران نیست و علاوه بر اینا آپتایم فوق العاده ای داره و اگر
                کمپینی رفتید و ترافیک سایتتون خیلی زیاد شد میتونید
              </div>
              <h1 className="text-2xl w-full text-center">نفر سوم</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-white border-1 border-slate-900 p-4">
            <div className="flex flex-wrap w-full space-y-3 h-full justify-center">
              <Image
                className="rounded-md "
                width={130}
                height={130}
                alt="#"
                src={"/images/12317.jpg"}
              />
              <div className="text-center w-full">
                خوبیه تو ایران. رحمان قادرپور برنامه نویس رحمان قادرپور چابکان
                یکی از معدود هاست هایی هست که باهاش کار کردم و برای سئو و کراولر
                های گوگل پیکربندی شده و همچنین لوکیشن های مختلف داره و محدود به
                ایران نیست و علاوه بر اینا آپتایم فوق العاده ای داره و اگر
                کمپینی رفتید و ترافیک سایتتون خیلی زیاد شد میتونید
              </div>
              <h1 className="text-2xl w-full text-center">نفر چهارم</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-white border-1 border-slate-900 p-4">
            <div className="flex flex-wrap w-full space-y-3 h-full justify-center">
              <Image
                className="rounded-md "
                width={130}
                height={130}
                alt="#"
                src={"/images/12317.jpg"}
              />
              <div className="text-center w-full">
                خوبیه تو ایران. رحمان قادرپور برنامه نویس رحمان قادرپور چابکان
                یکی از معدود هاست هایی هست که باهاش کار کردم و برای سئو و کراولر
                های گوگل پیکربندی شده و همچنین لوکیشن های مختلف داره و محدود به
                ایران نیست و علاوه بر اینا آپتایم فوق العاده ای داره و اگر
                کمپینی رفتید و ترافیک سایتتون خیلی زیاد شد میتونید
              </div>
              <h1 className="text-2xl w-full text-center">نفر پنجم</h1>
            </div>
          </SwiperSlide>
        </SliderComponents>
        <RenderImages_GridRow
          lists={[
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
            "/images/pricing components/rowaIcons_1/arangodb-removebg-preview.png",
          ]}
        />
        <Button
          className="bg-gradient-to-r transition-all duration-150 
           hover:bg-gradient-to-l 
          rounded-lg w-80  p-3 h-20 text-center
            text-xl text-white font-B_Nazanin"
        >
          سرویس مورد نظرتو همین الان بخ
        </Button>
        <div>1</div>
        <div>2 dev</div>
        <div>4 dev</div>
      </div>
    </div>
  );
}
