import React from "react";

export default function Button({ text, type }) {
  return (
    <button
      type={type}
      className="rounded bg-pink pb-3   pl-8 pr-8  pt-3 text-base font-normal text-wayt"
    >
      {text}
    </button>
  );
}
