import React from "react";

export default function Button({ text, inHeroSection }) {
  return (
    <button
      className={`border px-4 py-2 mt-4 rounded ${
        inHeroSection
          ? "bg-white text-black border-black"
          : "bg-black text-white border-white"
      }`}
    >
      {text}
    </button>
  );
}
