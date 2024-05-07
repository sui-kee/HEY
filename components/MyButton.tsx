import clsx from "clsx";
import React from "react";

export default function MyButton({
  className = "",
  text,
  children,
  onClick,
}: {
  className?: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " p-1 px-2 sm:p-2 sm:px-3 rounded-md text-sm sm:text-sm md:text-lg hover:bg-[#038C8C] bg-[#025159] text-white",
        {
          [className]: className,
        }
      )}
    >
      {text}
      {children}
    </button>
  );
}
