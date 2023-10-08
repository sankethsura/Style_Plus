"use client";

import React, { useState } from "react";
import Button from "../UI/button";
import Spinner from "../UI/spinner";
import createToast from "../UI/toast";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname: info?.fullname,
        email: info?.email,
        message: info?.message,
        phoneNumber: info?.phoneNumber,
      }),
    });

    const { msg, success } = await res.json();

    console.log(msg, success);

    if (success) {
      setLoading(false);
      createToast("Message sent successfully", "success");
      setInfo({
        fullname: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <section className=" w-[90vw] sm:w-[50vw] m-auto mb-10 text-black">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <></>
      )}

      <form className="flex flex-col gap-3">
        <label className="text-white" for="name">
          Name
        </label>
        <input
          className="bg-gray-100 rounded py-3 px-2 border"
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={info?.fullname}
          onChange={(e) => {
            setInfo({
              ...info,
              fullname: e.target.value,
            });
          }}
        ></input>
        <label className="text-white" for="email">
          Email
        </label>
        <input
          className="bg-gray-100 rounded py-3 px-2 border"
          type="text"
          id="email"
          name="email"
          placeholder="Your email.."
          value={info?.email}
          onChange={(e) => {
            setInfo({
              ...info,
              email: e.target.value,
            });
          }}
        ></input>
        <label className="text-white" for="phone">
          Phone Number
        </label>
        <input
          className="bg-gray-100 rounded py-3 px-2 border"
          type="text"
          id="phone"
          name="phone"
          placeholder="Your phone number.."
          value={info?.phoneNumber}
          onChange={(e) => {
            setInfo({
              ...info,
              phoneNumber: e.target.value,
            });
          }}
        ></input>
        <label className="text-white" for="message">
          Message
        </label>
        <textarea
          className="bg-gray-100 rounded py-3 px-2 border"
          id="message"
          name="message"
          placeholder="Write something.."
          style={{ height: "200px" }}
          value={info?.message}
          onChange={(e) => {
            setInfo({
              ...info,
              message: e.target.value,
            });
          }}
        ></textarea>
      </form>
      <div
        className="w-full flex justify-center"
        onClick={() => {
          handleSubmit();
        }}
      >
        <Button text="Submit" />
      </div>
    </section>
  );
}
