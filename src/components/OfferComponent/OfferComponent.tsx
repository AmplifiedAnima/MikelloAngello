import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import heartIcon from "../../assets/heart-rate.png";
import lungIcon from "../../assets/lungs.png";
import boneIcon from "../../assets/bone.png";
import brainIcon from "../../assets/brain.png";
import { Button } from "../ui/button";
import instagramIcon from "../../assets/social-media/instagram-icon.svg";
import githubIcon from "../../assets/social-media/github-icon.svg";
import linkedInIcon from "../../assets/social-media/linkedin-icon.svg";
import { Footer as FooterOffer } from "./FooterOffer";

export const OfferComponent = () => {
  const buttonClassStyles =
    "  w-[80vw] xl:w-[50vw] md:w-[90vw]  bg-transparent rounded-full border-2 border-solid border-indigo-500 px-12 py-10 sm:px-8 sm:py-6 lg:p-18 md:p-14  md:my-24  xl:p-14 xl:mt-10 xl:text-3xl sm:text-2xl md:text-4xl lg:text-4xl mt-8 sm:mt-12 lg:mt-16";

  const listItemsFirstPart =
    "flex flex-row place-items-center md:-12 gap-4 sm:gap-4 lg:gap-8 lg:text-4xl md:text-4xl xl:text-3xl xl:my-12 text-2xl  ";

  const listItemSecondPart =
    "text-center text-4xl sm:text-xl lg:text-6xl xl:text-8xl md:text-5xl ";
  return (
    <div className="px-4 sm:px-8 lg:px-28 py-6 sm:py-8 lg:py-12 text-white xl:mt-24 lg:mt-24 mt-4">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">
        {/* Left Content */}
        <div className="place-items-center">
          <div className="flex flex-col space-y-8 sm:space-y-8 place-items-start my-20 mt-24 xl:mt-0 lg:mt-0">
            <span className="text-4xl lg:text-4xl xl:text-7xl   whitespace-nowrap text-center mt-2 mx-auto mb-12 xl:mb-6">
              Zadbaj o #Trening
            </span>

            <ul className="space-y-16 sm:space-y-12 lg:space-y-12    xl:mx-24   ">
              <li className={listItemsFirstPart}>
                <img src={heartIcon} width={32} className=" lg:w-12" />
                <span>Wpłynie na Twoje serce</span>
              </li>
              <li className={listItemsFirstPart}>
                <img src={lungIcon} width={32} className="lg:w-12" />
                <span>Wpłynie na Twoje Płuca</span>
              </li>
              <li className={listItemsFirstPart}>
                <img src={boneIcon} width={32} className="lg:w-12" />
                <span>Wzmocni Twój Szkielet</span>
              </li>
              <li className={listItemsFirstPart}>
                <img src={brainIcon} width={32} className=" lg:w-12" />
                <span>Wzmocni Twoją Psychikę</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cat Image */}
        <div className=" sm:mt-12 xl:mt-20 py-12 lg:mt-24 ">
          <img
            src={kot}
            alt="Training"
            className=" mx-auto rounded-b-3xl xl:my-40 xl:w-[500px] sm:w-[500px] my-0"
          />
        </div>
      </div>
      <div className=" flex place-items-center justify-center my-4">
        <Button className={`${buttonClassStyles} `}>
          {`${"Stwórz Plan Dla Siebie"}`.toLocaleUpperCase()}
        </Button>
      </div>
      {/* Second Section */}
      <div className="mt-16 sm:mt-24 lg:mt-48">
        <ul className="space-y-[10vh] sm:space-y-16 lg:space-y-[80vh] md:space-y-[25vh]  ">
          <li className={listItemSecondPart}>Dostosuj Plan do Siebie</li>
          <li className={listItemSecondPart}>Zbuduj Wydolny Mięsień</li>
          <li className={listItemSecondPart}>Zwiększ zakresy ruchu</li>
          <li className={listItemSecondPart}>Zwiększ Wydolność</li>
          <li className={listItemSecondPart}>Zwiększ Siłę</li>
          <li className={listItemSecondPart}>Zwiększ Moc</li>
        </ul>
        <div className="flex justify-center xl:my-80 my-24">
          <Button className={buttonClassStyles}>
            ZREALIZUJ PRZYGOTOWANIE MOTORYCZNE
          </Button>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-16 sm:mt-24 lg:mt-32 ">
        <span className="block text-4xl sm:text-4xl lg:text-7xl text-center">
          Pozwól sobie na zdrowy #Load
        </span>

        <p className="mt-12 sm:mt-12 lg:mt-16 text-2xl  sm:text-xl lg:text-2xl text-center lg:text-right">
          Kontakt
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8">
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
