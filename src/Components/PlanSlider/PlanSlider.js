import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const PlanSlider = () => {
  const items = [
    <div className="md:flex flex md:flex-row flex-col-reverse justify-center items-center mx-auto w-full">
      <div className="flex justify-center items-center md:w-1/2">
      
        <div>
          {' '}
          <img
            src="./assets/images/iphone14.png"
            className="h-auto md:w-[800px] w-auto"
            alt="iphone14"
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-1/2">
        <div className="flex flex-col justify-start items-start">
          <div>
            <div className="font-bold text-[#CBCBCB] tracking-[-0.6px] md:tracking-[-1.3px] md:text-[65px] text-[35px] md:leading-[112px] ">
              <h1>
                Twój spersonalizowany
                <br />
                <span className="text-[#8FBD12]  ">Dzienny plan</span>{' '}
              </h1>
            </div>
            <p className="font-medium text-secondary md:text-[18px] md:leading-[38px]   text-[16px] leading-[36px] mt-[2rem]">
              Twoja spersonalizowana lista zadań, dzięki której poprawisz
              zdrowie i będziesz cieszyć się dłuższym życiem
            </p>
          </div>
        </div>
      
      </div>
    </div>,
     <div className="md:flex flex md:flex-row flex-col-reverse justify-center items-center mx-auto w-full">
     <div className="flex justify-center items-center md:w-1/2">
     
       <div>
         {' '}
         <img
           src="./assets/images/iphone14.png"
           className="h-auto md:w-[800px] w-auto"
           alt="iphone14"
         />
       </div>
     </div>

     <div className="flex justify-center items-center w-full md:w-1/2">
       <div className="flex flex-col justify-start items-start">
         <div>
           <div className="font-bold text-[#CBCBCB] tracking-[-0.6px] md:tracking-[-1.3px] md:text-[65px] text-[35px] md:leading-[112px] ">
             <h1>
               Twój spersonalizowany
               <br />
               <span className="text-[#8FBD12]  ">Dzienny plan 2</span>{' '}
             </h1>
           </div>
           <p className="font-medium text-secondary md:text-[18px] md:leading-[38px]   text-[16px] leading-[36px] mt-[2rem]">
             Twoja spersonalizowana lista zadań, dzięki której poprawisz
             zdrowie i będziesz cieszyć się dłuższym życiem
           </p>
         </div>
       </div>
     
     </div>
   </div>,
  ];
  const responsive = {
    464: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="md:max-w-[1400px] my-[2rem]  md:px-10  mx-auto w-full relative">
      
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite={true}
          
          renderPrevButton={() => {
            return (
              <div className="hidden md:flex p-4 absolute left-[-4%] top-[35%] cursor-pointer md:flex hidden">
                <img
                  src="./assets/images/leftarrow.png"
                  className="h-auto md:w-[3rem] w-auto"
                  alt="leftarrow"
                />
              </div>
            );
          }}
          renderNextButton={() => {
            return (
              <div className="hidden md:flex p-4 absolute right-0 top-[35%] cursor-pointer md:flex hidden">
                <img
                  src="./assets/images/rightarrow.png"
                  className="h-auto md:w-[3rem] w-auto"
                  alt="rightarrow"
                />
              </div>
            );
          }}
        />
    </div>
  );
};

export default PlanSlider;
