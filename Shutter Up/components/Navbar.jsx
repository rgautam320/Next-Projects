import Link from "next/link";
import React, { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ heading }) => {
    const [nav, setNav] = useState(false);
    const [textColor, setTextColor] = useState("white");
    const [color, setColor] = useState("transparent");

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 90) {
                setColor("#ffffff");
                setTextColor("#000000");
            } else {
                setColor("transparent");
                setTextColor("#ffffff");
            }
        });
    }, []);

    return (
        <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
                <Link href="/">
                    <h1 style={{ color: `${textColor}` }} className="font-bold">
                        {heading}
                    </h1>
                </Link>
                <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
                    <li className="p-4 hover:font-bold">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 hover:font-bold">
                        <Link href="/#gallery">Gallery</Link>
                    </li>
                    <li className="p-4 hover:font-bold">
                        <Link href="/#instagram">Instagram</Link>
                    </li>
                    <li className="p-4 hover:font-bold">
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div className="block sm:hidden z-10">
                    {!nav ? (
                        <AiOutlineMenu size={20} onClick={handleNav} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineClose size={20} onClick={handleNav} />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`${
                        nav ? "sm:hidden left-0" : "left-[-100%]"
                    } absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300`}
                >
                    <ul>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/">Home</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/#gallery">Gallery</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/#instagram">Instagram</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
