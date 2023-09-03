"use client";

import { List } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CarousalSection from "./layouts/CarousalSection";
import ContactUs from "./layouts/ContactUs";
import HeroSection from "./layouts/HeroSection";
import WhatWeDo from "./layouts/WhatWeDo";

export default function Home() {
  const [ham, setHam] = useState(false);

  const router = useRouter();

  const navLinks = [
    {
      text: "Gallery",
      link: "/gallery",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Contact Us",
      link: "/contact-us",
    },
  ];

  //on scroll change navbar color to black

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHam(false);
    });
  }, []);

  return (
    <main className="flex flex-col text-black">
      {/*  HAMBURGER MENU */}
      {ham ? (
        <section className="w-[100vw] h-[100vh] z-[20] bg-black/70 fixed">
          <div
          //with logo and close button
          >
            <div className="flex items-center justify-between px-12 py-5 text-white translate-y-1">
              <section>Logo</section>
              <section
                className="flex items-center justify-center gap-5 text-white"
                onClick={() => {
                  setHam(!ham);
                }}
              >
                <List size={32} />
              </section>
            </div>
          </div>
          <div>
            {navLinks.map((link) => (
              <p
                className="text-white mx-10 px-3 py-4 hover:bg-white hover:text-black cursor-pointer"
                onClick={() => {
                  router.push(link.link);
                  setHam(!ham);
                }}
              >
                {link.text}
              </p>
            ))}
          </div>
        </section>
      ) : (
        <nav className="w-full h-[80px] text-white bg-black/50  fixed flex items-center justify-between px-12 z-[10] ">
          <section>Logo</section>
          <section
            className="flex sm:hidden"
            onClick={() => {
              setHam(!ham);
            }}
          >
            <List size={32} />
          </section>
          <section className=" items-center justify-between hidden sm:flex ">
            <div className="flex items-center justify-center gap-5">
              <p>Gallery</p>
              <p>About</p>
              <button className="px-4 py-2 border">Contact Us</button>
            </div>
          </section>
        </nav>
      )}
      <section className="w-[100vw] h-[90vh] bg-black relative  overflow-x-hidden">
        {/* HERO SECTION */}
        <img
          src={"/interior.png"}
          className="w-full h-full object-cover opacity-40"
        />
        <HeroSection />
      </section>

      <section className="w-[100vw] flex flex-col gap-5 bg-[#36454F]/30">
        {/* LATEST WORKS */}
        <p className="font-medium text-xl text-white w-[80vw] mx-auto mt-10">
          Some Latest Works
        </p>
        <CarousalSection />
      </section>

      <section className="w-[80vw] mx-auto items-center justify-center my-10">
        {/* ABOUT US */}
        <p className="font-medium text-xl text-white">What We Do</p>
        <WhatWeDo />
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="w-[100vw] h-[100vh] bg-yellow-100">
        TESTIMONIALS
      </section> */}

      <section className="w-[100vw] flex flex-col gap-5 bg-[#36454F]/30">
        {/* CONTACT FORM */}
        <p className="font-medium text-xl text-white w-[80vw] mx-auto mt-10">
          Contact Us
        </p>
        <ContactUs />
      </section>

      {/* FOOTER */}
      {/* <footer className="w-[100vw] h-[20vh] bg-yellow-100">
        FOOTER SECTIONS
      </footer> */}
    </main>
  );
}
