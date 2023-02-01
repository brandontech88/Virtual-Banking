import React from 'react'
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { useState } from 'react';
import HeroSection from '../HeroSection';
import Services from '../Services';
import InfoSection from '../Infosection';
import { homeObjone, homeObjTwo,homeObjThree } from '../Infosection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <InfoSection {...homeObjone}/> 
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      
    </>
  )
}

export default Home;


