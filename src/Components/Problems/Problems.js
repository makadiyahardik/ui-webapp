import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Problems() {


  const items1=[
    <div className="">
    <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
      <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
        Stany przedcukrzycowe 
      </p>
    </div>
  </div>,
  <div className=" mx-5">
    <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
      <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
        Insulinooporność
      </p>
    </div>
  </div>,
  <div className=" mx-5">
    <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
      <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
        Stany przedcukrzycowe
      </p>
    </div>
  </div>,
  <div className=" mx-5">
    <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
      <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
        Zaburzenia lipidowe
      </p>
    </div>
  </div>,
  
  <div className=" mx-5">
  <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
    <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
      Przedwczesne starzenie
    </p>
  </div>
</div>
  ]

  const items2=[
    <div className=" mx-3">
            <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
                Otyłość
              </p>
            </div>
          </div>,
          <div className=" mx-3">
            <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
                Insulinooporność
              </p>
            </div>
          </div>,
          <div className=" mx-3">
            <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
                   Hashimoto
              </p>
            </div>
          </div>,
          <div className=" mx-3">
            <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
                Zmień nitya
              </p>
            </div>
          </div>,<div className=" mx-3">
            <div className="flex justify-center items-center w-auto text-center  bg-[#F7F7F7] rounded-full p-2">
              <p className="text-[18px] font-normal leading-[19px] text-bgSeconday mx-3">
                Zmień uva laov
              </p>
            </div>
          </div>
  ]

  const responsive = {
    464: { items: 3 },
    768: { items: 3 },
    1024: { items: 4 },
  };
  const responsive2 = {
    464: { items: 3 },
    768: { items: 3 },
    1024: { items: 5 },
  };
  return (
    <div className="relative " id="Technology">
      <div className="md:max-w-[1400px] mx-auto  justify-center items-center w-full relative  ">
        <div className="flex flex-wrap justify-center items-center md:space-x-10 space-x-3 ">
         
        <AliceCarousel
          mouseTracking
          items={items1}
          responsive={responsive}
          infinite={true}
          disableDotsControls
          disableButtonsControls
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={2000}
        />
      
       
       
    
        </div>

        <div className="flex mt-10 flex-wrap justify-center items-center md:space-x-10 space-x-3 ">
         
         <AliceCarousel
           mouseTracking
           items={items2}
           responsive={responsive2}
           infinite={true}
           disableDotsControls
           disableButtonsControls
           autoPlay
           autoPlayStrategy="none"
           autoPlayInterval={2000}
           animationDuration={2000}
         />
       
        
        
     
         </div>
      </div>
    </div>
  );
}

export default Problems;
