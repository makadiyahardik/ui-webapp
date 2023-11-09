import React from 'react';
import Problems from '../../Components/Problems/Problems';

const Helfio = () => {
  return (
    <div className="md:max-w-[1400px] my-[2rem]  md:px-10 px-5 mx-auto w-full relative">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div>
          {' '}
          <h1 className="text-[#CBCBCB] font-extrabold mt-4 text-[16px] md:text-[24px] leading-normal md:tracking-[0.48px] tracking-[0.32px]">
            UDOWODNIONE NAUKOWO ROZWIĄZANIE STWORZONE PRZEZ LEKARZY I
            SPECJALISTÓW
          </h1>
        </div>

        <div>
          {' '}
          <h1 className="text-primary font-extrabold md:tracking-[-1.3px]  md:text-[66px] leading-[155%]  my-2  text-[30px] tracking-[-0.6px]">
            <span className="text-[#8FBD12] font-bold -tracking-[0.56px] ">
              Helfio
            </span>{' '}
            to nie tylko aplikacja mobilna, to spersonalizowany asystent, który
            dba o Twoje zdrowie metaboliczne 24/7. Analizuje, wspiera,
            monitoruje i motywuje do poprawy zdrowia i cieszenia się dłuższym
            życiem. Zawsze w zasięgu ręki.
          </h1>
        </div>
        <div className="my-[1rem] flex flex-col justify-center items-center md:max-w-[1400px] w-full  bg-[#8FBD12] bg-opacity-70 rounded-[60px] p-6 relative overflow-hidden">
          <div className="absolute right-0  top-0 overflow-clip md:flex hidden  opacity-30">
            <img
              src="./assets/images/rightbody.svg"
              className="h-auto w-auto "
              alt="rightbody"
            />
          </div>
          <div className="absolute left-0  top-0 overflow-clip md:flex hidden   opacity-30">
            <img
              src="./assets/images/leftbody.svg"
              className="h-auto w-auto "
              alt="leftbody"
            />
          </div>
          <h1 className="text-[#FFF] text-center font-extrabold mt-4 md:text-[66px] leading-[155%] md:tracking-[-1.3px] md:w-[968px] w-full text-[30px] tracking-[-0.6px] ">
            UDOWODNIONE NAUKOWO ROZWIĄZANIE STWORZONE PRZEZ LEKARZY I
            SPECJALISTÓW
          </h1>

          <p className="md:w-[768px] w-full my-[1rem] text-center text-[#ECFFBA] font-semibold mt-4 md:text-[30px] md:leading-[54px] text-[17px] leading-[27px]">
            Helfio to holistyczne podejście do Twojego zdrowia. Zaawansowana
            analiza, spersonalizowany program, miesięczna kontrola parametrów i
            stałe wsparcie lekarzy i specjalistów, pozwoli nie tylko
            zminimalizować ryzyko chorób cywilizacyjnych, ale również spowolni
            proces starzenia i poprawi jakość życia.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full mx-auto text-center">
          <h1
            className="customeColor font-bold md:text-[100px] md:tracking-[-2px]  my-2 md:leading-[155px]
        text-[45px] leading-[112%] tracking-[-0.9px] "
          >
            Na jakie problemy zdrowotne odpowiada Helfio
          </h1>
        </div>
      </div>
      <Problems />
    </div>
  );
};

export default Helfio;
