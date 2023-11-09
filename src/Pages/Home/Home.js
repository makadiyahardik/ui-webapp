import React from 'react';

function Home() {
  return (
    <>
      <div className="relative md:my-[8rem] my-[4rem]" id="O nas">
        <div className=" ">
          <img
            src="./assets/images/BrandPattern.png"
            className="  absolute  md:block hidden -top-[15%] -left-10 h-[570px] w-[500px]"
            alt="BrandPattern"
          />
        </div>

        <div className=" md:max-w-[1400px]  md:px-10 px-5 mx-auto w-full relative ">
          <div className="flex md:flex-row flex-col-reverse  items-center justify-start">
            <div className="md:w-1/2 w-full  ">
              <div className="text-primary flex-col md:my-0 my-4 w-full">
                <h1 className=" md:text-[65px] text-[44px] font-extrabold md:leading-[70px] leading-[46px]md:tracking-[-0.88px]  tracking-[-1.3px]">
                Health. Everyday.
                </h1>
                <p className="text-secondary font-medium mt-[20px] md:tracking-[-0.56px] text-[20px] md:text-[28px] leading-[40px] my-2tracking-[-0.4px] ">
                  <span className="text-[#8FBD12] font-bold -tracking-[0.56px] ">
                    Helfio
                  </span>{' '}
                  Helfio is a medical application that will change your life for a healthier one.
                </p>
                <div className="fle flex-col justify-start my-4">
                  <div className="w-[290px]  bg-[#293C32]  h-[80px] flex justify-start items-center rounded-[15px] p-6">
                    <div className="flex justify-start items-center ">
                      <div>
                        <img
                          src="./assets/images/apple.png"
                          className="h-[3rem] w-auto "
                          alt='apple-logo'
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start mx-2">
                        <div>
                          <p className="text-[#FFF] font-medium -tracking-[0.32px] text-[16px] leading-[17px] ">
                          Download on the
                          </p>{' '}
                        </div>
                        <div>
                          <h1 className="text-[#FFF] font-bold -tracking-[0.6px] text-[30px] leading-[32px] ">
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

                          alt='playstore'
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
                <div className="md:mt-[5rem] mt-[3rem] mb-4 flex items-center">
                  <div className="mx-auto md:mx-0 flex items-center space-x-7 md:justify-start justify-center  md:items-end">
                    <div className="flex  items-center justify-start">
                      {' '}
                      <img
                        src="./assets/images/urs.png"
                        className="w-auto h-[3.5rem]"

                        alt='urs'
                      />
                      <div>
                        <p className="md:mx-4 mx-2 text-primary font-normal md:w-[300px] text-[16px] leading-[24px]">
                        Our app has been granted the status of a certified medical device.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full ">
              <img
                src="./assets/images/herohome.png"
                className="h-auto md:w-[800px] w-auto"
                alt="herohome"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
