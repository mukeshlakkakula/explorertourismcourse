import React from "react";
import Header from "../Header";
import Intro from "../Intro";
import WhatLearn from "../WhatLearn";
import WhyLearn from "../WhyLearn";
import Footer from "../Footer";
import "./index.css";
const Home = () => {
  return (
    <div>
      <div className="homeinnerContainer">
        <Header />
        <Intro />
        <WhyLearn />
        <WhatLearn />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
