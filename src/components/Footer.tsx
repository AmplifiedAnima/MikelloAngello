import React from "react";
import instagramIcon from "../assets/social-media/instagram-icon.svg";
import githubIcon from "../assets/social-media/github-icon.svg";
import linkedInIcon from "../assets/social-media/linkedin-icon.svg";

export const Footer = () => {
  return (
    <footer className="text-white border-t border-gray-800 py-8 lg:py-12 xl:py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-12 lg:gap-16">
        <div className="flex items-center justify-center lg:justify-start xl:justify-start">
          <h2 className="text-xl lg:text-2xl font-semibold tracking-wide">
            Michał Czupa
          </h2>
        </div>
        <div className="flex flex-col items-center lg:items-start xl:items-start gap-4 lg:gap-2 xl:gap-2">
          <h3 className="text-2xl lg:text-lg xl:text-lg font-medium">
            Telefon
          </h3>
          <p className="text-2xl lg:text-lg xl:text-lg opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
            +48 731 745 566
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start xl:items-start gap-4 lg:gap-2 xl:gap-2">
          <h3 className="text-2xl lg:text-lg xl:text-lg font-medium">E-mail</h3>
          <p className="text-2xl lg:text-lg xl:text-lg opacity-90 hover:opacity-100 transition-opacity cursor-pointer break-all lg:break-normal xl:break-normal">
            czupamichal@gmail.com
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 lg:gap-4 xl:gap-4">
          <h3 className="text-2xl lg:text-lg xl:text-lg font-medium">
            Social Media
          </h3>
          <div className="flex gap-4 bg-zinc-300/95 backdrop-blur-sm p-3 lg:p-4 xl:p-4 rounded-xl lg:rounded-2xl xl:rounded-2xl">
            <a
              href="https://www.linkedin.com/in/michal-czupa-89800b115/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className="w-6 h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
              />
            </a>
            <a
              href="https://www.instagram.com/mikello_angello"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-6 h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
              />
            </a>
            <a
              href="https://www.github.com/amplifiedanima"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-6 h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
