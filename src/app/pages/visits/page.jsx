import "./index.css";
import Image from "next/image";
import CamperWoman from "../../../../public/img/mujerCamper.png";

function SliderInfinite() {
  return (
    <div className='vertical_slider'>
        <div className="slider_track">
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
          <div className="slide"><Image className="slide_img" src={CamperWoman}/></div>
        </div>
    </div>
  )
}

export default SliderInfinite;