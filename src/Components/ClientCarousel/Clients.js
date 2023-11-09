import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Clients() {
  const items = [
    <div className="my-[3rem]">
      <div className="md:w-[580px] w-full md:h-[409px] h-full bg-[#FFF] rounded-[16px] customeShadow flex flex-col p-10">
        <div className="flex flex-col justify-start ">
          <div className=" flex justify-between items-center">
            <img
              src="./assets/images/star.png"
              className="w-auto md:h-[3rem] h-[2rem]"
              alt=""
            />

            <p className="text-[#878787]  font-normal leading-[22px] text-[12px] md:text-[18px] md:leading-[38px]">
              Analiza zdrowotna
            </p>
          </div>

          <p className="text-secondary font-normal mt-[2rem] md:w-[500px] w-full text-[18px] ltext-[12px] leading-[19px] md:text-[18px] md:leading-[32px]">
            Unikalna aplikacja Bardzo mi się podoba apka, działa płynnie. Nie
            znalazłem innej apki która miałaby te wszystkie funkcje w jednym,
            zawsze musiałem skorzystać z kilku na raz. Frontend mógłby być
            trochę mniej medyczny, ale ostatnio zauważyłem coś na Insta że zaraz
            będzie zupełnie inny wygląd, więc zobaczymy jaki to będzie po tej
            zmianę.
          </p>
        </div>
      </div>
    </div>,
    <div className="my-[3rem]">
      <div className="md:w-[580px] w-full md:h-[409px] h-full bg-[#FFF] rounded-[16px] customeShadow flex flex-col p-10">
        <div className="flex flex-col justify-start ">
          <div className=" flex justify-between items-center">
            <img
              src="./assets/images/star.png"
              className="w-auto h-[3rem]"
              alt=""
            />

            <p className="text-[#878787]  font-normal  text-[12px] md:text-[18px] md:leading-[38px]leading-[22px]">
              Analiza zdrowotna
            </p>
          </div>

          <p className="text-secondary font-normal mt-[2rem] md:w-[500px] w-full text-[18px] ltext-[12px] leading-[19px] md:text-[18px] md:leading-[32px]">
            Unikalna aplikacja Bardzo mi się podoba apka, działa płynnie. Nie
            znalazłem innej apki która miałaby te wszystkie funkcje w jednym,
            zawsze musiałem skorzystać z kilku na raz. Frontend mógłby być
            trochę mniej medyczny, ale ostatnio zauważyłem coś na Insta że zaraz
            będzie zupełnie inny wygląd, więc zobaczymy jaki to będzie po tej
            zmianę.
          </p>
        </div>
      </div>
    </div>,
  ];
  const responsive = {
    464: { items: 1 },
    768: { items: 3 },
    1024: { items: 3 },
  };

  return (
    <div className="relative " id="Technology">
      <div className="md:max-w-[1400px] mx-auto  justify-center items-center w-full relative  md:space-x-12  space-x-20">
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

export default Clients;
