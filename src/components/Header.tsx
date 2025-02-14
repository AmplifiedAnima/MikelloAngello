// import polishFlag from "../assets/polish_flag.png";
// import americanFlag from "../assets/american_flag.png";
// import { useState } from "react";
import { Link } from "@tanstack/react-router";
import shiIMage from "../assets/samurai.jpg";
import homeIcon from "../assets/feather-icons/home.svg";
import { SearchExerciseInput } from "./ui/search-bar";
import { StepButtons } from "./TrainingAppComponent/ui/ButtonsForSteps";
import { useTrainingLogic } from "./TrainingAppComponent/utils/TrainingAppContext";

export const Header = () => {
  const useTrainingPlanLogicHook = useTrainingLogic();
  // const [flag, setFlag] = useState(false);

  // const handleLanguageSwitchMock = () => {
  //   setFlag((prevFlag) => !prevFlag);
  // };
  // const textSize =
  // "xl:text-xl  text-md whitespace-nowrap px-4 hover:text-gray-300";
  const shouldShowSearch =
    useTrainingPlanLogicHook.step === "EXERCISES" ||
    useTrainingPlanLogicHook.step === "LOAD";
  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="container mx-auto py-3 px-4 flex">
        <div className="flex flex-row items-start justify-between">
          <div className="xl:py-3 w-[20vw] mx-16">
            {shouldShowSearch && (
              <SearchExerciseInput
                className="
                rounded-lg
                bg-black 
                border-zinc-800
                hover:border-zinc-700
                focus:border-white
                focus:ring-white/20
              "
                placeholder="Search exercises..."
              />
            )}
          </div>
          <StepButtons />
        </div>

        <ul className="flex items-center justify-end xl:gap-8 gap-4  mx-auto my-2 xl:w-[90vw] w-[55vw] ">
          {/* Language Switcher */}
          {/* <li className="">
            <img
              src={flag ? polishFlag : americanFlag}
              alt="Language Flag"
              width={flag ? 50 : 60}
              height={flag ? 50 : 60}
              onClick={handleLanguageSwitchMock}
              className="my-2"
            />
          </li> */}
          {/* Menu Items */}
          <li className="">
            <Link to="/training-app">
              <img src={shiIMage} width={45} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={homeIcon} width={35} />
            </Link>
          </li>

          {/* <li className={textSize}>
            <a href="/offer">Współpraca</a>
          </li>
          <li className={textSize}>
            <a href="/about_me">O mnie</a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};
