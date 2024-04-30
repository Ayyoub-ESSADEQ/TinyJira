import { ReactNode } from "react";

export function Modal({ children }: { children?: ReactNode }) {
  return (
    <div className="h-full w-full flex items-center justify-center fixed left-0 top-0 bg-[#091e428a]">
      <div className="max-w-[800px] w-[800px] max-h-[600px] bg-white rounded-md px-[40px] py-[25px]">
        {children}
      </div>
    </div>
  );
}
