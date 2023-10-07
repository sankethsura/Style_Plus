"use client";

import React from "react";
import ContactUs from "../layouts/ContactUs";

export default function contact() {
  return (
    <div>
       <p className="font-medium text-xl md:text-3xl text-white flex justify-center my-4 md:my-10">
          Contact Us
        </p>
      <ContactUs />
    </div>
  );
}
