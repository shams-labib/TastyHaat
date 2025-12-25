import React from "react";
import Hero from "../Hero";
import HeroCard from "../HeroCard";

const Home = () => {
  return (
    <div>
      <h1 className="bg-accent">Outlet Successfully Worked</h1>
      <Hero></Hero>
      <HeroCard></HeroCard>
    </div>
  );
};

export default Home;
