import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Applications() {
  const items = [
    <div className='flex justify-center items-center text-center mx-auto w-full'>
<img
      src="./assets/images/Wellbeing_5.png"
      className="w-[70%] h-auto"
      alt=""
    />
    </div>,
       <div className='flex justify-center items-center text-center mx-auto w-full'>
       <img
      src="./assets/images/Wellbeing_4.png"
      className="w-[70%] h-auto"
      alt=""
    />
           </div>,
   
   <div className='flex justify-center items-center text-center mx-auto w-full'>
<img
      src="./assets/images/Wellbeing_3.png"
      className="w-[70%] h-auto"
      alt=""
    />
       </div>,
    

    <div className='flex justify-center items-center text-center mx-auto w-full'>
    <img
      src="./assets/images/Wellbeing_1.png"
      className="w-[70%] h-auto"
      alt=""
    />
           </div>,
 
  ];
  const responsive = {
    464: { items: 1 },
    768: { items: 3 },
    1024: { items: 6 },
  };

  return (
    <div className="relative " id="Technology">
      <div className="md:max-w-[1400px]  md:px-10 px-5 mx-auto w-full relative">
        <div className="">
          <div className="font-bold text-center text-[#CBCBCB] md:tracking-[-0.48px] md:text-[24px] md:leading-normal -tracking-[0.32px] text-[16px] ">
            <h1>NIEMOŻLIWE STAŁO SIĘ MOŻLIWE</h1>
          </div>
          <h1 className="text-black text-center font-extrabold mt-4 text-[45px] md:text-[65px] leading-[72px] md:tracking-[-1.3px] tracking-[-0.9px]">
            to wszystko w jednej aplikacji
          </h1>
        </div>
        <div className="mx-auto my-[4rem] md:max-w-[1400px]  justify-center items-center w-full relative  space-x-12 ">
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

        <div className="md:flex  md:space-x-12 flex flex-col md:flex-row justify-center items-center mx-auto w-full">
          <div className="applehealth md:w-[580px] md:h-[483px] w-full h-full  p-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#FFF] font-extratext-[16px]  bold mt-4 md:text-[28px] leading-normal md:tracking-[1.2px]   tracking-[10.96px] ">
                WSPIERANE PRZEZ
              </p>
              <h1 className="text-[#FFF] font-extrabold mt-4 text-[40px] leading-[74px] -tracking-[0.96px] ">
                Apple Health
              </h1>
              <div>
                <img
                  src="./assets/images/applehealth.png"
                  className="w-[200px] h-[200px]"
                  alt=""
                />
              </div>
              <div className="rounded-[20px] flex justify-center items-center space-x-3 border-2 border-[#FFF]  py-3 pr-[26px] pl-[33px]  bg-opacity-20 bg-[#FFF]  text-[#FFF] font-medium mt-4 text-[18px] leading-[19px] -tracking-[0.36] ">
                <div>Learn More</div>
                <div> <img
                  src="./assets/images/Learn_More.png"
                  className="w-6 h-6"
                  alt=""
                /></div>
              </div>
            </div>
          </div>
          <div className="googleFit md:mt-0 mt-10 md:w-[580px] md:h-[483px] w-full h-full  p-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-[#FFF] font-extratext-[16px]  bold mt-4 md:text-[28px] leading-normal md:tracking-[1.2px]   tracking-[10.96px] ">
                WSPIERANE PRZEZ
              </p>
              <h1 className="text-[#FFF] font-extrabold mt-4 text-[40px] leading-[74px] -tracking-[0.96px] ">
            Google Fit
              </h1>
              <div>
                <img
                  src="./assets/images/GoogleFit.svg"
                  className="w-[200px] h-[200px]"
                  alt=""
                />
              </div>
              <div className="rounded-[20px] flex justify-center items-center space-x-3 border-2 border-[#FFF]  py-3 pr-[26px] pl-[33px]  bg-opacity-20 bg-[#FFF]  text-[#FFF] font-medium mt-4 text-[18px] leading-[19px] -tracking-[0.36] ">
                <div>Learn More</div>
                <div> <img
                  src="./assets/images/Learn_More.png"
                  className="w-6 h-6"
                  alt=""
                /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full mx-auto ">
          <h1 className="customeColor font-bold text-[36px]  md:text-[81px] tracking-[-0.72px]  md:tracking-[-1.62px] md:w-[1100px] w-full my-2 md:leading-[140px] leading-[62px] ">
            Krótko mówiąc, Twoje zdrowie zamknięte w jednej aplikacji,
            stworzonej przez zespół lekarzy i specjalistów. Rozwiązanie, które
            działa i dzięki któremu NAPRAWDĘ będziesz żyć dłużej.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Applications;
