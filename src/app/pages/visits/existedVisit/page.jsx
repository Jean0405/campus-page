"use client";
import "../index.css";

import { ExistedUserForm } from "../components/ExistedUserForm";
import NavigationBar from "@/components/NavigationBar";
import { Slider } from "../components/Slider";
import Footer from "@/components/Footer";

export default function ExistedVisit() {
  return (
    <>
      <NavigationBar />
      <div className="container h-full">
        <ExistedUserForm />
        <Slider />
      </div>
      <Footer />
    </>
  );
}
