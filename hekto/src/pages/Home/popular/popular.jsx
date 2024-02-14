import React from "react";
import data from "../../../data/cart-data/cart";
import cart from "../../../data/cart-data/cart-info";
import img from "../../../assets/img/shop-img.svg";
import img2 from "../../../assets/img/polka.svg";

export default function Popular() {
  return (
    <div className="container">
      <div>
        <h2 className=" mb-9 text-4xl font-bold text-text-color">
          Trending Products
        </h2>
        <div className="mb-10 flex justify-center gap-7 text-center ">
          {data.map((e) => (
            <div>
              <div className="shadow-[rgb(255,  255, 255)] max-w-[270px]  pb-8 pl-3 pr-3  pt-3 shadow-md ">
                <div className="mb-4 bg-bgcolor">
                  <img
                    className="object-cover transition-all duration-500 hover:scale-[.9]"
                    src={e.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="mb-2 text-base font-bold text-text-color ">
                    {e.title}
                  </h2>
                  <div className="flex items-center  justify-center gap-3">
                    <p className="text-sm font-normal text-text-color">
                      {e.price}
                    </p>
                    <p className="text-xs font-normal text-textcolor2 line-through">
                      {e.discount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-32 flex   justify-between">
          <div className=" w-[100%] max-w-[420px] bg-[#FFF6FB] pl-6 pr-1  pt-8">
            <h2 className=" text-3xl font-normal text-text-color">
              23% off in all products
            </h2>
            <div className="flex  justify-between">
              <p className="mt-3  text-base  text-pink underline">Shop Now</p>
              <img src={img} alt="img" />
            </div>
          </div>
          <div className="w-[100%] max-w-[420px] bg-[#EEEFFB] pl-6 pr-1  pt-8">
            <h2 className="text-3xl font-normal text-text-color">
              23% off in all products
            </h2>
            <div className="  justify-between">
              <p className="mt-3  text-base  text-pink underline">
                View Collection
              </p>
              <img className="pl-24" src={img2} alt="img" />
            </div>
          </div>
          <div className="">
            {cart.map((e) => (
              <div className="mb-7  flex  w-[100%] max-w-[277px]">
                <div className="bg-bgcolor  pb-1 pl-5 pr-5 pt-1">
                  <img src={e.img} alt="" />
                </div>

                <div className="pl-2">
                  <h3 className=" mb-1 text-base font-bold text-text-color">
                    {e.title}
                  </h3>
                  <p className="text-xs font-normal text-text-color line-through">
                    {e.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
