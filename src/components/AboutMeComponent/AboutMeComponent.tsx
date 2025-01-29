import React from "react";
import { BookSection } from "./BookSection";
import { StackSection, techStack } from "../StackSection";
import { PodcastSection } from "./PodcastSection";
import { AboutMeSection } from "./AboutMeSection";
import Footer from "../Footer";
import { Button } from "../ui/button";
// import { InstagramVideoComponent } from "./InstagramVideoComponent";
import { useNavigate } from "@tanstack/react-router";

export const AboutMeComponent = () => {
  const navigate = useNavigate();

  const handleNavigateToPortfolio = () => {
    navigate({ to: "/portfolio" });
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-7xl mx-auto">
        <AboutMeSection />

        <BookSection />
        <div className="py-12" />
        <PodcastSection />
        <div className="py-12" />
        <h2 className="text-2xl font-bold mb-24 text-white text-center">
          Stack Technologiczny, w którym programuje
        </h2>

        <StackSection techStackProps={techStack} />

        <div className="grid grid-cols-1 py-24 place-items-center ">
          <Button onClick={handleNavigateToPortfolio} className="xl:w-[20vw] lg:w-[20vw] py-10 text-2xl">
            Portfolio
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
};
