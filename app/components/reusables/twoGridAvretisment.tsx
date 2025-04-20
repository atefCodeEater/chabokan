"use client";

import Image from "next/image";

export default function TwoGridAvretisment({
  imageUrl,
  content,
  outCss,
}: {
  imageUrl: string;
  content: any;
  outCss: string;
}) {
  return (
    <div className={`flex justify-center items-center max-h-[700px] ${outCss}`}>
      <div className="w-2/3   h-full">{content}</div>
      <div className="w-1/3   h-full  ">
        <Image alt="#" width={700} height={700} src={imageUrl} />
      </div>
    </div>
  );
}
