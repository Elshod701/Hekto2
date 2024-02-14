import React from "react";
import data from "../../../data/products/products-data";
import { Carzinkart } from "../../../assets/components/icons/carzinkart";
import { CartLIke } from "../../../assets/components/icons/cartLIke";
import { CartZoom } from "../../../assets/components/icons/cartZo'm";

export default function Products() {
  const [state, setState] = React.useState(data[0].NewArrivall);
  const titles = Object.keys(data[0]);
  const changerTab = (slug) => {
    setState(data[0][slug]);
  };
  return (
    <>
      <div className="container">
        <div className="justify-center text-center">
          <h2 className="mb-5 text-4xl font-bold text-text-color">
            Leatest Products
          </h2>
          <div className="mb-14 flex justify-center gap-14">
            {titles.map((e) => (
              <button
                onClick={() => changerTab(e)}
                className=" border-b-2 border-transparent text-lg text-text-color hover:border-b-2 hover:border-pink  hover:text-pink"
              >
                {e}
              </button>
            ))}
          </div>

          <div className="  mb-[59px] flex  flex-wrap justify-center gap-9">
            {state.map((item) => (
              <div className="max-w-[365px]" key={item.id}>
                <div className=" mb-4 flex pl-4 pr-16 pt-8 hover:bg-bgcolor">
                  <div className=" grid  gap-4  pr-5   ">
                    <Carzinkart />
                    <CartLIke />
                    <CartZoom />
                  </div>
                  <div>
                    <img
                      className="object-cover transition-all duration-500 hover:scale-[.9]
"
                      src={item.img}
                      alt="img"
                    />
                  </div>
                </div>
                <div className=" flex justify-between">
                  <p className="border-b-2 border-bgcolor text-base text-text-color">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-normal text-text-color">
                      {item.price}
                    </p>
                    <p className=" text-xs text-pink line-through">
                      {item.discount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
