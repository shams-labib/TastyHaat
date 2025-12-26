import React from "react";
import TopSlider from "../Hero/Slider/TopSlider";
import Hero from "../Hero/Hero";
import WhyChooseUs from "../Hero/WhyChooseUs/WhyChooseUs";
import MenuCards from "./MenuCards";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <WhyChooseUs></WhyChooseUs>
      <MenuCards></MenuCards>
      <Contact></Contact>
    </div>
  );
};

export default Home;
