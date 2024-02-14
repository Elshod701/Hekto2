import React from "react";
import data from "../../../data/advertising/advertising-data";
import Button from "../../../assets/components/layout/button/button";

export default function Advertising() {
  return (
    <div className=" bg-foundationwhite ">
      <div className="container mb-32">
        {data.map((e) => (
          <div className="  flex items-center pt-4">
            <div>
              <img src={e.img} alt="" />
            </div>
            <div className=" max-w-[570px]">
              <div>
                <h2 className=" mb-7 text-3xl font-bold text-text-color">
                  {e.title}
                </h2>
                <p className=" text-textcolor2 mb-4 text-base font-normal">
                  {e.text}
                </p>
                <p className=" text-textcolor2 mb-4 text-base font-normal">
                  {e.text2}
                </p>
                <p className=" text-textcolor2 mb-9 text-base font-normal">
                  {e.text3}
                </p>
              </div>
              <div className=" flex  items-center gap-5">
                <Button text="Add To Cart" />
                <div>
                  <p className="mb-1 text-sm font-normal text-text-color">
                    {e.info}
                  </p>
                  <p className="text-sm font-normal text-text-color">
                    {e.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
