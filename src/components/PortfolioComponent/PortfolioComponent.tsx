import React from "react";
import { StackSection } from "../AboutMeComponent/StackSection.js";
import {
  MedicalJobBoardStack,
  SchedulerStack,
  LexiconStack,
} from "../AboutMeComponent/StackSection.js";
import Footer from "../Footer.js";
import githubIcon from "../../assets/social-media/github-icon.svg";

export const ProjectPortfolio = () => {
  const projects = [
    {
      title: "Medical Job Board",
      embedId: "2ee143c9b4b140b48b37a06bf4d16abe",
      description:
        "Portal z ogłoszeniami o pracę dla branży medycznej. Umożliwia wyszukiwanie ofert pracy według specjalizacji i lokalizacji, aplikowanie na stanowiska oraz zarządzanie aplikacjami. Pracodawcy mogą publikować oferty pracy i przeglądać otrzymane zgłoszenia.",
      stack: MedicalJobBoardStack,
      github: "https://github.com/AmplifiedAnima/medoppRepository",
    },
    {
      title: "Scheduler",
      embedId: "3b2e2f8c9dee43fe8bb2e5c7f22f9688",
      description:
        "Aplikacja do planowania zajęć jogi i ćwiczeń ruchowych. Pozwala na rezerwację terminów z uwzględnieniem ograniczeń czasowych, limitu dziennych zajęć oraz zarządzanie profilem użytkownika.",
      stack: SchedulerStack,
      github: "https://github.com/AmplifiedAnima/ourbodyisload",
    },
    {
      title: "Medical Lexicon Application",
      embedId: "7715bb83565247639464cfab692b3ccc",
      description:
        "Leksykon dla tłumaczy medycznych umożliwiający naukę i zarządzanie słownictwem. Zawiera funkcje quizu, dodawania nowych terminów oraz sugerowania słów do bazy danych.",
      stack: LexiconStack,
      github: "https://github.com/AmplifiedAnima/InterpreterMapProject",
    },
  ];

  return (
    <>
      <div className="container px-12 py-48">
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-6 p-4">
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4">
                <div className="relative aspect-video w-full">
                  <iframe
                    src={`https://www.loom.com/embed/${project.embedId}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <div className="bg-black/20 rounded-lg overflow-hidden grid grid-cols-1">
                  <div className="bg-black/20 p-6 rounded-lg">
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-grow h-23 overflow-hidden">
                          Stack
                          <StackSection
                            techStackProps={project.stack}
                            containerClassName="py-4 px-4"
                            iconSize={{
                              container: "w-16 h-16",
                              image: "w-16 h-16",
                            }}
                            textSize="text-md"
                            speed={0.8}
                          />
                        </div>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20  transition-all rounded-lg p-4 flex items-center group  hover:justify-end flex"
                      >
                        <img
                          src={githubIcon}
                          alt="GitHub Repository"
                          className="w-10 h-10 filter invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                        />
                      </a>
                      <p className="text-xl text-gray-300 mt-6">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <div className="py-12" />
    </>
  );
};

export default ProjectPortfolio;
