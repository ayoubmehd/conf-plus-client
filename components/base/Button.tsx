import React from "react";
import dynamic from "next/dynamic";
import getIcon from "../../utils/ui/getIcon";

type Props = {
  children: React.ReactNode;
  iconName?: string;
};

const Button: React.FC<Props> = ({ children, iconName }) => {
  return (
    <button
      disabled
      className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 gap-2 px-8 py-3"
    >
      <>
        {iconName && getIcon({ iconName })}
        {children}
      </>
    </button>
  );
};

export default Button;
