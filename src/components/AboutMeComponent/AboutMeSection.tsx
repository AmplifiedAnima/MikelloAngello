import { useEffect } from "react";
import { BlockQuoteInstagram } from "./InstagramVideoComponent";

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
    <div className="space-y-12 text-3xl p-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 ">
        <div className="space-y-12">
          <ul className="space-y-48 w-full ">
            <li> Trener przygotowania motorycznego </li>

            <li>
              Instruktor jogi (RYT 200h) , oraz mobilizacji tkanek miękkich
            </li>

            <li>
              5 lat prowadzenia własnego studia treningowego i pracy z
              zróżnicowanymi grupami podopiecznych (od początkujących po
              zaawansowanych)
            </li>

            <li>
              Specjalizacja w indywidualnym podejściu do treningu - tworzenie
              spersonalizowanych planów treningowych dostosowanych do celów i
              możliwości adepta
            </li>

            <li>
              Aktywny tłumacz medyczny (EN-PL), tłumaczenie konsultacji:
              <span className="mt-2">
                <ul className="ml-6 mt-8space-y-4">
                  <li> Kardiologia</li>
                  <li>Ortopedia</li>
                  <li>Fizjoterapia</li>
                  <li>Terapia zajęciowa </li>
                </ul>
              </span>
            </li>

            <li>Podwójna rehabilitacja po ACLR ( 2 razy)</li>

            <li>
              Doświadczenie w prowadzeniu przygotowania motorycznego dla
              sportowców amatorów (sporty walki, bieganie, budowanie bazy
              atletycznej)
            </li>

            <li>
              Prowadzenie zajęć z zakresu stretchingu, mobilizacji tkanek
              miękkich ,oraz Jogi
            </li>
          </ul>
        </div>

        <div className="space-y-12 lg:mx-24 md:mx-2 mx-0">
          <BlockQuoteInstagram link="https://www.instagram.com/p/CPDmj3Xnasp/" />
          <div className="my-12" />
          <BlockQuoteInstagram link="https://www.instagram.com/p/CShreo4n2Ds/" />
          <div />
          <BlockQuoteInstagram link="https://www.instagram.com/tv/CZcHNkqBZxM/?utm_source=ig_embed&amp;utm_campaign=loading" />
        </div>
      </div>
    </div>
  );
};
