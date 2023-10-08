import React, { useEffect, useState } from "react";

export default function WhatWeDo() {
  const [infos, setInfos] = useState([
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ]);

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

  //get dashboard data from database
  const getInfos = async () => {
    const res = await fetch("api/dashboard", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data?.dashboard[0]?.whatWeDo);
    setInfos(data?.dashboard[0]?.whatWeDo);
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-5 mt-5">
      {infos &&
        infos?.map((item, index) => (
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
