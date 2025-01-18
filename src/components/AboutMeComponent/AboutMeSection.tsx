import { useEffect } from "react";
import { BlockQuoteInstagram } from "./InstagramVideoComponent";
import { Button } from "../ui/button";
export const AboutMeSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const spanTextStyling =
    " text-center   tracking-wider xl:whitespace-nowrap whitespace-normal xl:text-[2.3rem] xl:px-12 lg:text-[2.1rem] mt-24";

  return (
    <div className="space-y-12 text-3xl flex ">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-24  ">
        <div className="space-y-24 place-items-center ">
          <ul className=" grid grid-cols-1 lg:grid-cols-1 items-center  justify-start ">
            <li className={spanTextStyling}>
              <span>
                Rozpisuje speriodyzowane plany treningowe dla sportowców
              </span>
              <div className="py-12" />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CWDuTtisA5r/"
                size="default"
              />
            </li>
            <li className={spanTextStyling}>
              <span>
                Posiadam kilka lat doświadczenia jako trener, w pracy ze
                sportowcami
              </span>
              <div className="py-12" />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CPDmj3Xnasp/"
                size="default"
              />
            </li>
            <li className={spanTextStyling}>
              <span>
                Jestem zwolennikiem utrzymywania dyscypliny w realizacji celów
              </span>
              <div className="py-12" />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CShreo4n2Ds/"
                size="default"
              />
            </li>
            <li className={spanTextStyling}>
              <span>
                Staram się zawierać elementy mobilizacji tkanek miękkich (stawy)
              </span>
              <div className="py-12" />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CONd0m4n9kz/?utm_source=ig_embed&amp;utm_campaign=loading"
                size="default"
              />
            </li>

            <span className={spanTextStyling}></span>
          </ul>

          <Button className="xl:w-[30vw] p-12 text-2xl">Zaplanuj swój trening</Button>
        </div>
      </div>
    </div>
  );
};
