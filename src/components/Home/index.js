import React from "react";
import "./index.css";
import Header from "../Header";
import AboutWorkshop from "../AboutWorkshop";
import BulletPoints from "../BulletPoints";
import CheckboxList from "../CheckboxList";
import Reviews from "../Reviews";
import WhatYouGet from "../WhatYouGet";
import WhyAttendingWorkshop from "../WhyAttendingWorkshop";
import Bonuses from "../Bonuses";
import Certification from "../Certification";
import SpecialDesignedFor from "../SpecialDesignedFor";
import MeetYourMentor from "../MeetYourMentor";
import DoYouKnow from "../DoYouKnow";
import FAQSection from "../FAQSection";

const Home = () => (
  <div className="homeinnerContainer">
    <Header />
    <AboutWorkshop />
    <BulletPoints />
    <CheckboxList />
    <Reviews />
    <WhatYouGet />
    <WhyAttendingWorkshop />
    <Bonuses />
    <Certification />
    <SpecialDesignedFor />
    <MeetYourMentor />
    <DoYouKnow />
    <FAQSection />
  </div>
);

export default Home;
