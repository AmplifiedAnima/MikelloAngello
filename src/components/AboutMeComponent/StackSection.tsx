import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
//@ts-expect-error js file
import { gsapLoop } from "../../lib/gsapLoop.js";

// Tech stack icons
import reactIcon from "../../assets/techstack/react.svg";
import nodeIcon from "../../assets/techstack/nodejs.svg";
import expressIcon from "../../assets/techstack/express.svg";
import nestIcon from "../../assets/techstack/nest.svg";
import typescriptIcon from "../../assets/techstack/typescript.svg";
import djangoIcon from "../../assets/techstack/django.svg";
import htmlIcon from "../../assets/techstack/html.svg";
import mongodbIcon from "../../assets/techstack/mongodb.svg";
import postgresqlIcon from "../../assets/techstack/postgresql.svg";
import reduxIcon from "../../assets/techstack/redux.svg";
import reactQueryIcon from "../../assets/techstack/reactquery.svg";
import reactRouterIcon from "../../assets/techstack/react-router.svg";
import tailwindIcon from "../../assets/techstack/tailwind.svg";
// import sqlLiteIcon from "../../assets/techstack/sqlite.svg";
import pythonIcon from "../../assets/techstack/python.svg";
import zodIcon from "../../assets/techstack/zod.svg";
import RemixIcon from "../../assets/techstack/remix.svg";
import supaBaseIcon from "../../assets/techstack/supabase.svg";
import muiIcon from "../../assets/techstack/MUI.png";
// All available tech stack
export const techStack = [
  { name: "React.js", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "Nest.js", icon: nestIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Python / Django", icon: djangoIcon },
  { name: "HTML5 / CSS3", icon: htmlIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Zod", icon: zodIcon },
  { name: "React Query", icon: reactQueryIcon },
  { name: "React/Router", icon: reactRouterIcon },
  { name: "Remix", icon: RemixIcon },
  { name: "Supabase", icon: supaBaseIcon },
  { name: "MUI", icon: muiIcon },
];

// Project-specific tech stacks
export const MedicalJobBoardStack = [
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React.js", icon: reactIcon },
  { name: "React/Router", icon: reactRouterIcon },
  { name: "Nest.js", icon: nestIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "MUI", icon: muiIcon },
  { name: "Node.js", icon: nodeIcon },
];

export const SchedulerStack = [
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React.js", icon: reactIcon },
  { name: "React/Router", icon: reactRouterIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Nest.js", icon: nestIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MUI", icon: muiIcon },
];

export const LexiconStack = [
  { name: "TypeScript", icon: typescriptIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "React/Router", icon: reactRouterIcon },
  { name: " Django", icon: djangoIcon },
  { name: "Tailwind", icon: tailwindIcon },
  // { name: "Python", icon: pythonIcon },
  { name: "Zod", icon: zodIcon },
];

interface StackSectionProps {
  techStackProps: { name: string; icon: string }[];
  containerClassName?: string;
  iconSize?: {
    container?: string;
    image?: string;
  };
  textSize?: string;
  speed?: number;
}

export const StackSection = ({
  techStackProps,
  containerClassName = "py-12",
  iconSize = {
    container: "w-20 h-20",
    image: "w-20 h-20",
  },
  textSize = "text-sm",
  speed = 0.4,
}: StackSectionProps) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".tech-item");
    const loop = gsapLoop(boxes, {
      paused: false,
      snap: false,
      repeat: -1,
      speed: speed,
      paddingRight:14

    });

    return () => {
      loop.kill();
    };
  }, [speed]);

  return (
    <div className={`${containerClassName} bg-transparent overflow-hidden `}>
      <div className="relative w-[200%] left-[-35%]">
        <div ref={containerRef} className="flex items-center">
          {techStackProps.map((tech) => (
            <div
              key={tech.name}
              className="tech-item flex flex-col items-center mx-4 min-w-[144px]"
            >
              <div
                className={`bg-white p-4 rounded-lg ${iconSize.container} flex items-center justify-center`}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`${iconSize.image} object-contain`}
                />
              </div>
              <span
                className={`text-gray-300 ${textSize} text-center mt-2 whitespace-nowrap`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage for portfolio:
// <StackSection
//   techStackProps={MedicalJobBoardStack}
//   containerClassName="py-6"
//   iconSize={{ container: "w-12 h-12", image: "w-10 h-10" }}
//   textSize="text-xs"
//   speed={0.3}
// />
