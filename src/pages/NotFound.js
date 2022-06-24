import React from "react";
import { Link } from "react-router-dom";

import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import PageError from "../parts/PageError";

export default function NotFound() {
  return (
    <>
      <Header theme={"black"} />

      <PageError />
      <Sitemap />
      <Footer />

    </>
  );
}
