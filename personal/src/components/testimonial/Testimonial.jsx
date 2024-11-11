import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, quote, testimonialThree } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}

const Testimonial = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div style={{ borderRadius: "10px", padding: "10px" }}>
                <ul style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "20px" }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? { width: "12px", height: "12px", background: "#ff014f", borderRadius: "50%", cursor: "pointer" }
                        : { width: "12px", height: "12px", background: "gray", borderRadius: "50%", cursor: "pointer" }
                }
            ></div>
        ),
    };

    return (
        <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="WHAT CLIENTS SAY" des="Testimonials" />
            </div>
            <div className="max-w-6xl mx-auto">
                <Slider {...settings}>
                    {/* Testimonial 1: Wilson Ochieng */}
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialOne} alt="testimonialOne" />
                                <div className="w-full flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold">Wilson Ochieng</h3>
                                    <p className="text-base tracking-wide text-gray-500">Senior Android Developer</p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col gap-4 lgl:gap-8">
                                    <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">IST Alumni App Project</h3>
                                        <p className="text-base text-gray-400 mt-3">via IST - Sept 2024</p>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        "Simon demonstrated impressive Android development skills in the IST Alumni App project. His proficiency with Kotlin and Jetpack Compose allowed him to build a highly functional and user-friendly app. Simon's attention to detail and commitment to excellence were outstanding."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2: Edwin */}
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialTwo} alt="testimonialTwo" />
                                <div className="w-full flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold">Edwin</h3>
                                    <p className="text-base tracking-wide text-gray-500">MERN Stack Developer</p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col gap-4 lgl:gap-8">
                                    <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">Water Delivery MERN App Project</h3>
                                        <p className="text-base text-gray-400 mt-3">via IST - May 2024</p>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        "Simon delivered an impressive water delivery app using the MERN stack. His technical skills in React and Node.js were crucial in creating a smooth, interactive experience for users. Simon has a remarkable ability to understand project requirements and execute them flawlessly."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3: Mary Keter */}
                    <div className="w-full">
                        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                            <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center">
                                <img className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover" src={testimonialThree} alt="testimonialOne" />
                                <div className="w-full flex flex-col justify-end">
                                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">KCAA</p>
                                    <h3 className="text-2xl font-bold">Mary Keter</h3>
                                    <p className="text-base tracking-wide text-gray-500">Airworthiness Manager</p>
                                </div>
                            </div>
                            <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col gap-4 lgl:gap-8">
                                    <div className="flex flex-col py-6 border-b-2 border-b-gray-900">
                                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">Professionalism & Dedication</h3>
                                        <p className="text-base text-gray-400 mt-3">via KCAA - April 2021</p>
                                        <div className="text-yellow-500 flex gap-1">
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                        "Simon's dedication and precision are unmatched. His role at KCAA demonstrated his capability to maintain high standards in technical work and comply with aviation regulations, ensuring utmost safety in every project."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Testimonial;
