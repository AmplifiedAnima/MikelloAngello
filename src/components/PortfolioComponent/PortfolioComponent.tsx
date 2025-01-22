import React from "react";
import { StackSection } from "../AboutMeComponent/StackSection.js";
import Footer from "../Footer.js";
import githubIcon from "../../assets/social-media/github-icon.svg";
import { portfolioProjects } from "../../utils/portfolio-projects.js";

export const ProjectPortfolio = () => {
  return (
    <>
      <div className="container px-6 py-24">
        <div className="space-y-36 p-8">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="flex flex-col">
              {/* Title Section */}
              <div className="flex items-center my-4">
                <h3 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-[1fr_4fr] gap-4">
                {/* Video Section */}
                <div className="relative aspect-video w-full xl:w-[50vw] xl:my-10">
                  <iframe
                    src={`https://www.loom.com/embed/${project.embedId}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>

                {/* Stack and Description Section */}
                <div className="bg-black/20 rounded-lg overflow-hidden grid grid-cols-1">
                  <div className="bg-black/20 px-6 md:px-8 xl:px-12 rounded-lg">
                    <div className="flex flex-col gap-8 md:gap-12 xl:gap-16">
                      <span className="text-2xl md:text-3xl xl:text-4xl mt-12 md:mt-16 xl:mt-24 mb-8">
                        Stack
                      </span>

                      {/* Stack Section */}
                      <div className="flex flex-wrap items-center gap-4">
                        <StackSection
                          techStackProps={project.stack}
                          containerClassName="py-1 px-4 rounded-2xl  sm:w-auto flex-1"
                          iconSize={{
                            container:
                              "w-14 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:py-4 ",
                            image: "w-14 h-16 md:w-12 md:h-12 lg:w-14 lg:h-14",
                          }}
                          textSize="text-sm md:text-base lg:text-lg"
                          speed={0.3}
                        />
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 xl:mb-6 lg:mb-4 md:mb-6 mb-4 flex items-center justify-center group flex-shrink-0 w-[5rem] mx-2 sm:w-auto  "
                        >
                          <img
                            src={githubIcon}
                            alt="GitHub Repository"
                            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-16 xl:w-12 xl:h-12 filter invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all "
                          />
                        </a>
                      </div>

                      {/* Description Section */}
                      <p className="text-xl lg:text-lg xl:text-[1.7rem] md:text-3xl w-full text-gray-300">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24" />
        <Footer />
      </div>
    </>
  );
};

export default ProjectPortfolio;
