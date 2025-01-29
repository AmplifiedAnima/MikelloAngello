import { BlockQuoteInstagram } from "./InstagramVideoComponent";
import { Button } from "../ui/button";
import { Link } from "@tanstack/react-router";

const textStyles = {
  list: "text-center  xl:text-7xl xl:px-12 lg:text-5xl px-8",
  h2Span: "text-6xl",
  span: `xl:text-4xl lg:text-3xl text-2xl
         w-full sm:w-full  // dodane - pełna szerokość
         px-2 sm:px-4 md:px-6 
         leading-relaxed
         text-pretty  // dodane - lepsze łamanie tekstu
         whitespace-normal  // dodane - normalne łamanie linii
         break-words  // dodane - zapobieganie przepełnieniu
         block  // dodane - blokowe wyświetlanie
         `,
  divStylingBox:
    "grid grid-cols-1 lg:grid-cols-2 gap-0 xl:my-[45vh] xl:my-32 my-24 text-left xl:px-12 ",
};

export const AboutMeSection = () => {
  return (
    <div>
      <div className="place-items-center">
        <ul className="items-center justify-start xl:px-8 ">
          <li className={`${textStyles.list} xl:mt-48`}>
            <span className={textStyles.h2Span}>#Siła</span>
            <div className={textStyles.divStylingBox}>
              <div>
                <span className={textStyles.span}>
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

              <div className="grid grid-cols-1 xl:gap-[7.5rem] gap-[5rem] xl:my-48 my-12 xl:p-24 lg:p-2">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CWDuTtisA5r/"
                  size="default"
                />
              </div>
            </div>
          </li>

          <li className={`${textStyles.list}`}>
            <span className={textStyles.h2Span}>#Hipertrofia</span>
            <div className={textStyles.divStylingBox}>
              <div>
                <span className={textStyles.span}>
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

              <div className="grid grid-cols-1 xl:gap-[4.5rem] gap-[8rem] my-10">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CPDmj3Xnasp/"
                  size="default"
                />
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CONd0m4n9kz/"
                  size="default"
                />
              </div>
            </div>
          </li>

          <li className={`${textStyles.list} xl:m-0 xl:my-0`}>
            <div className="xl:my-32 my-24">
              <span className={textStyles.h2Span}>#Moc</span>
            </div>
            <div
              className={`${textStyles.divStylingBox} w-full xl:grid-cols-1 `}
            >
              <span className={`${textStyles.span} xl:tracking-[4px] `}>
                W zależności od twojej dyspozycji, wybierzemy wspólnie
                najnsesowniejszą drogę, by wykonać pracę, która zbliży Ciebie do
                celu, który próbujesz osiągnąć. Czy to zrzucenie zbędnych
                kilogramów, czy to zwiększenie masy mięśniowej, wydolności,
                siły, mocy, szybkości, trening musi spełniać wymogi po Twojej
                stronie.
              </span>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-[8.5rem] gap-[5rem]">
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CShreo4n2Ds/"
                size="default"
              />
              <BlockQuoteInstagram
                link="https://www.instagram.com/p/CWqI-OgMOGJ/"
                size="default"
              />
            </div>
          </li>

          <li className={`${textStyles.list} my-48`}>
            <span className={textStyles.h2Span}>Zrealizuj Cel</span>
          </li>
        </ul>

        <Button className="xl:w-[30vw] p-18 lg:text-3xl xl:text-4xl text-3xl p-10 my-48 lg:w-[40vw] w-[60vw]">
          <Link to="/contact">Kontakt</Link>
        </Button>
      </div>
    </div>
  );
};
