import React from "react";

export default function WhatWeDo() {
  let arr = [
    {
      title: "Interior Design",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Interior Design",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      title: "Interior Design",
      description:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-5">
      {arr.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-5 border border-gray-600 p-5 rounded-md"
        >
          <p className="font-medium text-xl text-white">{item.title}</p>
          <p className="text-gray-400 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
