import { BookSection } from "./BookSection";
import { InterestsSection } from "./InterestSection";
import { PodcastSection } from "./PodcastSection";
import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import { AboutMeSection } from "./AboutMeSection";

export const AboutMeComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8 px-24 py-8">O mnie</h1>
            <div className="prose prose-lg space-y-16 px-24">
              <AboutMeSection />
            </div>
          </div>
          <div className="lg:w-1/3 py-8">
            <img
              src={kot}
              alt="Profile"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform w-full"
            />
          </div>
        </div>

        <InterestsSection />
        <BookSection />
        <PodcastSection />
      </div>
    </div>
  );
};
