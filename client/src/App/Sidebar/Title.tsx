import { useLoaderData } from "react-router-dom";

export default function Title() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { boardData } = useLoaderData() as any;

  return (
    <div className="flex flex-row items-center w-full h-fit py-6">
      <div className="size-10 rounded-md bg-red-300"></div>
      <div className="pt-[3px] pl-[10px]">
        <div className="text-[14px] text-[#42526e] font-CircularStdMedium font-[700]">
          {boardData.metaData.title}
        </div>
        <div className="text-[14px] text-[#5e6c84] font-CircularStdMedium">
          Software Project
        </div>
      </div>
    </div>
  );
}
