import React from "react";
import data from "../../../data/LeatestBlog/LeatestBlog-data";
import { Pencil } from "../../../assets/components/icons/pencil";
import { DataIcon } from "../../../assets/components/icons/dataIcon";

export default function LeatestBlog() {
  return (
    <div className="container ">
      <div className="mb-28">
        <h2 className="mb-20 text-center text-4xl font-bold text-text-color">
          Leatest Blog
        </h2>
        <div className="flex   justify-center gap-14">
          {data.map((e) => (
            <div className="max-w-[390px]  rounded shadow-lg">
              <div className=" mb-4 truncate rounded">
                <img src={e.img} alt="img" />
              </div>
              <div className="pb-9 pl-5 pr-12">
                <div className=" mb-9 flex gap-7">
                  <div className="flex items-center gap-2">
                    <Pencil />
                    <p className="text-sm text-text-color">{e.ai}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DataIcon />
                    <p className="text-sm text-text-color">{e.data}</p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-lg font-bold text-text-color">
                    {e.title}
                  </h3>
                  <p className="mb-3 text-base font-normal text-textcolor2">
                    {e.text}
                  </p>
                  <button className=" text-base font-normal  text-text-color hover:border-b-2 hover:border-pink hover:text-pink">
                    {e.more}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
