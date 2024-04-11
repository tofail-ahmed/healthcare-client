import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/UI/HomePage/WhyUS/WhyUs";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
const HomePage = () => {
 
  return (
    <>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
      <HowItWorks/>
    </>
  );
};

export default HomePage;
