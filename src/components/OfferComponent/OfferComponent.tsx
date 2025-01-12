import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
import heartIcon from "../../assets/heart-rate.png";
import lungIcon from "../../assets/lungs.png";
import boneIcon from "../../assets/bone.png";
import brainIcon from "../../assets/brain.png";
import chartIcon from "../../assets/chart.png";
import { Button } from "../ui/button";
import { useEffect } from "react";

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

  return (
    <div className="px-28 py-32 text-white grid grid-cols-1 gap-32">
      <div className="grid grid-cols-2 gap-24">
        <div>
          <span className="text-8xl">Zadbaj o swoje zdrowie </span>
          <span className="text-4xl mx-24 justify-center flex">
            #Stressrelief
          </span>
          <div className="">
            <p className="text-3xl pt-12 "> Wybierz plan Treningowy </p>
            <ul className="mt-12 space-y-12 text-xl text-start ml-48">
              <li className="flex flex-row">
                {" "}
                <img src={heartIcon} width={40} className="mx-4" />
                Wzmocni Twoje Serce{" "}
              </li>
              <li className="flex flex-row  ">
                <img src={lungIcon} width={40} className="mx-4" />
                Poprawi Twoje Płuca
              </li>
              <li className="flex flex-row  ">
                <img src={boneIcon} width={40} className="mx-4" /> Wzmocni twoje
                Stawy i Kości
              </li>
              <li className="flex flex-row  ">
                <img src={brainIcon} width={40} className="mx-4" /> Wpłynie
                pozytywnie na Psychike
              </li>
              <p className=" text-xl flex flex-row">
                <img src={chartIcon} width={40} className="mx-4 " />
                <Button className="mx-24">Stwórz pland dla Siebie ! </Button>
              </p>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img src={kot} alt="Training" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/COUsqpHHVDt/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{ maxWidth: "100%", minWidth: "100%" }}
          />
        </div>
        <div>
          <span className="text-4xl">
            Przygotuj się atletycznie pod swój Cel!
          </span>
          <span className="text-4xl justify-center flex mt-4">#Strength</span>
          <div className="mt-8 text-xl">
            <ul className="mt-12 space-y-8 ">
              <li className="text-3xl">
                {" "}
                Plan treningowy dostosowany do Ciebie
              </li>
              <li> Zwiększ Siłę (Wzmacniając kości i mięśnie)</li>
              <li> Zwiększ Szybkość (Stymulując włókna szybkokurczliwe)</li>
              <li> Zwiększ Moc (Stymulując włókna szybkokurczliwe)</li>
              <li>
                Zwiększ Wydolność (Wzmacniając układ krążeniowo-oddechowy)
              </li>
              <li>
                {" "}
                Zwiększ zakresy ruchu (Przy pomocy ćwiczeń mobilizacyjnych){" "}
              </li>
            </ul>
          </div>
          <p className="mx-24 py-12 text-end">Stwórz swój plan </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12">
        <div>
          <div className="mt-8 text-xl">
            <ul className="mt-12 space-y-8 ">
              <li>
                <span className="text-8xl text-center">
                  {" "}
                  Niech doświadczenie zadba o jakość twojego Treningu
                </span>
              </li>
              <li className="pt-24">
                <span className="text-4xl text-center"> </span>
              </li>
            </ul>
          </div>
          <p className="mx-24 py-12 text-end text-3xl  my-12">
            Kontakt{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
