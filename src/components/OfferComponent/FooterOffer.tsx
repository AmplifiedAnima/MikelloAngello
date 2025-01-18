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
  // Common classes
  const sectionContainerClasses =
    "flex flex-col items-center lg:items-start xl:items-center gap-12 lg:gap-6 xl:gap-8";
  const headingClasses = "text-4xl lg:text-2xl font-medium";
  const textClasses =
    "text-4xl lg:text-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer";
  const socialIconClasses = "transform hover:scale-110 transition-transform";
  const socialImageClasses = "w-6 h-6 lg:w-8 lg:h-8";

  return (
    <footer className="text-white border-t border-gray-800">
      <div className="max-w-7xl  pt-8 lg:pt-10 xl:pt-12 px-4 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-12 lg:gap-16 ">
          {/* Logo/Brand Section */}
          <div className="flex items-center justify-center lg:justify-start xl:justify-center">
            <h2 className="text-xl lg:text-2xl font-semibold tracking-wide">
              Michał Czupa
            </h2>
          </div>

          {/* Contact Section */}
          <div className={sectionContainerClasses}>
            <h3 className={headingClasses}>Telefon</h3>
            <p className={textClasses}>+48 731 745 566</p>
          </div>

          {/* Email Section */}
          <div className={sectionContainerClasses}>
            <h3 className={headingClasses}>E-mail</h3>
            <p className={`${textClasses} break-all lg:break-normal`}>
              czupamichal@gmail.com
            </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center gap-8 lg:gap-6 xl:gap-8">
            <h3 className={headingClasses}>Social Media</h3>
            <div className="flex gap-4 bg-zinc-300/95 backdrop-blur-sm p-3 lg:p-4 rounded-xl lg:rounded-2xl">
              <a href="#" className={socialIconClasses}>
                <img
                  src={linkedInIcon}
                  alt="LinkedIn"
                  className={socialImageClasses}
                />
              </a>
              <a href="#" className={socialIconClasses}>
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className={socialImageClasses}
                />
              </a>
              <a href="#" className={socialIconClasses}>
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className={socialImageClasses}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
