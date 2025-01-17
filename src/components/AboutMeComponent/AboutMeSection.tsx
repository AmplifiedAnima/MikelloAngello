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

  return (
    <div className="space-y-12 text-3xl flex ">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-24 ">
        <div className="space-y-24 place-items-center ">
          <ul className="">
            <li className="">
              Organizuję przygotowanie motoryczne dla sportowców. W treningu
              zawieram elementy mobilizacji tkanki miękkich,oraz Jogi. Posiadam
              kilka lat doświadczenia jako trener, w pracy ze sportowcami
              (głównie zawodnikami sportów walki, oraz z ludźmi ,którzy trenują
              rekreacyjnie).
              <div className="xl:mx-0  mx-0  gap-24 grid grid-cols-1 lg:grid-cols-4 items-center  justify-start my-12">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CWDuTtisA5r/"
                  size="default"
                />
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CPDmj3Xnasp/"
                  size="default"
                />
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CShreo4n2Ds/"
                  size="default"
                />
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CONd0m4n9kz/?utm_source=ig_embed&amp;utm_campaign=loading"
                  size="default"
                />
              </div>
            </li>

            <li className="justify-items-center place-items-center">
              Interesuje mnie pozytywny wpływ wysiłku fizycznego na zdrowie
              metaboliczne, zdrowia sercowo-naczyniowego, zdrowia szkieletu,oraz
              zdrowia psychicznego.
            </li>

            <div className="flex  flex-row gap-12 w-full my-12">
              <BlockQuoteInstagram
                link="https://www.instagram.com/tv/CZcHNkqBZxM/?utm_source=ig_embed&amp;utm_campaign=loading"
                size="default"
              />
              <div />
              <div />

              <BlockQuoteInstagram
                link="https://www.instagram.com/p/ClMgA-NNk7A/?utm_source=ig_embed&amp;utm_campaign=loading"
                size="large"
              />

              <div />
              <div />
            </div>
          </ul>

          <Button className="xl:w-[30vw]">Zaplanuj swój trening</Button>
        </div>
      </div>
    </div>
  );
};
