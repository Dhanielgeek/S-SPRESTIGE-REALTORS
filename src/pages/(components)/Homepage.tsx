import React from "react";
import Homelayouts from "../layouts/Homelayout";
import Head from "next/head";
import Hero from "./Hero";
import Services from "./Services";
import Trending from "./Trending";
import Testimonials from "./Testimonals";
import Newsletter from "./newsletter";
import Featurelistings from "./featurelistings";

const Homepage = () => {
  return (
    <Homelayouts>
      <Head>
        <title>S&S Prestige Realtors</title>
      </Head>
      <section>
        <Hero />
      </section>
      <section>
        <Featurelistings />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Trending />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Testimonials />
      </section>
    </Homelayouts>
  );
};

export default Homepage;
