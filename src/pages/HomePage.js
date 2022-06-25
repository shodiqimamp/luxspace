import React from 'react'

import Header from "../parts/Header";
import Hero from "../parts/homepage/Hero";
import JustArr from "../parts/homepage/JustArrived";
import BrowseRoom from "../parts/homepage/BrowseRoom";
import Client from "../parts/Client";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function Homepage() {
  useScrollAnchor();
  useModalDOM();

  return (
    <>
       <Header theme={"white"} position={"absolute"}/>
        <Hero/>
        <BrowseRoom/>
        <JustArr/>
        <Client/>
        <Sitemap/>
        <Footer/>
      </>
  )
}
