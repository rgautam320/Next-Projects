import React from "react";

const Hero = ({ heading, message, button }) => {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
            {/* Overlay */}
            <div className="absolute h-screen top-0 left-0 right-0 buttom-0 bg-black/70 z-[2]" />
            <div className="p-5 text-white z-[2] mt-[-10rem]">
                <h2 className="text-5xl font-bold">{heading}</h2>
                <p className="py-12 text-xl">{message}</p>
                <button className="px-8 py-2 border">{button}</button>
            </div>
        </div>
    );
};

export default Hero;
