import Link from "next/link";
import React from "react";
import Button from "../UI/button";
import { Button1 } from "../UI/Button1";
import Title from "../UI/Title";

export default function CTA_1() {
  return (
    <div className="w-full bg-gray-100 flex py-8 flex-col gap-5">
      <Title className="text-gray-900 flex justify-center">
        The home design you crave
      </Title>
      <p className="text-gray-900 sm:w-[60vw] w-[90vw] flex justify-center mx-auto text-center">
        When you give your home the Livspace touch, you get both beauty and
        functionality. We employ state-of-the-art technology to ensure your home
        features a flawless look that lasts a very long time.
      </p>
      <div className="flex justify-center">
        <Link href="/contact-us">
          <Button1 className=" text-bold bg-yellow-500 w-[280px]">
            BOOK FREE CONSULTATION
          </Button1>
        </Link>
      </div>
    </div>
  );
}
