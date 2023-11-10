import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const Dziala = () => {
    const items = [
       <div className='my-[3rem] flex flex-col justify-center items-center mx-auto w-full'>
         <div className="w-[340px] md:w-[380px] md:h-[480px]  h-[540px] bg-[#EDF4EA] rounded-[16px]  flex flex-col  justify-start">
        <div className="p-4">
          {' '}
          <h1 className="text-[#FFF] font-extrabold mt-4 text-[80px] leading-[85px] -tracking-[1.2px]">
            1
          </h1>
        </div>
        <div className="flex flex-col justify-center p-6">
          <div className="  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center"></div>

          <div className="flex flex-col justify-end items-start">
            {' '}
            <div>
              <h1 className="text-black font-extrabold mt-4 text-[24px] md:text-[32px] leading-normal">
                Analiza zdrowotna i zalecenia
              </h1>
            </div>
            <p className="text-primary font-normal mt-4 text-[18px] leading-[30px]">
              System na podstawie wywiadu i częściowych badań krwi,
              analizuje zdrowie i tworzy zalecenia
            </p>
          </div>
        </div>
      </div>
       </div>,
       <div className="my-[3rem] my-[3rem] flex flex-col justify-center items-center mx-auto w-full">
       <div className="w-[340px] md:w-[380px] md:h-[480px]  h-[540px] bg-[#E6F0D2] rounded-[16px]  flex flex-col  justify-start">
         <div className="p-4">
           {' '}
           <h1 className="text-[#FFF] font-extrabold mt-4 text-[80px] leading-[85px] -tracking-[1.2px]">
            2
           </h1>
         </div>
         <div className="flex flex-col justify-center p-6">
           <div className="  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center"></div>

           <div className="flex flex-col justify-end items-end">
             {' '}
             <div>
               <h1 className="text-black font-extrabold mt-4 text-[31px] leading-normal">
               Personalizacja programu i miesięczna kontrola
               </h1>
             </div>
             <p className="text-primary font-normal mt-4 text-[18px] leading-[30px]">
               System na podstawie wywiadu i częściowych badań krwi,
               analizuje zdrowie i tworzy zalecenia
             </p>
           </div>
         </div>
       </div>
     </div>,
      <div className="my-[3rem] my-[3rem] flex flex-col justify-center items-center mx-auto w-full">
      <div className="w-[340px] md:w-[380px] md:h-[480px]  h-[540px] bg-[#D8E0C2] rounded-[16px]  flex flex-col  justify-start">
        <div className="p-4">
          {' '}
          <h1 className="text-[#FFF] font-extrabold mt-4 text-[80px] leading-[85px] -tracking-[1.2px]">
           3
          </h1>
        </div>
        <div className="flex flex-col justify-center p-6">
          <div className="  w-[64px] h-[64px] rounded-full p-3 flex justify-center items-center"></div>

          <div className="flex flex-col justify-end items-start">
            {' '}
            <div>
              <h1 className="text-black font-extrabold mt-4 text-[31px] leading-normal">
              24/7 wsparcie programu przez lekarzy i specjalistów
              </h1>
            </div>
            <p className="text-primary font-normal mt-4 text-[18px] leading-[30px]">
            Nie zostawiamy Ciebie samego, nasza kadra medyczna jest na miejscu i wesprze Ciebie w razie potrzeby
            </p>
          </div>
        </div>
      </div>
    </div>
       ];
       const responsive = {
         464: { items: 1 },
         768: { items: 3 },
         1024: { items: 4 },
       }
  return (
    <div className="md:max-w-[1400px]  md:px-10  mx-auto w-full relative">
        <h1 className="text-primary font-extrabold mt-4 text-[44px] leading-[46px] md:text-[65px] md:leading-[69px] md:tracking-[-1.2px] tracking-[-0.88px] md:px-0 px-5">
              Jak to działa:
            </h1>
            <div className="md:max-w-[1400px] mx-auto  justify-center items-center w-full relative  space-x-12 ">
      <AliceCarousel
            mouseTracking
            items={items}
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
    </div>
  );
};

export default Dziala;
