import {
  LexiconStack,
  MedicalJobBoardStack,
  SchedulerStack,
} from "../components/AboutMeComponent/StackSection";

export const portfolioProjects = [
  {
    title: "Medical Lexicon Application",
    embedId: "7715bb83565247639464cfab692b3ccc",
    description:
      "Leksykon dla tłumaczy medycznych umożliwiający naukę i zarządzanie słownictwem. Zawiera funkcje quizu, dodawania nowych terminów oraz sugerowania słów do bazy danych.",
    stack: LexiconStack,
    github: "https://github.com/AmplifiedAnima/InterpreterMapProject",
  },
  {
    title: "Medical Job Board",
    embedId: "2ee143c9b4b140b48b37a06bf4d16abe",
    description:
      "Portal z ogłoszeniami o pracę dla branży medycznej. Umożliwia wyszukiwanie ofert pracy według specjalizacji i lokalizacji, aplikowanie na stanowiska oraz zarządzanie aplikacjami. Pracodawcy mogą publikować oferty pracy i przeglądać otrzymane zgłoszenia.",
    stack: MedicalJobBoardStack,
    github: "https://github.com/AmplifiedAnima/medoppRepository",
  },
  {
    title: "Scheduler",
    embedId: "3b2e2f8c9dee43fe8bb2e5c7f22f9688",
    description:
      "Aplikacja do planowania zajęć jogi i ćwiczeń ruchowych. Pozwala na rezerwację terminów z uwzględnieniem ograniczeń czasowych, limitu dziennych zajęć oraz zarządzanie profilem użytkownika.",
    stack: SchedulerStack,
    github: "https://github.com/AmplifiedAnima/ourbodyisload",
  },
];
