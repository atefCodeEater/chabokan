import { IconType } from "react-icons";

export default function LinkComponet({
  title,
  content,
  Icon,
}: {
  title: string;
  content: string;
  Icon: any;
}) {
  return (
    <div className="bg-slate-800 w-96 h-20 mx-2 flex justify-end  items-center rounded-md">
      <div className="text-right text-white">
        <div className="font-B_Nazanin">{title}</div>
        <div>{content}</div>
      </div>
      <div className="text-orange-500 text-2xl px-2">{Icon}</div>
    </div>
  );
}
