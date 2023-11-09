import React from 'react';
import Clients from '../../Components/ClientCarousel/Clients';

const StartCare = () => {
  return (
    <div>
      {' '}
      <div className="startCare p-10">
        <div className="md:max-w-[1400px] my-[2rem]  md:px-10 px-5 mx-auto w-full relative">
          <div className="flex flex-col justify-center items-center mx-auto w-full">
            <div>
              {' '}
              <img
                src="./assets/images/MainLogo.svg"
                className="h-auto w-auto"
                alt="MainLogo"
              />
            </div>

            <div>
              {' '}
              <h1 className="text-[#97A98F] font-extrabold text-center md:text-[24px] leading-normal  md:tracking-[0.48px] text-[16px] tracking-[0.32px]">
                ZDROWIE NIE MOŻE CZEKAĆ{' '}
              </h1>
              <h2 className="text-primary text-center font-extrabold mt-4 text-[45px] md:text-[65px] leading-[122%]  md:tracking-[-1.3px] tracking-[-0.9px]">
                Zacznij dbać o siebie już
                <br />
                <span className="text-[#8FBD12]  ">teraz</span>{' '}
              </h2>
              <div className="flex mt-[1rem] flex-col justify-center items-center mx-auto w-full  my-4">
                <div className="w-[290px]  bg-[#293C32]  h-[80px] flex justify-start items-center rounded-[15px] p-6">
                  <div className="flex justify-start items-center ">
                    <div>
                      <img
                        src="./assets/images/apple.png"
                        className="h-[3rem] w-auto "
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start mx-2">
                      <div>
                        <p className="text-[#FFF] font-medium -tracking-[0.32px] text-[16px] leading-[17px] ">
                          Download on the
                        </p>{' '}
                      </div>
                      <div>
                        <h1 className="text-[#FFF] font-bold -tracking-[0.6px] text-[30px] leading-[31px] ">
                          App Store
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[290px]  bg-[#293C32] mt-4 h-[80px] flex justify-start items-center rounded-[15px] p-6">
                  <div className="flex justify-start items-center ">
                    <div>
                      <img
                        src="./assets/images/playstore.png"
                        className="h-[3rem] w-auto "
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start mx-2">
                      <div>
                        <p className="text-[#FFF] font-medium -tracking-[0.32px] text-[16px] leading-[17px] ">
                          Download on the
                        </p>{' '}
                      </div>
                      <div>
                        <h1 className="text-[#FFF] font-bold -tracking-[0.6px] text-[30px] leading-[31px]">
                          Google Play
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default StartCare;
