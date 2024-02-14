import React from "react";
import data from "../../../data/Offer/Offer-data";

export default function Offer() {
  return (
    <div className="container  justify-center text-center">
      <h2 className="mb-14 text-4xl font-bold text-text-color ">
        What Shopex Offer!
      </h2>
      <div className=" mb-36 flex items-center justify-center gap-7">
        {data.map(({ img: Img, text, title }) => (
          <div className="max-w-[280px] justify-center pb-11 pl-7 pr-7  pt-16 text-center">
            <div className=" mb-7 flex  justify-center">
              <Img />
            </div>
            <h3 className="mb-5  text-2xl font-normal text-text-color">
              {title}
            </h3>
            <p className=" text-textcolor2 text-base font-bold">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
