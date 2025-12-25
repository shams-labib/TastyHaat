import React from "react";
import TopSlider from "../Hero/Slider/TopSlider";
import Hero from "../Hero/Hero";
import WhyChooseUs from "../Hero/WhyChooseUs/WhyChooseUs";
import MenuCards from "./MenuCards";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <WhyChooseUs></WhyChooseUs>
      <MenuCards></MenuCards>
    </div>
  );
};

export default Home;
