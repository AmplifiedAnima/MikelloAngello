// import polishFlag from "../assets/polish_flag.png";
// import americanFlag from "../assets/american_flag.png";
// import { useState } from "react";

export const Header = () => {
  // const [flag, setFlag] = useState(false);

  // const handleLanguageSwitchMock = () => {
  //   setFlag((prevFlag) => !prevFlag);
  // };
  const textSize =
    "xl:text-xl  text-md whitespace-nowrap px-4 hover:text-gray-300";
  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="container mx-auto py-3 px-4">
        <ul className="flex items-center justify-end xl:gap-20 gap-4 xl:mx-32 mx-auto my-2 xl:w-[80vw] w-[55vw] ">
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
          <li className={textSize}>
            <a href="/offer">Współpraca</a>
          </li>
          <li className={textSize}>
            <a href="/about_me">O mnie</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
