import React from "react";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import SkillsSection from "../SkillsSection/SkillsSection";
import Education from "../Education/Education";
import ScrollToTopButton from "./../../component/ScrollToTopButton/ScrollToTopButton";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <Hero />
      <AboutMe />
      <SkillsSection id="skills" />
      <Education id="education" />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
