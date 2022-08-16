import React, { useState } from "react";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ sliderData }) => {
    const [current, setCurrent] = useState(0);
    const length = sliderData?.length || 0;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(sliderData) || sliderData?.length === 0) {
        return null;
    }

    return (
        <div className="max-w-[1240px] mx-auto pt-20">
            <h1 className="text-2xl font-bold text-center p-4">Gallery</h1>
            <div className="relative flex justify-center p-4">
                {sliderData?.map((val, ind) => {
                    return (
                        <div key={ind} className={ind === current ? "opacity-[1] ease-in duration-1000" : "opacity-0"}>
                            <FaArrowCircleLeft
                                onClick={prevSlide}
                                size={50}
                                className="absolute top-[40%] sm:top-[48%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                            />
                            {ind === current && (
                                <Image src={val.image} alt="Slider" width="1440" height="600" objectFit="cover" />
                            )}
                            <FaArrowCircleRight
                                onClick={nextSlide}
                                size={50}
                                className="absolute top-[40%] sm:top-[48%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Slider;
