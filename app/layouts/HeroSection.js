import React from "react";
import CarouselComponent from "../component/Carrousal";

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
        <button className="border px-4 py-2 mt-4 border-white">
          Get Quote for Free
        </button>
      </div>
      <div className="absolute w-[50%] top-[50%] right-10 -translate-y-1/2 h-[50vh] hidden sm:flex">
        <CarouselComponent
          noText={true}
          fixHeight={true}
          numberOfSlides={3}
          images={[
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
            "https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80",
          ]}
        />
      </div>
    </section>
  );
}
