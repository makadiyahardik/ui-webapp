import React, { useState } from 'react';
import Header from './Header/Header';
import Home from './Pages/Home/Home'
import Technology from './Components/technology/Technology';
import Dziala from './Pages/Dziala/Dziala';
import Helfio from './Pages/Helfio/Helfio';
import TechStacks from './Pages/TechStacks/TechStacks';
import Plans from './Pages/Plans/Plans';
import PlanSlider from './Components/PlanSlider/PlanSlider';
import Applications from './Pages/Applications/Applications';
import StartCare from './Pages/StartCare/StartCare';
import FAQ from './Pages/FAQ/FAQ';
import Footer from './Components/Footer/Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setShowNav(false);
  };
  const CloseModal = () => {
    setIsOpen(false);
  };
  const onMoboClicks = () => {
    setShowNav(!showNav);
  };
  return (
   <React.Fragment>


<Header
        isOpen={isOpen}
        openModal={openModal}
        CloseModal={CloseModal}
        showNav={showNav}
        setShowNav={setShowNav}
        onMoboClicks={onMoboClicks}
      />
      <Home/>
      <Technology/>
      <Dziala/>
      <Helfio/>
      <TechStacks/>
      <Plans/>
     <Applications/>
     <StartCare/>

     <FAQ/>
     <Footer/>
   </React.Fragment>
  );
}

export default App;
