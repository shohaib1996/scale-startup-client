import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import ArrowRight from '../SVG/ArrowRight';
import Hero from '../SVG/Hero';
import Snake from '../SVG/Snake';
import '../../styles/Animator.css';
import Agency from '../SVG/Agency';
import Link from 'next/link';

const Banner = () => {
    return (
        <section
            className="relative z-20 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat py-5 lg:flex-row lg:py-20"
            style={{ backgroundImage: `url("background/Banner.png")` }}
        >
            {/* Dark Mode Overlay */}
            <div className="absolute inset-0 -z-10 bg-[#020720] opacity-0 dark:opacity-85"></div>

            {/* Decorative Element */}
            <div className="absolute left-0 top-0 hidden lg:block">
                <Hero />
            </div>
            <div className="absolute bottom-20 right-1/2 translate-x-1/2 transform sm:bottom-40 lg:right-1/2 lg:translate-x-0">
                <Snake />
            </div>
            <div className="absolute bottom-10 right-4 sm:right-20">
                <Image
                    src="/deco/Circle.png"
                    alt="techserve4u Hero"
                    width="61"
                    height="61"
                    className="rotating-bounce sm:h-[101px] sm:w-[101px]"
                />
            </div>

            {/* Main Content */}
            <div className="myContainer mx-auto flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-10 lg:px-0">
                {/* Text Section */}
                <div className="h-full w-full flex-col items-stretch justify-between space-y-10 text-center lg:w-1/2 lg:space-y-6 lg:pl-6 lg:text-left xl:p-0">
                    {/* <p className="sectionName mx-auto lg:mx-0 ">
                        Empowering Startups to Scale with Technology and
                        Expertise
                    </p> */}

                    <div className="space-y-4">
                        <p className="heading mx-auto text-center leading-10 !text-white lg:mx-0 lg:text-left lg:text-6xl">
                            Your Trusted Partner for Startup Growth Solutions
                        </p>

                        <p className="para mx-auto max-w-[700px] text-center !text-white lg:mx-0 lg:text-left">
                            We offer custom software development, white-label
                            solutions, and business growth support to help your
                            startup achieve rapid, sustainable growth.
                        </p>
                    </div>

                    <Link href="#contact">
                        <Button variant="ts4uSecondary" className="">
                            <ArrowRight className="" /> Scale 10X Faster
                        </Button>
                    </Link>
                </div>

                {/* Image Section */}
                {/* <div className="ml-16 flex w-full scale-75 transform justify-center lg:w-1/2 lg:justify-end lg:pl-0 2xl:scale-100">
                    <div className="relative">
                        <div className="relative">
                            <div className="relative z-20 h-[350px] w-[260px] overflow-hidden rounded-[248px] sm:h-[484px] sm:w-[363px]">
                                <Image
                                    src="/image/Hero1.png"
                                    alt="techserve4u Hero"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute left-[0px] top-[-16px] z-10 h-[350px] w-[260px] rounded-[248px] border-[3px] border-secondary sm:h-[484px] sm:w-[363px]"></div>
                        </div>

                        <div className="absolute -left-[100px] bottom-[0px] z-20 sm:-left-[180px]">
                            <div className="relative">
                                <div className="relative z-20 h-[220px] w-[160px] overflow-hidden rounded-[248px] border-[3px] border-secondary object-cover sm:h-[338px] sm:w-[249px]">
                                    <Image
                                        src="/image/Hero3.png"
                                        alt="techserve4u Hero"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="absolute -left-4 top-36 z-20 h-[72px] w-[72px] sm:-left-8 sm:top-56 sm:h-[92px] sm:w-[92px]">
                                    <Agency
                                        width={92}
                                        height={92}
                                        primaryColor="#F15A2D"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="z-10 overflow-hidden rounded-md lg:pr-6 lg:text-left xl:p-0">
                    <iframe
                        src="https://player.vimeo.com/video/1069751828?h=d7615b1781"
                        className="aspect-video h-full w-full rounded-md object-cover sm:h-[500px]"
                    ></iframe>
                    {/* <Image
                        src="/videotest.png"
                        width={1920}
                        height={1080}
                        alt=""
                        className="aspect-[9/16] h-[400px] w-full rounded-md object-cover"
                    ></Image> */}
                </div>
            </div>
        </section>
    );
};

export default Banner;
