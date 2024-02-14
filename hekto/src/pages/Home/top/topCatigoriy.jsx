import React from "react";
import data from "../../../data/cart-data/cart";
import Button from "../../../assets/components/layout/button/button";
import { Servese } from "../../../assets/components/icons/servese";

export default function TopCatigoriy() {
  return (
    <>
      <div className="container">
        <div>
          <h2 className=" mb-14 text-center text-4xl font-bold text-text-color">
            Top Categories
          </h2>

          <div className="mb-44 flex justify-center gap-9">
            {data.map((e) => (
              <div className="  text-center">
                <div className=" mb-7 rounded-[50%]  bg-bgcolor p-14  shadow-lg transition-all hover:scale-[.9]  hover:shadow-indigo-500/90">
                  <img
                    className="h-[158] w-40 object-cover  duration-500"
                    src={e.img}
                    alt=""
                  />
                </div>
                <div>
                  <p className="mb-3 text-xl font-normal text-text-color">
                    {e.title}
                  </p>
                  <p className="text-base font-normal text-text-color">
                    {e.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-24 bg-banner bg-cover pb-24 pt-32">
        <div className="container max-w-[610px] text-center">
          <h2 className=" mb-7 text-4xl  font-bold leading-[150%] text-text-color">
            Get Leatest Update By Subscribe 0ur Newslater
          </h2>
          <Button text={"Shop Now"} />
        </div>
      </div>
      <div className=" contianer mb-24 flex justify-center">
        <div>
          <Servese />
        </div>
      </div>
    </>
  );
}
