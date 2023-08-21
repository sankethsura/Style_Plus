"use client";

import { List } from "@phosphor-icons/react";
import Image from "next/image";
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

      <section className="w-[100vw] h-[100vh] bg-yellow-100">
        {/* LATEST WORKS */}
        LATEST WORKS
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
