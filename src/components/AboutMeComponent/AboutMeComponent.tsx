import { BookSection } from "./BookSection";
import { InterestsSection } from "./InterestSection";
import { PodcastSection } from "./PodcastSection";
import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";

export const AboutMeComponent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold mb-8">O mnie</h1>
            <div className="prose prose-lg space-y-6">
              <p>
                Moja droga do świadomego treningu zaczęła się w 2013 roku
                podczas treningów BJJ. Doświadczenie kontuzji nauczyło mnie, jak
                kluczowe jest odpowiednie zarządzanie obciążeniami treningowymi.
                Zamiast rezygnacji, potraktowałem to jako motywację do głębszego
                zrozumienia treningu i rehabilitacji, współpracując regularnie z
                fizjoterapeutami.
              </p>

              <p>
                Podczas pobytu w Holandii w 2017 roku zafascynowałem się tematem
                przygotowania motorycznego. Po powrocie do kraju, w 2018 roku,
                ukończyłem kurs przygotowania motorycznego pod okiem Macieja
                Bielskiego w Januszkowicach. Rok 2019 przyniósł kolejne
                certyfikacje - instruktora mobility w Londynie oraz 200-godzinny
                kurs nauczyciela Hatha Yogi (RYT). Te doświadczenia
                ukształtowały moje podejście do treningu, gdzie kluczową rolę
                odgrywa odpowiednia progresja obciążeń i jakość ruchu.
              </p>

              <p>
                Przez 3 lata prowadziłem własne studio treningowe w Białym
                Borze, gdzie pracowałem zarówno z osobami wracającymi do
                zdrowia, jak i sportowcami (głównie zawodnikami sportów walki i
                biegaczami). W 2020 roku otrzymany grant pozwolił mi rozszerzyć
                działalność i dotrzeć do większej liczby podopiecznych.
              </p>

              <p>
                Kluczowym elementem mojego rozwoju jest praca jako tłumacz
                medyczny (polski-angielski). Od 2021 roku uczestniczyłem w
                setkach konsultacji medycznych - od szczegółowych procedur
                rehabilitacyjnych po złożone operacje. Jako tłumacz byłem
                świadkiem niezliczonych sesji rehabilitacyjnych po
                rekonstrukcjach ACL, wymianach stawów kolanowych (TKR) czy
                urazach barków. Tłumaczyłem zgody na zabiegi, prześwietlenia MRI
                i sesje terapii poznawczo-behawioralnej (CBT). To doświadczenie
                dało mi unikalne spojrzenie na proces rehabilitacji i
                zrozumienie, jak kluczowa jest precyzyjna komunikacja w procesie
                powrotu do zdrowia. W przerwach między tłumaczeniami, zacząłem
                zgłębiać język TypeScripta (React/Node.js) i programowania. Jako programista
                full-stack tworzę różnego rodzaju aplikacje i narzędzia.
              </p>

              <p>
                Naturalną ewolucją mojej drogi trenerskiej było przeniesienie
                się do SpiderGYM w Szczecinku, gdzie obecnie wspieram rozwój
                młodych, ambitnych sportowców. Współpracuję między innymi z
                Bartłomiejem Mienciukiem i jego zespołem, wnosząc swoją wiedzę z
                zakresu przygotowania motorycznego i load managementu. To
                miejsce, gdzie moje doświadczenie i sprzęt treningowy służą
                rozwojowi kolejnego pokolenia zawodników.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3">
            <img
              src={kot}
              alt="Profile"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform w-full"
            />
          </div>
        </div>

        <InterestsSection />
        <BookSection />
        <PodcastSection />
      </div>
    </div>
  );
};
