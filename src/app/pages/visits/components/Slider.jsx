import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import v_slider_img1 from "../../../../../public/img/v_slider_img1.png";
import v_slider_img2 from "../../../../../public/img/v_slider_img2.png";
import v_slider_img3 from "../../../../../public/img/v_slider_img3.png";
import v_slider_img4 from "../../../../../public/img/v_slider_img4.png";
import v_slider_img5 from "../../../../../public/img/v_slider_img5.png";
import v_slider_img6 from "../../../../../public/img/v_slider_img6.png";
import v_slider_img7 from "../../../../../public/img/v_slider_img7.png";
import v_slider_img8 from "../../../../../public/img/v_slider_img8.png";
import v_slider_img9 from "../../../../../public/img/v_slider_img9.png";
import v_slider_img10 from "../../../../../public/img/v_slider_img10.png";

export const Slider = () => {
    return (
        <div className="slider-container h-screen">
            <div className="vertical_slider flex justify-center gap-3">
                <div className="slider_track gap-3">
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img9} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img8} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img2} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img7} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img6} />
                    </div>
                </div>
                <div className="slider_track middle gap-3">
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img6} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img10} />
                    </div>
                    <div className="slide">
                        <div className="slide_img text-center text-2xl font-bold">
                            CONOCE
                            <br />
                            NUESTROS
                            <br />
                            ESPACIOS
                        </div>
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img4} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img8} />
                    </div>
                </div>
                <div className="slider_track gap-3">
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img6} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img1} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img3} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img7} />
                    </div>
                    <div className="slide">
                        <Image alt="slider img" className="slide_img" src={v_slider_img5} />
                    </div>
                </div>
            </div>
            <Link
                href="/pages/meetUs"
                className="explore_link flex justify-center items-center"
                data-aos="zoom-in"
            >
                Explorar{" "}
                <FontAwesomeIcon className="icon" icon={faArrowRight} width={16} />
            </Link>
        </div>
    );
};
