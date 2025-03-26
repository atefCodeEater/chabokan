"use client";
import OrangeButton from "@/app/components/reusables/orangeButton";

export default function Pricing_1() {
  return (
    <div className="flex justify-end text-right flex-wrap space-y-4 w-[700px]">
      <h1 className=" font-B_Nazanin text-white font-bold text-6xl w-full"></h1>
      <h1 className="text-white font-B_Nazanin text-xl">
        کیفیت به هیچ عنوان ارزون نیست !!!
      </h1>
      <div className="text-white font-B_Nazanin text-lg">
        ما برای زیرساخت چابکان از بروزترین و جدیدترین تکنولوژی های روز دنیا
        استفاده می کنیم و تمامی سرویس ها و برنامه هامون با جدیدترین نسخه سرویس
        ها و زبان های برنامه نویسی منتشر شده، سازگار هستند و علاوه بر اینها ما
        برای پشتیبانی از متخصصین مجرب استفاده میکنیم تا تو سریع ترین زمان ممکن
        پاسخ تخصصی ترین سوال های شما رو بدن اما با توجه به همه اینها همیشه سعی
        میکنیم مناسب ترین قیمت و تعرفه گذاری رو بر روی سرویس هامون اعمال کنیم تا
        همه هموطنامون بتونن بدون هیچ مشکلی از پلتفرممون استفاده کنن اما اگر
        تعرفه ای کمتر از تعرفه های موجود جایی دیدید بدونید از تکنولوژی تاریخ
        گذشته و اختصاص کم منابع یا بدون هیچ پشتیبانی سرویس های خودشونو ارائه
        میدن پس توصیه می کنیم هیچوقت کسب و کارتونو روی زمین شیشیه ای بنا نکنید.
      </div>
      <OrangeButton
        children="  اعتبار رایگان"
        css="bg-orange-500 w-28 h-10 text-xl rounded-md text-white font-B_Nazanin"
      />
    </div>
  );
}
