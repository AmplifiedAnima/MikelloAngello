import React from "react";
import { BookSection } from "./BookSection";
import { StackSection } from "./InterestSection";
import { PodcastSection } from "./PodcastSection";
import { AboutMeSection } from "./AboutMeSection";
import Footer from "../Footer";
// import { InstagramVideoComponent } from "./InstagramVideoComponent";

export const AboutMeComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="flex-1 space-y-6">
            <div className="space-y-16 ">
              <AboutMeSection />
            </div>
          </div>

          {/* <InstagramVideoComponent /> */}
        </div>

        <BookSection />
        <div className="py-12" />
        <PodcastSection />
        <div className="py-12" />
        <StackSection />
        <div className="py-12 mt-12" >
        <Footer />
        </div>
      </div>
    </div>
  );
};
