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
      title: "Medical Lexicon Application",
      embedId: "7715bb83565247639464cfab692b3ccc",
      description:
        "Leksykon dla tłumaczy medycznych umożliwiający naukę i zarządzanie słownictwem. Zawiera funkcje quizu, dodawania nowych terminów oraz sugerowania słów do bazy danych.",
      stack: LexiconStack,
      github: "https://github.com/AmplifiedAnima/InterpreterMapProject",
    },
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
  ];

  return (
    <>
      <div className="container px-2 py-32">
        <div className="space-y-36 p-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col ">
              <div className="flex items-center my-4">
                <h3 className="xl:text-5xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-[1fr_4fr] gap-4">
                <div className="relative aspect-video w-[50vw] xl:my-10">
                  <iframe
                    src={`https://www.loom.com/embed/${project.embedId}`}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-lg"
                  />
                </div>
                <div className="bg-black/20 rounded-lg overflow-hidden grid xl:grid-cols-1">
                  <div className="bg-black/20 px-10 rounded-lg">
                    <div className="">
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-1">
                          <span className="xl:text-4xl mt-24 mb-8 text-2xl">Stack</span>
                          <StackSection
                            techStackProps={project.stack}
                            containerClassName="py-1 px-4 rounded-2xl xl:w-[25.5vw] xl:h-[14vh] "
                            iconSize={{
                              container: "w-16 h-16",
                              image: "w-14 h-14",
                            }}
                            textSize="text-lg"
                            speed={0.3}
                          />
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/10 hover:bg-white/20 transition-all rounded-lg p-4 flex items-center group self-end my-4  mx-8
                          hover:text-xl "
                        >
                          <img
                            src={githubIcon}
                            alt="GitHub Repository"
                            className="w-40 h-12 xl:w-12 xl:h-12  filter invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                          />
                        </a>
                      </div>
                    </div>
                    <p className="text-[1.5rem] text-gray-300 my-12 ">
                      {project.description}
                    </p>
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
