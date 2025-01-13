import React from "react";
import { BookSection } from "./BookSection";
import { StackSection } from "./InterestSection";
import { PodcastSection } from "./PodcastSection";
import { AboutMeSection } from "./AboutMeSection";
// import { InstagramVideoComponent } from "./InstagramVideoComponent";

export const AboutMeComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8 px-6 lg:px-24 py-8">
              O mnie
            </h1>
            <div className="space-y-16 ">
              <AboutMeSection />
            </div>
          </div>

          {/* <InstagramVideoComponent /> */}
        </div>

        <BookSection />
        <PodcastSection />
        <StackSection />
      </div>
    </div>
  );
};
