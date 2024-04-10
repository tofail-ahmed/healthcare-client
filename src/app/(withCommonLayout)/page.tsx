import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
const HomePage = () => {
 
  return (
    <>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
    </>
  );
};

export default HomePage;
