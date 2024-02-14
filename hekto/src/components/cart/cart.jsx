import React from "react";
import { Carzinkart } from "../../assets/components/icons/carzinkart";
import { CartLIke } from "../../assets/components/icons/cartLIke";
import { CartZoom } from "../../assets/components/icons/cartZo'm";
import { CartIcons } from "../../assets/components/icons/cartIcons";
import { Link } from "react-router-dom";
export const Cart1 = ({ code, img, title, price, id }) => {
  return (
    <>
      <div className="mb-32 w-72">
        <div className=" shadow-[rgb(255, 255, 255)]  shadow-md">
          <div className="bg-rgb(246, 247, 251)  pb-4 pl-3 pr-3 pt-3 ">
            <div className="  absolute    flex     items-center gap-4  ">
              <Link to={`/cart/${id}`}>
                <Carzinkart />
              </Link>
              <CartLIke />
              <CartZoom />
            </div>
            <div className=" mt-4 justify-center text-center">
              <div className="pl-10">
                <img
                  className=" h-44 w-44 transition-transform   group-hover:rotate-3 group-hover:scale-125 "
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="pb-4 hover:bg-prime hover:text-wayt  ">
            <h1 className="mb-3 text-lg font-bold text-pink hover:text-wayt">
              {title}
            </h1>
            <div className="ml-[40%] ">
              <CartIcons />
            </div>
            <p className="mb-3 mt-3 text-sm font-normal">{code}</p>
            <p className="text-sm font-normal "> $ {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
