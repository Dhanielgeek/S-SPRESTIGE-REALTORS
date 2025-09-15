import React from "react";
import Homelayouts from "../layouts/Homelayout";
import Head from "next/head";
import Hero from "./Hero";

const Homepage = () => {
  return (
    <Homelayouts>
      <Head>
        <title>S&S Prestige Realtors</title>
      </Head>
      <section>
        <Hero />
      </section>
    </Homelayouts>
  );
};

export default Homepage;
