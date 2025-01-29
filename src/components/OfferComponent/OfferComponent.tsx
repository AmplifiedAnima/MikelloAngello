// import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import heartIcon from "../../assets/heart-rate.png";
import lungIcon from "../../assets/lungs.png";
import boneIcon from "../../assets/bone.png";
import brainIcon from "../../assets/brain.png";
import { Button } from "../ui/button";
import { Footer as FooterOffer } from "../Footer";
import { TestimonalsComponent } from "./Testimonals";
import { Link } from "@tanstack/react-router";
import { BlockQuoteInstagram } from "../AboutMeComponent/InstagramVideoComponent";
import { useEffect, useState } from "react";

const offerStyles = {
  container:
    "px-4 sm:px-8 lg:px-28 py-6 sm:py-8 lg:py-12 text-white xl:mt-24 lg:mt-24 mt-4",
  mainGrid: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
  leftColumn: "place-items-center",
  flexContainer:
    "flex flex-col space-y-8 sm:space-y-8 place-items-start my-20 mt-24 xl:mt-0 lg:mt-0",
  mainHeading:
    "text-4xl lg:text-4xl xl:text-7xl whitespace-nowrap text-center mt-2 mx-auto mb-12 xl:mb-6",
  iconList: "space-y-16 sm:space-y-12 lg:space-y-12 xl:mx-24",
  listItemFirst:
    "flex flex-row place-items-center gap-4 sm:gap-4 lg:gap-8 xl:text-4xl lg:text-2xl md:text-4xl md:p-2 xl:text-[27px] xl:my-12 text-2xl",
  listItemSecond:
    "text-center text-2xl lg:text-6xl xl:text-8xl md:text-6xl px-4",
  icon: "lg:w-12",
  imageContainer: "sm:mt-12 xl:mt-40 py-12 lg:mt-24",
  image: "mx-auto rounded-b-3xl xl:my-40 xl:w-[500px] sm:w-[500px] my-0",
  buttonContainer: "flex place-items-center justify-center my-4",
  mainButton: "2xl:w-1/3 xl:w-[40vw] p-12 text-xl",
  contentSection: "mt-24 sm:mt-24 lg:mt-48",
  testimonialsList:
    "space-y-[10vh] sm:space-y-16 lg:space-y-[80vh] md:space-y-[25vh]",
  athleteButtonContainer: "flex justify-center xl:my-80 my-24",
  athleteButton: "p-12 text-2xl xl:w-[32vw] lg:w-[45vw]",
  bottomSection: "mt-16 sm:mt-24 lg:mt-32",
  bottomHeading: "block text-4xl sm:text-4xl lg:text-7xl text-center mb-28",
  footerContainer: "mt-4 sm:mt-6 lg:mt-8",
  spanText: "xl:text-3xl text-2xl",
};

export const OfferComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={offerStyles.container}>
      <div className={offerStyles.mainGrid}>
        <div className={offerStyles.leftColumn}>
          <div className={offerStyles.flexContainer}>
            <span className={offerStyles.mainHeading}>Zadbaj o #Trening</span>

            <ul className={offerStyles.iconList}>
              <li className={offerStyles.listItemFirst}>
                <img src={heartIcon} width={32} className={offerStyles.icon} />
                <span className={offerStyles.spanText}>
                  Wpłynie na Twoje serce
                </span>
              </li>
              <li className={offerStyles.listItemFirst}>
                <img src={lungIcon} width={32} className={offerStyles.icon} />
                <span className={offerStyles.spanText}>
                  Wpłynie na Twoje Płuca
                </span>
              </li>
              <li className={offerStyles.listItemFirst}>
                <img src={boneIcon} width={32} className={offerStyles.icon} />
                <span className={offerStyles.spanText}>
                  Wzmocni Twój Szkielet
                </span>
              </li>
              <li className={offerStyles.listItemFirst}>
                <img src={brainIcon} width={32} className={offerStyles.icon} />
                <span className={offerStyles.spanText}>
                  Wzmocni Twoją Psychikę
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={offerStyles.imageContainer}>
          <BlockQuoteInstagram
            link="https://www.instagram.com/p/ClMgA-NNk7A/?utm_source=ig_embed&amp;utm_campaign=loading"
            size={isMobile ? "default" : "large"}
          />
          {/* <img src={kot} alt="Training" className={offerStyles.image} /> */}
        </div>
      </div>
      <div className={offerStyles.buttonContainer}>
        <Button className={offerStyles.mainButton}>
          <Link to="/contact/basic-plan">
            {`${"Stwórz Plan Dla Siebie"}`.toLocaleUpperCase()}
          </Link>
        </Button>
      </div>

      <div className={offerStyles.contentSection}>
        <ul className={offerStyles.testimonialsList}>
          <li className={offerStyles.listItemSecond}>
            Dostosuj Plan do Siebie
          </li>
          <TestimonalsComponent />
          <li className={offerStyles.listItemSecond}>Zbuduj Wydolny Mięsień</li>
          <TestimonalsComponent />
          <li className={offerStyles.listItemSecond}>Zwiększ zakresy ruchu</li>
          <TestimonalsComponent />
          <li className={offerStyles.listItemSecond}>Zwiększ Wydolność</li>
          <TestimonalsComponent />
          <li className={offerStyles.listItemSecond}>Zwiększ Siłę</li>
          <TestimonalsComponent />
          <li className={offerStyles.listItemSecond}>Zwiększ Moc</li>
        </ul>
        <div className={offerStyles.athleteButtonContainer}>
          <Button className={offerStyles.athleteButton}>
            <Link to="/contact/athlete-plan">Przygotowanie Atletyczne</Link>
          </Button>
        </div>
      </div>

      <div className={offerStyles.bottomSection}>
        <span className={offerStyles.bottomHeading}>
          Pozwól sobie na zdrowy #Load
        </span>

        <div className={offerStyles.footerContainer}>
          <FooterOffer />
        </div>
      </div>
    </div>
  );
};
