import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
function Footer(props) {
  return (
    <div className="md:mt-[0px] relative" id="Footer">
      <div className="footerbg h-[747px] w-[800px] absolute bottom-0 right-0 overflow-clip  opacity-30 rotate-10"></div>
      <div className="w-full bg-[#FFF]  md:px-10 px-5">
        <div className="  md:max-w-[1400px]  md:px-10 px-5 mx-auto flex flex-col w-full">
          <div
            className="h-[1px] w-full bg-[#EDF4EA]
        "
          ></div>

          <div className="w-full grid md:grid-cols-4 text-[#000] sm:grid-cols-2  mx-auto  gap-x-2 items-start  md:gap-x-16 md:gap-y-5 my-5 gap-y-8">
            <div className="flex flex-col md:justify-start justify-center md:text-left
             text-center items-center w-full ">
              <ul className="text-[16px] font-medium md:leading-[17px] leading-[15px]  -tracking-[0.32px]  text-secondary">
                <li>Ons</li>
                <li className="my-3"> Blog</li>
                <li className="my-3">Biznes </li>
                <li className="my-3"> Contact </li>
              </ul>
            </div>
            <div className="flex flex-col md:justify-start justify-center md:text-left
             text-center items-center w-full ">
              <ul className="text-[16px] font-medium md:leading-[17px] leading-[15px]  -tracking-[0.32px]  text-secondary cursor-pointer">
                <li>
                  {' '}
                  <LinkScroll
                    to="Regulamin"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Regulamin
                  </LinkScroll>
                </li>
                <li className="my-3">
                  <LinkScroll
                    to="Polityka prywatności"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                  >
                    Polityka prywatności
                  </LinkScroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:justify-start justify-center md:text-left
             text-center items-center w-full ">
              <ul className="text-[16px] font-medium md:leading-[17px] leading-[15px]  -tracking-[0.32px]  text-secondary">
                <li>Instagram</li>
                <li className="my-3"> Facebook</li>
                <li className="my-3 text-[#8FBD12]">contact@helfio.com </li>
              </ul>
            </div>
            <div className="flex flex-col md:justify-start   w-full ">
              <div className="flex  flex-col justify-start mx-auto w-full ">
                <div className="w-[290px]  bg-[#293C32]  h-[80px] flex justify-start items-center rounded-[15px] p-6">
                  <div className="flex justify-start items-center ">
                    <div>
                      <img
                        src="./assets/images/apple.png"
                        className="h-[3rem] w-auto "
                        alt='apple'
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

                <div className="w-[290px] bg-[#293C32] mt-4 h-[80px] flex justify-start items-center rounded-[15px] p-6">
                  <div className="flex justify-start  ">
                    <div>
                      <img
                        src="./assets/images/playstore.png"
                        className="h-[3rem] w-auto "
                        alt='app-store'
                      />
                    </div>
                    <div className="flex flex-col flex flex-col justify-start items-start mx-2 mx-2">
                      <div>
                        <p className="text-[#FFF] font-medium -tracking-[0.32px] text-[16px] leading-[17px] ">
                          Pobierz
                        </p>{' '}
                      </div>
                      <div>
                        <h1 className="text-[#FFF] font-bold -tracking-[0.6px] text-[30px] leading-[32px] ">
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
      <div className="w-full bg-[#FFF] py-5 md:px-10 px-5">
        <div className="  flex justify-center items-center text  text-center text-[16px] font-medium md:leading-[17px] leading-[15px]  -tracking-[0.32px]  text-secondary">
          Prawa autorskie © Helfio Sp. z o. o. <br />
          ul. Grzybowska 87, 00-844 Warszawa, Polska
        </div>
      </div>
    </div>
  );
}

export default Footer;
