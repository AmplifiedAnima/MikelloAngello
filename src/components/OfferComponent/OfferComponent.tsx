import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import heartIcon from "../../assets/heart-rate.png";
import lungIcon from "../../assets/lungs.png";
import boneIcon from "../../assets/bone.png";
import brainIcon from "../../assets/brain.png";
import chartIcon from "../../assets/chart.png";
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
    "text-2xl bg-transparent mx-2 flex items-center rounded-full gap-10 border-r-48 p-12 border-2 border-solid border-indigo-500";

  return (
    <div className="px-4 sm:px-8 lg:px-28 py-8 lg:py-32 text-white grid grid-cols-1 gap-16 lg:gap-32">
      {/* First Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col gap-6 lg:gap-8">
          <span className="text-4xl sm:text-6xl lg:text-8xl">
            Zadbaj o swoje zdrowie
          </span>
          <span className="text-2xl lg:text-4xl text-center lg:mx-24">
            #Stressrelief
          </span>
          <div className="justify-center place-items-center">
            <ul className="mt-8 lg:mt-12 space-y-8 lg:space-y-12 text-xl sm:text-2xl lg:text-3xl text-start">
              <li className="flex flex-row items-center">
                <img src={heartIcon} width={40} className="mx-4" />
                Wpłynie na twoje serce
              </li>
              <li className="flex flex-row items-center">
                <img src={lungIcon} width={40} className="mx-4" />
                Wpłynie na Twoje Płuca
              </li>
              <li className="flex flex-row items-center">
                <img src={boneIcon} width={40} className="mx-4" />
                Wzmocni twoje Mięśnie i kości
              </li>
              <li className="flex flex-row items-center">
                <img src={brainIcon} width={40} className="mx-4" />
                Wpłynie pozytywnie na Psychike
              </li>
              <Button className={buttonClassStyles}>
                <img src={chartIcon} width={40} />
                {`${"Stwórz Plan Dla Siebie"}`.toLocaleUpperCase()}
              </Button>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <img src={kot} alt="Training" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Second Section */}
      <div className="mt-8 lg:mt-0">
        <div className="text-xl place-items-center">
          <ul className="mt-12 place-items-center text-2xl sm:text-3xl lg:text-4xl space-y-16 sm:space-y-24 lg:space-y-72">
            <span className="text-2xl sm:text-3xl block text-center">
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
      <div className="grid grid-cols-1 gap-8 lg:gap-12">
        <div>
          <div className="mt-8 text-xl">
            <ul className="mt-8 lg:mt-12 space-y-8">
              <li>
                <span className="text-4xl sm:text-6xl lg:text-7xl block text-center">
                  Pozwól sobie na zdrowy #Load
                </span>
              </li>
              <li className="pt-12 lg:pt-24">
                <span className="text-2xl lg:text-4xl text-center"></span>
              </li>
            </ul>
          </div>
          <p className="text-2xl lg:text-3xl text-center lg:text-end py-8 lg:py-12 mt-8 lg:mt-12">
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
