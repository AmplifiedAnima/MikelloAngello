import { BlockQuoteInstagram } from "./InstagramVideoComponent";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const textStyles = {
  list: "text-center xl:text-7xl xl:px-12 lg:text-5xl px-4 my-24",
  h2Span: "text-6xl block mb-24",
  span: `xl:text-4xl lg:text-3xl text-2xl
         w-full 
         leading-relaxed
         text-pretty
         whitespace-normal
         break-words
         block
         mx-auto
         mb-12 lg:mb-0`,
  divStylingBox:
    "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 my-12 text-left xl:px-12",
  contentWrapper: "flex flex-col gap-12 lg:gap-24",
};

export const AboutMeSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col">
        <ul className="space-y-24 lg:space-y-48">
          {/* Siła Section */}
          <li className={textStyles.list}>
            <span className={textStyles.h2Span}>#Siła</span>
            <div className={textStyles.divStylingBox}>
              <span className={textStyles.span}>
                Oferuję formę przygotowania motorycznego, w której z
                podopiecznym skupiam się, na podniesieniu jego stopnia
                atletyzmu, głównie przy pomocy treningu o odpowiednio dobranej
                intensywności, odpowiedniej ilości powtórzeń, oraz odpowiedniej
                częstotliwości. Posiadając doświadczenie w rehabilitacji swoich
                własnych urazów (2x ACLR) zwracam szczególną uwagę na
                bezpieczeństwo, jak i jakość wykonywanej pracy na siłowni.
              </span>
              <div className="flex justify-left ">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CWDuTtisA5r/"
         
                />
              </div>
            </div>
          </li>

          {/* Hipertrofia Section */}
          <li className={textStyles.list}>
            <span className={textStyles.h2Span}>#Hipertrofia</span>
            <div className={textStyles.contentWrapper}>
              <div className={textStyles.divStylingBox}>
                <span className={textStyles.span}>
                  Trening, który będziesz realizował pod moją opieką, będzie
                  dobrany odpowiednio do twojego stopnia zaawansowania, Twojej
                  indywidualnej genetyki, oraz Twojego celu. Celem realizacji
                  motoryki jest osiągnięcie rezultatów, przy jak najmniejszym
                  nakładzie pracy.
                </span>
                <div className="flex justify-center">
                  <BlockQuoteInstagram
                    link="https://www.instagram.com/p/CPDmj3Xnasp/"
                    size={isMobile ? "sm" : "default"}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className={textStyles.divStylingBox}>
                <span className={textStyles.span}>
                  Niezależnie, czy trenujesz rekreacyjnie, czy zawodowo, Twój
                  plan może spełniać Twoje założenia, bez nadmiarowego wysiłku.
                  Sprawimy, by Twój szkielet bezpieczne zaadaptował się do
                  większych obciążeń.
                </span>
                <div className="flex justify-center">
                  <BlockQuoteInstagram
                    link="https://www.instagram.com/p/CONd0m4n9kz/"
                    size={isMobile ? "sm" : "default"}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Moc Section */}
          <li className={textStyles.list}>
            <span className={textStyles.h2Span}>#Moc</span>
            <div className={textStyles.contentWrapper}>
              <div className={`${textStyles.divStylingBox} lg:grid-cols-1`}>
                <span className={`${textStyles.span} xl:tracking-[4px]`}>
                  W zależności od twojej dyspozycji, wybierzemy wspólnie
                  najnsesowniejszą drogę, by wykonać pracę, która zbliży Ciebie
                  do celu, który próbujesz osiągnąć. Czy to zrzucenie zbędnych
                  kilogramów, czy to zwiększenie masy mięśniowej, wydolności,
                  siły, mocy, szybkości, trening musi spełniać wymogi po Twojej
                  stronie.
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="flex justify-center">
                  <BlockQuoteInstagram
                    link="https://www.instagram.com/p/CShreo4n2Ds/"
                    size={isMobile ? "sm" : "default"}
                    className="mx-auto"
                  />
                </div>
                <div className="flex justify-center">
                  <BlockQuoteInstagram
                    link="https://www.instagram.com/p/CWqI-OgMOGJ/"
                    size={isMobile ? "sm" : "default"}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </li>

          <li className={textStyles.list}>
            <span className={textStyles.h2Span}>Zrealizuj Cel</span>
          </li>
        </ul>

        <div className="flex justify-center my-24">
          <Button className="w-full lg:w-[40vw] xl:w-[30vw] p-10 text-3xl lg:text-3xl xl:text-4xl">
            <Link to="/contact">Kontakt</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
