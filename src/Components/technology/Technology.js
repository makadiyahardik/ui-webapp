import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../../atoms/Card';
function Technology() {
  const items = [
    <div className="my-[3rem]">
      <div className="w-[280px] h-[240px] bg-[#FFF] rounded-[16px] customeShadow flex flex-col">
        <div className="flex flex-col justify-start p-6">
          <div className="bg-[#1294BD]  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center">
            <img
              src="./assets/images/ic_Medical.png"
              className="w-[2rem] h-auto"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-primary font-extrabold mt-4 text-[20px] leading-normal">
              Analiza zdrowotna
            </h1>
          </div>
          <p className="text-secondary font-normal mt-4 text-[14px] leading-normal">
            Analiza zdrowia metabolicznego wraz z zaleceniami
          </p>
        </div>
      </div>
    </div>,
    <div className="my-[3rem]">
      <div className="w-[280px] h-[240px] bg-[#FFF] rounded-[16px] customeShadow flex flex-col">
        <div className="flex flex-col justify-start p-6">
          <div className="bg-[#FD8901]  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center">
            <img
              src="./assets/images/ic_Running.png"
              className="w-[2rem] h-auto"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-primary font-extrabold mt-4 text-[20px] leading-normal">
              Program aktywności
            </h1>
          </div>
          <p className="text-secondary font-normal mt-4 text-[14px] leading-normal">
            Spersonalizowany program oparty na Twojej analizie zdrowotnej
          </p>
        </div>
      </div>
    </div>,
    <div className="my-[3rem]">
      <div className="w-[280px] h-[240px] bg-[#FFF] rounded-[16px] customeShadow flex flex-col">
        <div className="flex flex-col justify-start p-6">
          <div className="bg-[#8FBD12]  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center">
            <img
              src="./assets/images/ic_Diet.png"
              className="w-[2rem] h-auto"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-primary font-extrabold mt-4 text-[20px] leading-normal">
              Program dietetyczny
            </h1>
          </div>
          <p className="text-secondary font-normal mt-4 text-[14px] leading-normal">
            Spersonalizowany jadłospis i kaloryczność wraz z listą zakupów i
            wiele więcej
          </p>
        </div>
      </div>
    </div>,
    <div className="my-[3rem]">
      <div className="w-[280px] h-[240px] bg-[#FFF] rounded-[16px] customeShadow flex flex-col">
        <div className="flex flex-col justify-start p-6">
          <div className="bg-[#A431FF]  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center">
            <img
              src="./assets/images/ic_Meditations.png"
              className="w-[2rem] h-auto"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-primary font-extrabold mt-4 text-[20px] leading-normal">
              Medytacje
            </h1>
          </div>
          <p className="text-secondary font-normal mt-4 text-[14px] leading-normal">
            Prowadzone medytacje, które pozwolą się zrelaksować
          </p>
        </div>
      </div>
    </div>,

    <div className="my-[3rem]">
      <div className="w-[280px] h-[240px] bg-[#FFF] rounded-[16px] customeShadow flex flex-col">
        <div className="flex flex-col justify-start p-6">
          <div className="bg-[#146BA9]  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center">
            <img
              src="./assets/images/ic_Sleep.png"
              className="w-[2rem] h-auto"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-primary font-extrabold mt-4 text-[20px] leading-normal">
              Monitoring snu
            </h1>
          </div>
          <p className="text-secondary font-normal mt-4 text-[14px] leading-normal">
            Kontrola snu i personalizacja nawodnienia wraz z przypomnieniami
          </p>
        </div>
      </div>
    </div>,
  ];
  const responsive = {
    464: { items: 1 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <div className="relative " id="Technology">
      <div className="md:max-w-[1400px] mx-auto  justify-center items-center w-full relative  space-x-5 ">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite={true}
          disableDotsControls
          disableButtonsControls
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
        />
      </div>
    </div>
  );
}

export default Technology;
