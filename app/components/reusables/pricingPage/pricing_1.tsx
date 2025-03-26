"use client";
import OrangeButton from "@/app/components/reusables/orangeButton";

export default function Pricing_1() {
  return (
    <div className="flex justify-end text-right flex-wrap space-y-4 w-[700px]">
      <h1 className=" font-B_Nazanin text-white font-bold text-6xl w-full">
        تعرفه ها{" "}
      </h1>
      <h1 className="text-white font-B_Nazanin text-xl">
        با بودجه ای که در نظر داری، یک سرویس خوب برات میسازیم
      </h1>
      <div className="text-white font-B_Nazanin text-lg">
        تو چابکان دستت بازه و میتونی سرویس مد نظرتو سالانه، ماهانه و یا حتی
        ساعتی انتخاب کنی و پرداختو انجام بدی و هیچ محدودیت زمانی وجود نداره و
        همچنین در صورت انتخاب هر سرویسی میتونی بعدا سرویس مد نظرتو فقط با چند
        کلیک به منابع بیشتر و پلن های بالاتر افزایش بدی.
      </div>

      <OrangeButton
        children="  اعتبار رایگان"
        css="bg-orange-500 w-28 h-10 text-xl rounded-md text-white font-B_Nazanin"
      />
    </div>
  );
}
