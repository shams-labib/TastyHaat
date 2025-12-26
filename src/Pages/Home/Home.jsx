import React from "react";
import TopSlider from "../Hero/Slider/TopSlider";
import Hero from "../Hero/Hero";
import WhyChooseUs from "../Hero/WhyChooseUs/WhyChooseUs";
import MenuCards from "./MenuCards";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div>
      <TopSlider></TopSlider>
      <MenuCards></MenuCards>
      <Hero></Hero>
      <About></About>
      <WhyChooseUs></WhyChooseUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
