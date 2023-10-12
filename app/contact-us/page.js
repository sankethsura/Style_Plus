"use client";

import React from "react";
import ContactUs from "../layouts/ContactUs";
import Title from "../UI/Title";

export default function contact() {
  return (
    <>
      <section className="w-[100vw] min-h-[100vh]  flex flex-col gap-5 py-8">
        {/* CONTACT FORM */}
        <Title className={`text-white`}> Contact us</Title>

        <div className="w-[90vw] sm:w-[50vw] mx-auto p-5 bg-white rounded-lg shadow-xl">
          <ContactUs inHeroSection />
        </div>
      </section>
      <img
        src="https://images.unsplash.com/photo-1585128833500-ec98262cb4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2279&q=80"
        className="opacity-20 w-full h-full fixed top-0 left-0 z-[-1] object-cover"
      />
    </>
  );
}
