import React from "react";
import data from "../../../data/cart-data/cart";
import { CartZoom } from "../../../assets/components/icons/cartZo'm";
import { Carzinkart } from "../../../assets/components/icons/carzinkart";
import { CartLIke } from "../../../assets/components/icons/cartLIke";
import { CartIcons } from "../../../assets/components/icons/cartIcons";
import { Cart1 } from "../../../components/cart/cart";

export default function Cart() {
  return (
    <>
      <div className="container mt-32  justify-center text-center">
        <h1 className="mb-12 text-4xl font-bold text-text-color">
          Featured Products
        </h1>
        <div className=" flex justify-between  gap-7">
          {data.map((e) => (
            <Cart1
              id={e.id}
              code={e.code}
              img={e.img}
              title={e.title}
              price={e.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
