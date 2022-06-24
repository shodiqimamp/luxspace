import React from 'react'

import Header from '../parts/Header';
import Breadcrumb from '../components/Breakcrumb/index';
import ProductDetail from '../parts/details/ProductDetail';
import Suggestions from '../parts/details/Suggestions';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

export default function homepage() {
  return (
    <>
        <Header theme={"black"}/>

        <Breadcrumb list={[
          { url: "/", name: "Home"},
          { url: "/categories/91231", name: "Office Room"},
          { url: "/categories/91231/products/7888", name: "Details"},
        ]}/>
        <ProductDetail/>
        <Suggestions/>
        <Sitemap/>
        <Footer/>
    </>
  )
}
