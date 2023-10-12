import React from "react";
import CarouselComponent from "../component/Carrousal";
import Link from "next/link";
import ContactUs from "./ContactUs";

export default function HeroSection() {
  return (
    <section className="flex ">
      <div className="absolute top-[35%] left-[50%] translate-x-[-50%] sm:top-[40%] sm:left-[20%] text-white z-[1] flex flex-col items-center sm:items-start gap-2">
        <p className="sm:text-6xl sm:font-bold text-3xl font-bold text-center">
          STYLE +
        </p>
        <p className="sm:text-lg text-sm text-center font-semibold ">
          INTERIORS AND RENOVATIONS
        </p>
        <Link href="/contact-us">
          <button className="border px-4 py-2 mt-4 border-white">
            Contact Us
          </button>
        </Link>
      </div>
      <div className="absolute top-24 right-10  hidden sm:flex">
        <div className="w-[500px]  rounded-lg p-5 bg-white">
          <ContactUs inHeroSection />
        </div>
      </div>
    </section>
  );
}
