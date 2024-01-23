
"use client";
import "../index.css";

import NavigationBar from "@/components/NavigationBar";
import { Slider } from "../components/Slider";
import Footer from "@/components/Footer";
import { NewUserForm } from "../components/NewUserForm";


export default function NewVisit() {
  return (
    <>
      <NavigationBar />
      <div className="container h-full">
        <NewUserForm />
        <Slider />
      </div>
      <Footer />
    </>
  );
}
