import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/cart-data/cart";

export const Abaut = () => {
  const { id } = useParams();
  const data1 = data.find((item) => item.id == id);
  console.log(data1);
  return <div>{data1.title}</div>;
};
