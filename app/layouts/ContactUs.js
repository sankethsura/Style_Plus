import React from "react";
import Button from "../UI/button";
export default function ContactUs() {
  //contact form with name, email, phone number and message
  return (
    <section className=" w-[90vw] sm:w-[50vw] m-auto mb-10">
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
        ></textarea>
        <Button text="Submit" />
      </form>
    </section>
  );
}
