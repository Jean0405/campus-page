"use client";

import React, { useState } from "react";

import NavigationBar from "@/components/NavigationBar";
import HeaderHome from "./components/HeaderHome";
import AboutUs from "./components/AboutUs";
import CampersListing from "./components/CampersListing";
import SuccesStories from "./components/SuccesStories";
import Footer from "@/components/Footer";
import FormRecruitment from "./components/FormRecruitment";

function Home() {
  const [isFormActive, setIsFormActive] = useState(false);
  return (
    <>
      {isFormActive ? (
        <>
          <NavigationBar />
          <HeaderHome />
          <AboutUs />
          <CampersListing />
          <SuccesStories />
          <Footer />
        </>
      ) : (
        <FormRecruitment setIsFormActive={setIsFormActive}/>
      )}
    </>
  );
}

export default Home;
