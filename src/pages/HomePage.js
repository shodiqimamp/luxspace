import React from 'react'

import Header from '../parts/Header';
import Hero from '../parts/homepage/Hero';
import JustArr from '../parts/homepage/JustArrived';
import BrowseRoom from '../parts/homepage/BrowseRoom';
import Client from '../parts/Client';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
export default function homepage() {
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
