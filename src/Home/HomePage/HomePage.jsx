import React from "react";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import SkillsSection from "../SkillsSection/SkillsSection";
import Education from "../Education/Education";
import ScrollToTopButton from "./../../component/ScrollToTopButton/ScrollToTopButton";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";

const HomePage = () => {
  return (
    <div className="space-y-8">
      <Hero />
      <AboutMe />
      <SkillsSection />
      <Education />
      <ProjectsSection />
      <ContactSection />

      {/* Scroll To Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
