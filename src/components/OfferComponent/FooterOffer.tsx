import React from "react";

export const Footer = ({
  linkedInIcon,
  githubIcon,
  instagramIcon,
}: {
  linkedInIcon: string;
  githubIcon: string;
  instagramIcon: string;
}) => {
  return (
    <footer className="text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto pt-12 px-6">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-48">
          {/* Logo/Brand Section */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide text-center">
              Michał Czupa
            </h2>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-12">
            <h3 className="text-2xl font-medium text-center">Telefon</h3>
            <p className="text-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer text-center">
              +48 731 745 566
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col gap-12">
            <h3 className="text-2xl font-medium text-center">E-mail</h3>
            <p className="text-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer text-center">
              czupamichal@gmail.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col gap-12 items-center">
            <h3 className="text-2xl font-medium text-center">Social Media</h3>
            <div className="flex gap-4 bg-zinc-300/95 backdrop-blur-sm p-4 rounded-2xl">
              <a
                href="#"
                className="transform hover:scale-110 transition-transform"
              >
                <img src={linkedInIcon} alt="LinkedIn" width={32} height={32} />
              </a>
              <a
                href="#"
                className="transform hover:scale-110 transition-transform"
              >
                <img src={githubIcon} alt="GitHub" width={32} height={32} />
              </a>
              <a
                href="#"
                className="transform hover:scale-110 transition-transform"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
