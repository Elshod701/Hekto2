import React from "react";
import data from "../../../data/Discount/Discount-data";
import { NaysIcon } from "../../../assets/components/icons/naysIcon";
import Button from "../../../assets/components/layout/button/button";

export default function Discount() {
  const [state, setState] = React.useState(data[0].WoodChair);
  const title = Object.keys(data[0]);
  const changerTap = (slug) => {
    setState(data[0][slug]);
  };
  return (
    <div className="container">
      <div className="justify-center ">
        <h2 className="mb-8 text-center text-4xl font-bold text-text-color">
          Discount Item
        </h2>

        <div className="flex justify-center gap-14">
          {title.map((e) => (
            <button
              className="border-b-2 border-transparent text-lg text-text-color  hover:border-b-2 hover:border-pink  hover:text-pink"
              onClick={() => changerTap(e)}
            >
              {e}
            </button>
          ))}
        </div>
        <div>
          {state.map((item) => (
            <div className="mb-20 flex items-center  justify-between">
              <div className="w-[100%] max-w-[523px]">
                <h2 className=" mb-4 text-4xl  font-bold text-text-color">
                  {item.title}
                </h2>
                <p className="mb-5 text-xl font-normal text-pink">{item.des}</p>
                <p className="mb-7 text-lg  font-normal  text-textcolor2">
                  {item.text}
                </p>
                <div className=" mb-9 flex justify-between ">
                  <div>
                    <div className="mb-3 flex  items-center  gap-2 text-textcolor2">
                      <NaysIcon />
                      <p>{item.convenience}</p>
                    </div>
                    <div className="mb-3 flex  items-center gap-2 text-textcolor2">
                      <NaysIcon />
                      <p>{item.convenience2}</p>
                    </div>
                  </div>
                  <div>
                    <div className="items-cente  mb-3  flex gap-2 text-textcolor2">
                      <NaysIcon />
                      <p>{item.convenience3}</p>
                    </div>
                    <div className="items-cente  mb-3 flex gap-2 text-textcolor2">
                      <NaysIcon />
                      <p>{item.convenience4}</p>
                    </div>
                  </div>
                </div>
                <Button text="Shop Now" />
              </div>
              <div>
                <img src={item.img} alt="img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
