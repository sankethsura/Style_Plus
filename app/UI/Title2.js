import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title2({ children, className }) {
  const combined = twMerge(
    "w-full font-medium text-xl text-gray-700 text-center",
    className
  );
  return <p className={combined}>{children}</p>;
}
