import { Link, useMatches } from "@tanstack/react-router";
import shiImage from "../assets/samurai.jpg";
// import homeIcon from "../assets/feather-icons/home.svg";
import { StepButtons } from "./TrainingAppComponent/ui/buttons-for-steps";

export const Header = () => {
  const matches = useMatches();
  const isTrainingApp = matches.some(
    (match) => match.pathname === "/training-app/"
  );

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="container mx-auto py-3  flex">
        <div className="flex flex-row items-start justify-between">
          <div className="xl:py-3 xl:w-[56vw] mx-0" />
          {isTrainingApp && <StepButtons />}

          <ul className="flex items-center justify-end xl:gap-8 my-3 mx-8 ">
            <li>
              <Link to="/training-app">
                <img src={shiImage} alt="Training" width={45} />
              </Link>
            </li>
            {/* <li>
              <Link to="/">
                <img src={homeIcon} alt="Home" width={35} />
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
