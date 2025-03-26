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
    <div className={` h-[500px]  ${outCss}`}>
      <div className="w-[700px] max-h-96 ">{content}</div>
      <div className="w-[500px] p-1 max-h-96 flex justify-end items-center">
        <Image alt="#" width={400} height={400} src={imageUrl} />
      </div>
    </div>
  );
}
