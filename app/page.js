"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";
import CarouselComponent from "./component/Carrousal";
import CarousalSection from "./layouts/CarousalSection";
import HeroSection from "./layouts/HeroSection";

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
        <HeroSection />
      </section>

      <section className="w-[100vw]">
        {/* LATEST WORKS */}
        <CarousalSection />
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
