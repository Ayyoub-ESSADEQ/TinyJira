import * as React from "react";

interface BtnProps {
  active?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({ active, icon, children, className }: BtnProps) {
  const bgColor = active ? "bg-[#ebecf0]" : "bg-[#f4f5f7]";
  const textColor = active ? "text-[#2a52ce]" : "text-black";
  return (
    <div
      className={`${className} flex flex-row items-center rounded-[3px] w-full h-10 ${bgColor} ${textColor} px-3 py-2 select-none hover:cursor-pointer`}
    >
      <div>{icon}</div>
      <div className="pl-3">{children}</div>
    </div>
  );
}
