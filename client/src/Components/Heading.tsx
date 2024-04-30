import { ReactNode } from "react";

export function H1({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="pb-[15px] text-[21px] box-border w-full font-CircularStdBook leading-[1.2] text-[#172b4d]">
      {children}
    </div>
  );
}

export function H2({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="text-[#5e6c84] text-[13px] block font-CircularStdMedium pb-2">
      {children}
    </div>
  );
}
