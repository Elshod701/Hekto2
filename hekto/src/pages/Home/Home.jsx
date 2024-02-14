import React from "react";
import { Header } from "../../assets/components/layout/header/header";
import Banner from "./banner/banner";
import Cart from "./cart/cart";
import Products from "./products/products";
import Offer from "./Offer/Offer";
import Advertising from "./advertising/advertising";
import Popular from "./popular/popular";
import Discount from "./discount/discount";
import TopCatigoriy from "./top/topCatigoriy";
import LeatestBlog from "./LeatestBlog/LeatestBlog";
import Footer from "../../assets/components/layout/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Cart />
      <Products />
      <Offer />
      <Advertising />
      <Popular />
      <Discount />
      <TopCatigoriy />
      <LeatestBlog />
      <Footer />
    </>
  );
}
