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
  const [isFormActive, setIsFormActive] = useState(true);
  const [formData, setFormData] = useState({
    company_name: "",
    company_nit: "",
    company_description:"",
    email: "",
    phone: "",
    full_name: "",
    role: "",
    english_level: "",
    developers_cantity: 0,
    service: "full time",
    technologies: [],
  })

  return (
    <>
      {!isFormActive? (
        <>
          <NavigationBar />
          <HeaderHome />
          <AboutUs />
          <CampersListing />
          <SuccesStories />
          <Footer />
        </>
      ) : (
        <FormRecruitment setIsFormActive={setIsFormActive} setFormData={setFormData} formData={formData}/>
      )}
    </>
  );
}

export default Home;
