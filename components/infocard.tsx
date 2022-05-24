import React from "react";

export const InfoCard = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-lg md:aspect-square shadow-2xl flex flex-col justify-center items-center  mx-4 sm:mx-0 rounded-xl outline outline-1 outline-offset-0 outline-slate-100 bg-white bg-opacity-5 md:h-fit h-full md:max-w-1/3 sm:min-w-fit min-w-full md:px-4 px-2 md:py-4 py-2">
      {children}
    </div>
  );
};
