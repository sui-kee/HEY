import clsx from "clsx";
import React from "react";

export default function MyButton({
  className = "",
  text,
  children,
}: {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={clsx(
        " p-2 px-3 rounded-md hover:bg-[#038C8C] bg-[#025159] text-white",
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
