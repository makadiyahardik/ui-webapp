import React, { useState } from 'react';
import Accordion from '../../Components/accordiation/Accordiation';
import Footer from '../../Components/Footer/Footer';

const FAQ = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  const [list] = useState([
    {
      title: 'Czy mogę anulować subskrypcję w dowolnym momencie?',
      desc: 'Subskrypcja może zostać anulowana w dowolnym momencie i nie będzie przedłużona na kolejny okres. Anulowanie subskrypcji dokonuje się w ustawieniach telefonu.',
    },
    {
      title: 'Czy mogę anulować subskrypcję w dowolnym momencie?',
      desc: 'Subskrypcja może zostać anulowana w dowolnym momencie i nie będzie przedłużona na kolejny okres. Anulowanie subskrypcji dokonuje się w ustawieniach telefonu.',
    },
    {
      title: 'Czy mogę anulować subskrypcję w dowolnym momencie?',
      desc: 'Subskrypcja może zostać anulowana w dowolnym momencie i nie będzie przedłużona na kolejny okres. Anulowanie subskrypcji dokonuje się w ustawieniach telefonu.',
    },
    {
      title: 'Czy mogę anulować subskrypcję w dowolnym momencie?',
      desc: 'Subskrypcja może zostać anulowana w dowolnym momencie i nie będzie przedłużona na kolejny okres. Anulowanie subskrypcji dokonuje się w ustawieniach telefonu.',
    },
  ]);
  return (

    <div className='relative'>
    <div className="footerbg h-[647px] w-[700px] overflow-hidden -bottom-[40%]  absolute md:bottom-0 right-0 "></div>
    <div className="flex flex-col mt-[3rem]  justify-center items-center w-full mx-auto">
       
       <div className="flex flex-col justify-center items-center w-full mx-auto">
         <h1 className="text-black text-center font-extrabold mt-4 text-[45px] md:text-[65px] leading-[72px] md:tracking-[-1.3px] tracking-[-0.9px]">
           Pytania? Odpowiedzi.
         </h1>
         <p className="p-4 font-normal md:w-[900px] md:text-[18px] md:leading-[38px] text-center text-secondary text-[16px] leading-[26px]  ">
           Wierzymy, że nie ma głupich pytań, zwłaszcza jeśli chodzi o zdrowie i
           wszelkie tematy z nim związane. Poniżej znajdziesz odpowiedzi na
           najczęściej zadawane pytania. Jeśli coś pozostaje niejasne lub Twoim
           zdaniem temat nie został wyczerpany - napisz do nas.
         </p>
       </div>
       <div className=" md:max-w-[900px] w-full md:px-10 px-5">
         {list.map((item, index) => {
           return (
             <>
               <Accordion
                 open={index === open}
                 toggle={() => toggle(index)}
                 key={index}
                 title={item.title}
                 desc={item.desc}
               />
             </>
           );
         })}
       </div>
       
     </div>
     <Footer/>
    </div>
  
  );
};

export default FAQ;
