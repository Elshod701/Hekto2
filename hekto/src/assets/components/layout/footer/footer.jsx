import React from "react";
import img from "../../../img/logo.svg";
import Button from "../button/button";
import data from "../../../../data/footer/footer-data";
import img1 from "../../../img/teligram.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-brilliantwhite">
        <div className="container flex  justify-between pb-24 pt-20">
          <div>
            <img src={img} alt="img" />
            <form className="relative mb-6 mt-9 ">
              <input
                className="w-[100%] max-w-[377px] pb-4   pl-5 pr-52 pt-4 text-sm font-normal"
                placeholder="Enter Email Address"
                type="text"
              />
              <div className="absolute right-[2px] top-[2px]">
                <Button text={"Sign Up"} />
              </div>
            </form>
            <div>
              <p className="mb-2 text-base font-normal text-textcolor2">
                Contact Info
              </p>
              <p className="text-base font-normal text-textcolor2">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          <div className=" flex items-center   gap-20">
            {data.map((e) => (
              <ul>
                <li className="mb-10 text-2xl font-normal ">{e.title}</li>
                <li className="mb-5">
                  <a
                    className=" text-base font-normal  text-textcolor2"
                    href="#"
                  >
                    {e.text}
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    className=" text-base font-normal  text-textcolor2"
                    href="#"
                  >
                    {e.text2}
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    className=" text-base font-normal  text-textcolor2"
                    href="#"
                  >
                    {e.text3}
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    className=" text-base font-normal  text-textcolor2"
                    href="#"
                  >
                    {e.text4}
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    className=" text-base font-normal  text-textcolor2"
                    href="#"
                  >
                    {e.text5}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8]">
        <div className="container flex justify-between pb-4 pt-4">
          <p className="text-base text-textcolor2 ">
            ©Webecy - All Rights Reserved
          </p>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
