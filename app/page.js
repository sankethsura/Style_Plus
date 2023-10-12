"use client";

import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CarousalSection from "./layouts/CarousalSection";
import ContactUs from "./layouts/ContactUs";
import CTA_1 from "./layouts/CTA_1";
import HeroSection from "./layouts/HeroSection";
import OurServises from "./layouts/ourServises";
import WhatWeDo from "./layouts/WhatWeDo";
import Title from "./UI/Title";

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
    <main className="flex flex-col bg-white">
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
              <Link href="/gallery">
                <p>Gallery</p>
              </Link>
              <Link href="/about">
                <p>About</p>
              </Link>
              <Link href="/contact-us">
                <button className="px-4 py-2 border">Contact Us</button>
              </Link>
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
      <section className="w-[100vw] bg-black relative  overflow-x-hidden">
        {/* SERVICES */}

        <OurServises />
      </section>
      <section className="w-[100vw] bg-black relative  overflow-x-hidden">
        {/* CTA - 1 */}

        <CTA_1 />
      </section>
      <section className="w-[100vw] flex flex-col gap-5 bg-[#36454F]/30">
        {/* LATEST WORKS */}
        <CarousalSection />
      </section>
      <section className="w-[100vw] mx-auto items-center justify-center">
        {/* WHAT WE DO */}
        <WhatWeDo />
      </section>
      <section className="w-[100vw] flex flex-col gap-5 bg-gray-50 py-8">
        {/* CONTACT FORM */}
        <Title> Contact us</Title>

        <div className="w-[90vw] sm:w-[50vw] mx-auto p-5 bg-white rounded-lg shadow-xl">
          <ContactUs inHeroSection />
        </div>
      </section>
    </main>
  );
}
