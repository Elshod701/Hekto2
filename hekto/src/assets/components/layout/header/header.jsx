import React from "react";
import { SmsIcon } from "../../icons/smsIcon";
import { TelIcon } from "../../icons/telIcon";
import { UserIcon } from "../../icons/userIcon";
import { LikeIcon } from "../../icons/likeIcon";
import { Karzinka } from "../../icons/karzinka";
import logo from "../../../img/logo.svg";
import data from "./header-data";
import { Zoom } from "../../icons/zoom";

export const Header = () => {
  return (
    <header>
      <div className="bg-prime pb-3 pt-3">
        <div className="container flex justify-between">
          <div className="flex gap-14">
            <div className="flex items-center gap-3">
              <SmsIcon />
              <a className=" text-base font-semibold text-wayt" href="">
                mhhasanul@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <TelIcon />
              <a className=" text-base font-semibold  text-wayt" href="prime">
                (12345)67890
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <select className="border-none bg-transparent text-base  font-semibold   text-wayt">
              <option value="English">English</option>
              <option value="English">English</option>
              <option value="English">English</option>
            </select>
            <select className="border-none bg-transparent text-base  font-semibold   text-wayt">
              <option value="USD">USD</option>
              <option value="USD">USD</option>
              <option value="USD">USD</option>
            </select>
            <div className=" flex cursor-pointer items-center gap-1">
              <p className="text-base font-semibold text-wayt">Login</p>
              <UserIcon />
            </div>
            <div className="  flex cursor-pointer items-center gap-2">
              <p className="text-base font-semibold text-wayt">Wishlist</p>
              <LikeIcon />
            </div>
            <div className=" cursor-pointer pl-3">
              <Karzinka />
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5 pt-5">
        <div className="flex items-center justify-between ">
          <div>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <ul className="flex  gap-9">
            {data.map((item) => (
              <li className="text-base font-normal" key={item.path}>
                {item.name}
              </li>
            ))}
          </ul>
          <form className="flex">
            <input
              type="text"
              class="block w-full  border-0  text-gray-900 ring-1 ring-inset ring-gray-300 "
            />
            <button
              type="submit"
              className="bg-pink block w-10 pb-2 pl-2 pr-5 pt-2"
            >
              <Zoom />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
