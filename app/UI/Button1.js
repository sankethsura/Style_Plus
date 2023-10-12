import React from "react";
import { twMerge } from "tailwind-merge";
// import "../../src/index.css";

export const Button1 = ({
  children,
  className,
  small,
  secondary,
  disabled,
  icon,
  loading,
  ...rest
}) => {
  const combined = twMerge(
    ` ${
      secondary
        ? "border border-[#6D5DE7] text-[#6D5DE7] hover:text-[#6559C1] hover:border-[#6559C1] bg-white hover:bg-violet-50"
        : " bg-[#6D5DE7] hover:bg-[#6559C1] text-white "
    }  duration-200 rounded-[4px] sm:py-2.5 sm:px-4 ${
      small
        ? " text-sm px-4 py-2.5 font-medium  "
        : " text-md  py-[14px] px-6 font-semibold  "
    } `,
    `${
      disabled
        ? ` ${
            secondary
              ? "border-[#B6AEF3] hover:border-[#B6AEF3] hover:text-[#B6AEF3] text-[#B6AEF3]"
              : "bg-[#B6AEF3] hover:bg-[#B6AEF3]"
          } cursor-not-allowed`
        : "  "
    }`,
    className
  );

  return (
    <>
      <button className={combined} disabled={disabled} {...rest}>
        {loading ? (
          <svg
            className="animate-spin w-full"
            width="24"
            height="24"
            fill={!secondary ? `#FFF` : "#6D5DE7"}
            viewBox="0 0 256 256"
          >
            <path d="M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"></path>
          </svg>
        ) : (
          children
        )}
      </button>
    </>
  );
};
