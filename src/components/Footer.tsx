import React from "react";
import instagramIcon from "../assets/social-media/instagram-icon.svg";
import githubIcon from "../assets/social-media/github-icon.svg";
import linkedInIcon from "../assets/social-media/linkedin-icon.svg";
const footerStyles = {
  footer:
    "text-white border-t border-gray-800 py-8 lg:py-12 xl:py-16 px-4 lg:px-8",
  container:
    "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-12 lg:gap-16",
  nameHeading:
    "text-xl lg:text-lg xl:text-xl font-semibold tracking-wide text-center",
  columnContainer:
    "flex flex-col items-center lg:items-start xl:items-start gap-4 lg:gap-2 xl:gap-2",
  heading: "text-2xl lg:text-lg xl:text-xl font-medium",
  text: "text-2xl lg:text-lg xl:text-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer",
  email:
    "text-2xl lg:text-lg xl:text-xl opacity-90 hover:opacity-100 transition-opacity cursor-pointer break-all lg:break-normal xl:break-normal",
  socialContainer: "flex flex-col items-center gap-6 lg:gap-4 xl:gap-4",
  socialIconsWrapper:
    "flex gap-4 bg-zinc-300/95 backdrop-blur-sm p-3 lg:p-4 xl:p-4 rounded-xl lg:rounded-2xl xl:rounded-2xl",
  socialLink: "transform hover:scale-110 transition-transform",
  socialIcon: "w-6 h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8",
};

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div>
          <h2 className={footerStyles.nameHeading}>Michał Czupa</h2>
        </div>
        <div className={footerStyles.columnContainer}>
          <h3 className={footerStyles.heading}>Telefon</h3>
          <div className="py-2" />
          <p className={footerStyles.text}>+48 731 745 566</p>
        </div>
        <div className={footerStyles.columnContainer}>
          <h3 className={footerStyles.heading}>E-mail</h3>
          <div className="py-2" />
          <p className={footerStyles.email}>czupamichal@gmail.com</p>
        </div>
        <div className={footerStyles.socialContainer}>
          <h3 className={footerStyles.heading}>Social Media</h3>
          <div className="py-[1px] " />
          <div className={`${footerStyles.socialIconsWrapper} ml-8`}>
            <a
              href="https://www.linkedin.com/in/michal-czupa-89800b115/"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.socialLink}
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                className={footerStyles.socialIcon}
              />
            </a>
            <a
              href="https://www.github.com/amplifiedanima"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.socialLink}
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className={footerStyles.socialIcon}
              />
            </a>
            <a
              href="https://www.instagram.com/mikello_angello"
              target="_blank"
              rel="noopener noreferrer"
              className={footerStyles.socialLink}
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className={footerStyles.socialIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
