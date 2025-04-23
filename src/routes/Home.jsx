import React from "react";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import ImgSlider from "../Components/ImgSlider/ImgSlider";
import ClientSlide from "../Components/ClientSlide/ClientSlide";
import NewsSection from "../Components/NewsSection/NewSection";
import LogoSlider from "../Components/LogoSlider/LogoSlider";
import Social from "../Components/Social/Social";
import PopUpForm from "../Components/PopUpForm/PopUpForm";
import { useState } from "react";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopUp = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Hero handleOpenPopup={handleOpenPopup}></Hero>
      <About></About>
      <Service></Service>
      <ImgSlider></ImgSlider>
      <ClientSlide></ClientSlide>
      <NewsSection></NewsSection>
      <LogoSlider></LogoSlider>
      <Social></Social>
      <Footer></Footer>
      <PopUpForm
        popUp={showPopup}
        setPopUp={setShowPopup}
        handleClosePopUp={handleClosePopUp}
      ></PopUpForm>
    </>
  );
}

export default Home;
