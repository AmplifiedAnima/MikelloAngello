import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import heartIcon from "../../assets/heart-rate.png";
import lungIcon from "../../assets/lungs.png";
import boneIcon from "../../assets/bone.png";
import brainIcon from "../../assets/brain.png";
// import chartIcon from "../../assets/chart.png";
import { Button } from "../ui/button";
import { useEffect } from "react";
import instagramIcon from "../../assets/social-media/instagram-icon.svg";
import githubIcon from "../../assets/social-media/github-icon.svg";
import linkedInIcon from "../../assets/social-media/linkedin-icon.svg";
import { Footer as FooterOffer } from "./FooterOffer";
export const OfferComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const buttonClassStyles =
    "lg:text-2xl bg-transparent  lg:mx-32 rounded-full gap-4 px-6  lg:gap-10 border-r-48 py-8 md:p-12  lg:p-12  border-2 border-solid border-indigo-500 text-md  mx-24 mt-24";
  const listItems = "flex flex-row items-center mx-8 md:mx-20 text-lg lg:text-3xl md:text-4xl lg:gap-8 ";
  return ( 
    <div className="px-12 lg:px-28 lg:py-12   text-white grid grid-cols-1   lg:pt-10 md:pt-32 ">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 sm:gap-4   place-items-center">
        <div className="flex flex-col  mx-12">
          <span className="text-4xl sm:text-sm lg:text-7xl  lg:mx-6 mx-12 md:mx-20   md:text-7xl md:text-start   whitespace-nowrap md:mb-12">
            Zadbaj o #Trening
          </span>
          {/* <span className="text-2xl lg:text-4xl text-center lg:mx-24">
            #Stressrelief
          </span> */}
          <div className="justify-center place-items-center ">
            <ul className="mt-0 lg:mt-8 lg:space-y-12 space-y-12 text-sm sm:text-2xl lg:text-3xl text-start  md:text-4xl  whitespace-nowrap  ">
              <li className={listItems}>
                <img src={heartIcon} width={40} className="mx-6 " />
                Wpłynie na twoje serce
              </li>
              <li className={listItems}>
                <img src={lungIcon} width={40} className="mx-6" />
                Wpłynie na Twoje Płuca
              </li>
              <li className={listItems}>
                <img src={boneIcon} width={40} className="mx-6" />
                Wzmocni twoje Mięśnie i kości
              </li>
              <li className={listItems}>
                <img src={brainIcon} width={40} className="mx-6" />
                Wzmocni Twoją Psychikę
              </li>
            <div className=""></div>
              <Button className={buttonClassStyles}>
                {`${"Stwórz Plan Dla Siebie"}`.toLocaleUpperCase()}
                {/* <img src={chartIcon} width={40} /> */}
              </Button>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <img
            src={kot}
            alt="Training"
            className="max-w-full h-auto  rounded-b-3xl pt-32"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-8 lg:mt-24">
        <div className="text-xl place-items-center">
          <ul className="mt-12 place-items-center text-lg sm:text-3xl lg:text-4xl space-y-16 sm:space-y-24 lg:space-y-72">
            <span className="l block text-center">
              ZREALIZUJ PRZYGOTOWANIE MOTORYCZNE
            </span>
            <li className="text-center">Dostosuj plan dla Siebie</li>
            <li className="text-center">Zwiększ poziom masy mięśniowej</li>
            <li className="text-center">Zwiększ zakresy ruchu</li>
            <li className="text-center">Zwiększ Wydolność</li>
            <li className="text-center">Zwiększ Siłę</li>
            <li className="text-center">Zwiększ Moc</li>
            <Button className={buttonClassStyles}>
              <p>PRZYGOTOWANIE MOTORYCZNE</p>
            </Button>
          </ul>
        </div>
      </div>

      {/* Third Section */}
      <div className="grid grid-cols-1 gap-4 lg:gap-12">
        <div>
          <div className="my-24 lg:my-8 text-xl">
            <ul className="lg:mt-12 space-y-8">
              <li>
                <span className=" text-5xl sm:text-6xl lg:text-7xl block text-center lg:pt-32">
                  Pozwól sobie na zdrowy #Load
                </span>
              </li>
            </ul>
          </div>
          <p className="text-2xl lg:text-3xl text-center lg:text-end py-12 lg:py-12 lg:mt-12 lg:mx-12 mt-0">
            Kontakt
          </p>
          <FooterOffer
            instagramIcon={instagramIcon}
            githubIcon={githubIcon}
            linkedInIcon={linkedInIcon}
          />
        </div>
      </div>
    </div>
  );
};
