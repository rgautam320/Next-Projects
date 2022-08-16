import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

import IgImg1 from "../public/ig-img-1.jpeg";
import IgImg2 from "../public/ig-img-2.jpeg";
import IgImg3 from "../public/ig-img-3.jpeg";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";

const InstagramImg = ({ socialImage }) => {
    return (
        <div className="relative">
            <Image src={socialImage} alt="Instagram" className="h-full w-full" layout="responsive" />
            {/* Overlay */}
            <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group hover:cursor-pointer">
                <p className="text-gray-300 hidden group-hover:block">
                    <FaInstagram size={30} />
                </p>
            </div>
        </div>
    );
};

const Instagram = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">
            <p className="text-2xl font-bold">Follow me on Instagram</p>
            <p className="pb-4">@rgautam320</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
                <InstagramImg socialImage={IgImg1} />
                <InstagramImg socialImage={IgImg2} />
                <InstagramImg socialImage={IgImg3} />
                <InstagramImg socialImage={IgImg4} />
                <InstagramImg socialImage={IgImg5} />
                <InstagramImg socialImage={IgImg6} />
            </div>
        </div>
    );
};

export default Instagram;
