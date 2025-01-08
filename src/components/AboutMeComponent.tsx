import React from "react";
import kot from "../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import bookOfFiveRings from "../assets/Book_of_five_rings_audiobook.jpg";
import HeartSutra from "../assets/Heart_sutra_audiobook.jpg";
import PathwayToSurrender from "../assets/pathway_of_surrender_audiobook.jpg";

const AboutMeComponent = () => {
  const interests = {
    topics: [
      "Sports Rehabilitation",
      "Programming",
      "Personal Growth",
      "Meditation & Breathwork",
      "Evidence-based Holistic Lifestyle",
    ],
  };

  return (
    <div className="container mx-auto px-12 pt-32">
      <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
        <div className="flex-1 space-y-6 pt-8">
          <h1 className="text-4xl font-bold mb-8">O mnie / About me</h1>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
        <div className="py-12">
          <img
            src={kot}
            alt="Profile"
            className="rounded-lg shadow-xl hover:scale-105 transition-transform "
            width={500}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start gap-12 py-12">
        <div className="flex-1 bg-gray-50 p-6 rounded-lg">
          <p className="text-lg text-gray-600">
            Moje zainteresowania to połączenie pasji do zdrowia, technologii i
            ciągłego rozwoju osobistego.
          </p>
        </div>
        <div className="flex-1">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Zainteresowania</h2>
            <ul className="space-y-4">
              {interests.topics.map((topic) => (
                <li
                  key={topic}
                  className="text-gray-700 flex items-center gap-3 text-lg"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-24">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">My Favourite audiobooks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <img
                    src={bookOfFiveRings}
                    alt="Book of Five Rings"
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-gray-700 font-medium">
                    Book of Five Rings
                  </p>
                </div>
                <div className="space-y-2">
                  <img
                    src={HeartSutra}
                    alt="Heart Sutra"
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-gray-700 font-medium">
                    Heart Sutra
                  </p>
                </div>
                <div className="space-y-2">
                  <img
                    src={PathwayToSurrender}
                    alt="Pathway to Surrender"
                    className="w-full rounded-lg shadow-md hover:scale-105 transition-transform"
                  />
                  <p className="text-center text-gray-700 font-medium">
                    Pathway to Surrender
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 p-6 rounded-lg">
            <p className="text-lg text-gray-600">
              I enjoy listening to podcasts during my workouts, exploring
              #stressrelief techniques and improving both my mind and body
              simultaneously.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full max-w-[1400px] mx-auto py-12">
          <div className="bg-gray-50 p-6 rounded-lg w-full">
            <p className="text-lg text-gray-600">
              Being selective about high-quality content, I choose podcasts that
              deliver valuable insights in science, sports, and personal growth.
              I listen while working out and traveling. What I seek in those
              activities is #stressrelief
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Moje ulubione podcasty</h2>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <div className="flex-1 min-w-0 hover:scale-105 transition-transform">
                <iframe
                  src="https://open.spotify.com/embed/show/2MAi0BvDc6GTFvKFPXnkCL"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-gray-700 font-medium mt-2">
                  Lex Fridman Podcast
                </p>
              </div>
              <div className="flex-1 min-w-0 hover:scale-105 transition-transform">
                <iframe
                  src="https://open.spotify.com/embed/show/76yWrwFQ7H7JaFNv4UK35a"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-gray-700 font-medium mt-2">
                  Perform with Dr. Andy Galpin
                </p>
              </div>
              <div className="flex-1 min-w-0 hover:scale-105 transition-transform">
                <iframe
                  src="https://open.spotify.com/embed/show/5rgumWEx4FsqIY8e1wJNAk"
                  width="100%"
                  height="352"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg shadow-md"
                />
                <p className="text-center text-gray-700 font-medium mt-2">
                  Making Sense with Sam Harris
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
