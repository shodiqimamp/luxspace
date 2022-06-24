import React from "react";

import Header from "../parts/Header";
import Breadcrumb from "../components/Breakcrumb/index";
// import ProductDetail from '../parts/details/ProductDetail';
// import Suggestions from '../parts/details/Suggestions';
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import ShoppingCart from "../parts/carts/ShoppingCart";
import ShippingDetail from "../parts/carts/ShippingDetail";

export default function Cart() {
  return (
    <>
      <Header theme={"black"} />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
             <ShoppingCart />
             <ShippingDetail/>
          </div>
        </div>
      </section>
      {/* <ProductDetail/>
        <Suggestions/> */}
      <Sitemap />
      <Footer />
    </>
  );
}
