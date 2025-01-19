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
    "grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-4 xl:my-48 lg:my-32"; // Added responsive grid
  const spanStyling = "xl:text-7xl text-5xl";

  return (
    <div className="grid grid-cols-1">
      <div className="place-items-center">
        <ul className="grid grid-cols-1 items-center justify-start px-4">
          <li className={`${listStyling} mt-48`}>
            <span className={spanStyling}>#Siła</span>
            <div className={divStylingBox}>
              <span className="lg:col-span-8 xl:col-span-8 text-4xl text-left px-2">
                Oferuję formę przygotowania motorycznego, w której z
                podopiecznym skupiam się, na podniesieniu jego stopnia
                atletyzmu, głównie przy pomocy treningu o odpowiednio dobranej
                intensywności, odpowiedniej ilości powtórzeń, oraz odpowiedniej
                częstotliwości. Posiadając doświadczenie w rehabilitacji swoich
                własnych urazów (2x ACLR) zwracam szczególną uwagę na
                bezpieczeństwo, jak i jakość wykonywanej pracy na siłowni.
              </span>
              <div className="lg:col-span-4 xl:col-span-4">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CWDuTtisA5r/"
                  size="default"
                />
              </div>
            </div>
          </li>
          <li className={`${listStyling}`}>
            <span className={spanStyling}>#Hipertrofia</span>
            <div className={divStylingBox}>
              <div className="lg:col-span-4 xl:col-span-4">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CPDmj3Xnasp/"
                  size="default"
                />
              </div>
              <span className="lg:col-span-8 xl:col-span-8 text-3xl text-left lg:ml-24 xl:ml-24">
                Trening, który będziesz realizował pod moją opieką, będzie
                dobrany odpowiednio do twojego stopnia zaawansowania, Twojej
                indywidualnej genetyki, oraz Twojego celu. Celem realizacji
                motoryki jest osiągnięcie rezultatów, przy jak najmniejszym
                nakładzie pracy. Niezależnie, czy trenujesz rekreacyjnie, czy
                zawodowo, Twój plan może spełniać Twoje założenia, bez
                nadmiarowego wysiłku.
              </span>
            </div>
          </li>
          <li className={listStyling}>
            <span className={spanStyling}>#Moc</span>
            <div className={divStylingBox}>
              <span className="lg:col-span-8 xl:col-span-8 text-3xl text-left">
                W zależności od twojej dyspozycji, wybierzemy wspólnie
                najnsesowniejszą drogę, by wykonać pracę, która zbliży Ciebie do
                celu, który próbujesz osiągnąć. Czy to zrzucenie zbędnych
                kilogramów, czy to zwiększenie masy mięśniowej, wydolności,
                siły, mocy, szybkości, trening musi spełniać wymogi po Twojej
                stronie.
              </span>
              <div className="lg:col-span-4 xl:col-span-4">
                <BlockQuoteInstagram
                  link="https://www.instagram.com/p/CShreo4n2Ds/"
                  size="default"
                />
              </div>
            </div>
          </li>
          <li className={`${listStyling} xl:my-24`}>
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
