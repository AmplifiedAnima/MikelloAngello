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

  const listStyling =
    "text-center tracking-wide whitespace-normal xl:text-7xl xl:px-12";
  const divStylingBox =
    "grid grid-cols-1 lg:grid-cols-2  gap-0 xl:my-[45vh] lg:my-32 my-24 text-left"; // Added responsive grid
  const spanStyling = "xl:text-7xl text-5xl ";

  return (
    <div className="">
      <div className="place-items-center">
        <ul className=" items-center justify-start px-4">
          <li className={`${listStyling} xl:mt-48`}>
            <span className={spanStyling}>#Siła</span>
            <div className={divStylingBox}>
              <div>
                <span className=" xl:text-4xl text-left px-2 text-xl">
                  Oferuję formę przygotowania motorycznego, w której z
                  podopiecznym skupiam się, na podniesieniu jego stopnia
                  atletyzmu, głównie przy pomocy treningu o odpowiednio dobranej
                  intensywności, odpowiedniej ilości powtórzeń, oraz
                  odpowiedniej częstotliwości. Posiadając doświadczenie w
                  rehabilitacji swoich własnych urazów (2x ACLR) zwracam
                  szczególną uwagę na bezpieczeństwo, jak i jakość wykonywanej
                  pracy na siłowni.
                </span>
              </div>

              <div className="grid grid-cols-1 xl:gap-[7.5rem] gap-[5rem] my-48">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CWDuTtisA5r/"
                  size="default"
                />
                {/* <BlockQuoteInstagram
                  link="https://www.instagram.com/tv/CbvGLmggXwe/?utm_source=ig_embed&amp;utm_campaign=loading"
                  size="large"
                />{" "} */}
              </div>
            </div>
          </li>
 
          <li className={`${listStyling}`}>
            <span className={spanStyling}>#Hipertrofia</span>
            <div className={divStylingBox}>
              <div>
                <span className=" text-3xl text-left  ">
                  Trening, który będziesz realizował pod moją opieką, będzie
                  dobrany odpowiednio do twojego stopnia zaawansowania, Twojej
                  indywidualnej genetyki, oraz Twojego celu. Celem realizacji
                  motoryki jest osiągnięcie rezultatów, przy jak najmniejszym
                  nakładzie pracy. Niezależnie, czy trenujesz rekreacyjnie, czy
                  zawodowo, Twój plan może spełniać Twoje założenia, bez
                  nadmiarowego wysiłku. Sprawimy , by Twój szkielet bezpieczne
                  zaadaptował się do większych obciążeń.
                </span>
              </div>

              <div className="grid grid-cols-1 xl:gap-[4.5rem] gap-[2rem] my-10">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CPDmj3Xnasp/"
                  size="default"
                />
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CONd0m4n9kz/?utm_source=ig_embed&amp;utm_campaign=loading"
                  size="default"
                />
              </div>
            </div>
          </li>

          <li className={`${listStyling} xl:m-0 xl:my-0 `}>
            <div className="xl:mb-48">
              <span className={spanStyling}>#Moc</span>
            </div>
            <div className="xl:mb-48 ">
              <span className=" xl:text-4xl  px-2 text-xl tracking-[0.2rem] ">
                W zależności od twojej dyspozycji, wybierzemy wspólnie
                najnsesowniejszą drogę, by wykonać pracę, która zbliży Ciebie do
                celu, który próbujesz osiągnąć. Czy to zrzucenie zbędnych
                kilogramów, czy to zwiększenie masy mięśniowej, wydolności,
                siły, mocy, szybkości, trening musi spełniać wymogi po Twojej
                stronie. Ipsum lorem sanctium perfecta. Ipsum lorem sanctium
                perfecta. Ipsum lorem sanctium perfecta. Ipsum lorem sanctium
                perfecta.
              </span>
            </div>

            <div className="grid grid-cols-2 xl:gap-[8.5rem] gap-[5rem] ">
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CShreo4n2Ds/"
                size="default"
              />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CWqI-OgMOGJ/?utm_source=ig_embed&amp;utm_campaign=loading"
                size="default"
              />
            </div>
          </li>

          <li className={`${listStyling} xl:my-48`}>
            <span>Zrealizuj Cel</span>
          </li>
        </ul>

        <Button className="xl:w-[30vw] p-12 text-2xl xl:my-48">
          Zaplanuj swój trening
        </Button>
      </div>
    </div>
  );
};
