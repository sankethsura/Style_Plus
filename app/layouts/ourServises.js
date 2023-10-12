import { Coins, CompassTool, ShootingStar, Tag } from "@phosphor-icons/react";
import React from "react";
import Title from "../UI/Title";

export default function OurServises() {
  const servises = [
    {
      title: "Personalized Design",
      icon: <CompassTool size={32} />,
    },
    {
      title: "Flat 10 years warranty",
      icon: <ShootingStar size={32} />,
    },
    {
      title: "Free Consultation",
      icon: <Tag size={32} />,
    },
    {
      title: "Transparent Pricing",
      icon: <Coins size={32} />,
    },
  ];
  return (
    <section className="flex flex-col items-start px-10 bg-white w-full gap-5 py-8">
      <Title>Our Services</Title>

      <div className=" flex flex-col sm:flex-row gap-5 justify-center bg-white text-black w-full">
        {servises.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-5  p-5 rounded-md"
          >
            <p>{item.icon}</p>
            <p className="font-semibold text-sm text-black">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
