import "../index.css";

import NavigationBar from "@/components/NavigationBar";
import { Slider } from "../components/Slider";
import Footer from "@/components/Footer";
import { QRCode } from "../components/QRCode";

export default function AskCode() {
  return (
    <>
      <NavigationBar />
      <div className="container h-full">
        <Slider />
      </div>
      <Footer />
    </>
  );
}
