import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import reactIcon from "../../assets/techstack/react.svg";
import nodeIcon from "../../assets/techstack/node.png";
import expressIcon from "../../assets/techstack/express.svg";
import nestIcon from "../../assets/techstack/nest.svg";
import typescriptIcon from "../../assets/techstack/typescript.svg";
import djangoIcon from "../../assets/techstack/django.svg";
import htmlIcon from "../../assets/techstack/html.svg";
import mongodbIcon from "../../assets/techstack/mongodb.svg";
import postgresqlIcon from "../../assets/techstack/postgresql.svg";
import reduxIcon from "../../assets/techstack/redux.svg";
import reactQueryIcon from "../../assets/techstack/reactquery.svg";
// @ts-expect-error js file
import { gsapLoop } from "../../lib/gsapLoop.js";

export const StackSection = () => {
  const containerRef = useRef(null);
  const techStack = [
    { name: "React.js", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "Nest.js", icon: nestIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Python / Django", icon: djangoIcon },
    { name: "HTML5 / CSS3", icon: htmlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "React Query", icon: reactQueryIcon },
  ];

  useEffect(() => {
    const boxes = gsap.utils.toArray(".tech-item");
    const loop = gsapLoop(boxes, {
      paused: false,
      snap: false,
      repeat: -1,
      speed: 0.4,
      paddingRight: 28,
    });

    return () => {
      loop.kill();
    };
  }, []);

  return (
    <div className="py-12 bg-gray-900 overflow-hidden">
      <h2 className="text-2xl font-bold mb-8 text-white text-center">
        Stack Technologiczny
      </h2>
      <div className="relative w-[200%] left-[-25%]">
        {" "}

        <div ref={containerRef} className="flex items-center">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-item flex flex-col items-center mx-4 min-w-[144px]" // Dodajemy minimalną szerokość
            >
              <div className="bg-zinc-200 p-4 rounded-lg w-20 h-20 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-gray-300 text-sm text-center mt-2 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
