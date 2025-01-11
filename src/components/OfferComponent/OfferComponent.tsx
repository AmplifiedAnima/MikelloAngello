import kot from "../../assets/04E3760D-5109-43D0-B530-1A2D76B34FEC.jpeg";
export const OfferComponent = () => {
  return (
    <div className="px-28 py-32 text-white grid grid-cols-1 gap-32">
      <div className="grid grid-cols-2 gap-24">
        <div>
          <span className="text-8xl">Zadbaj o swoje zdrowie </span>
          <span className="text-4xl mx-24 justify-center flex">
            #Stressrelief
          </span>
          <div className="">
            <p className="text-3xl pt-12 ">Wybierz plan treningowy </p>
            <ul className="mt-12 space-y-12">
              <li> Wzmocni twoje kości </li>
              <li> Poprawi wydolność sercowo-naczyniowią </li>
              <li> Wzmocni stawy , by znosić obłożenie </li>
            </ul>
            <ul className="mt-32">
              <li> Dostosuj Plan , idealnie do Twoich potrzeb !</li>
            </ul>
          </div>
          <p className="mx-32 py-12 justify-end flex text-xl">
            {" "}
            Stwórz pland dla Siebie !{" "}
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <img src={kot} alt="Training" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <img
            src={kot}
            className="w-full max-w-md object-cover"
            alt="Training"
          />
        </div>
        <div>
          <span className="text-6xl">Zdrowie To Wolność!</span>
          <span className="text-4xl justify-center flex">#Strength</span>
          <div className="mt-8 text-xl">
            <ul className="mt-12 space-y-8 ">
              <li className="text-3xl">
                {" "}
                Plan treningowy dostosowany do Ciebie
              </li>
              <li> Zwiększ Siłę (Wzmacniając kości i mięśnie)</li>
              <li>
                Zwiększ Wydolność (Wzmacniając układ krążeniowo-oddechowy)
              </li>
              <li>
                {" "}
                Zwiększ zakresy ruchu (Wzmacniając jakość tkanek miękkich){" "}
              </li>
            </ul>
          </div>
          <p className="mx-24 py-12">zapisz sie </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12">
        <div>
          <div className="mt-8 text-xl">
            <ul className="mt-12 space-y-8 ">
              <li>
                <span className="text-8xl text-center">
                  {" "}
                  Niech doświadczenie zadba o jakość twojego Zdrowia
                </span>
              </li>
              <li className="pt-24">
                <span className="text-4xl text-center"> </span>
              </li>
            </ul>
          </div>
          <p className="mx-24 py-12 text-end text-3xl  my-12">
            Dokonaj zmiany{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
