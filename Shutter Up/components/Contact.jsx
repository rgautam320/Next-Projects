import React from "react";

const Contact = ({ heading }) => {
    return (
        <div className="max-w-[1240px] mx-auto p-4 mb-12">
            <h1 className="text-2xl font-bold text-center p-4 mb-6">{heading}</h1>
            <form className="max-w-[600px] m-auto">
                <div className="grid grid-cols-2 gap-2">
                    <input className="border shadow-lg p-3 outline-none" type="text" placeholder="Name" />
                    <input className="border shadow-lg p-3 outline-none" type="email" placeholder="Email" />
                </div>
                <input className="border shadow-lg p-3 w-full my-4 outline-none" type="text" placeholder="Subject" />
                <textarea
                    className="border shadow-lg p-3 w-full outline-none resize-none"
                    type="text"
                    cols="30"
                    rows="6"
                    placeholder="Message"
                />
                <button
                    type="submit"
                    className="border outline-none shadow-lg p-3 w-full mt-2 bg-slate-500 text-white hover:bg-slate-700 ease-in duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
