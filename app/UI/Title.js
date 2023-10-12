import React from "react";
import { twMerge } from "tailwind-merge";

export default function Title({ children, className }) {
  const combined = twMerge(
    "w-full font-medium text-2xl text-gray-700 text-center",
    className
  );
  return <p className={combined}>{children}</p>;
}
