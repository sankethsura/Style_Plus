"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";
import CarouselComponent from "./component/Carrousal";

export default function Home() {
  return (
    <main className="flex flex-col text-black">
      <nav className="w-full h-[80px] text-white bg-black/50  fixed flex items-center justify-between px-12 z-[10]">
        <section>Logo</section>
        <section className="flex sm:hidden">
          <List size={32} />
        </section>
        <section className=" items-center justify-between hidden sm:flex">
          <div className="flex items-center justify-center gap-5">
            <p>Gallery</p>
            <p>About</p>
            <button className="px-4 py-2 border">Contact Us</button>
          </div>
        </section>
      </nav>
      <section className="w-[100vw] h-[100vh] bg-black relative">
        {/* HERO SECTION */}
        <img
          src={"/interior.png"}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute top-[35%] left-[50%] translate-x-[-50%] sm:top-[40%] sm:left-[20%] text-white z-[1] flex flex-col gap-8">
          <p className="sm:text-6xl sm:font-bold text-3xl font-bold">STYLE +</p>
          <p className="sm:text-lg text-md">INTERIORS AND RENOVATIONS</p>
          <button className="border px-4 py-2 border-white">
            Get Quote for Free
          </button>
        </div>
      </section>

      <section className="w-[100vw]">
        {/* LATEST WORKS */}
        <CarouselComponent
          images={[
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
            "https://plus.unsplash.com/premium_photo-1686090448422-de8536066f64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2800&q=80",
          ]}
        />
      </section>

      <section className="w-[100vw] h-[100vh] bg-red-100">
        {/* ABOUT US */}
        ABOUT
      </section>

      <section className="w-[100vw] h-[100vh] bg-yellow-100">
        {/* TESTIMONIALS */}
        TESTIMONIALS
      </section>

      <section className="w-[100vw] h-[100vh] bg-red-100">
        {/* CONTACT FORM */}
        CONTACT US
      </section>

      <footer className="w-[100vw] h-[20vh] bg-yellow-100">
        {/* FOOTER */}
        FOOTER SECTIONS
      </footer>
    </main>
  );
}
