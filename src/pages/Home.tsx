import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Products />
    </Layout>
  );
};

export default Home;
