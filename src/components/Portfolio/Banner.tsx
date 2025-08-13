import React from 'react';
import Hero from '../SVG/Hero';
import Image from 'next/image';

const Banner = () => {
    return (
        <section>
            <div
                className="relative flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-10 sm:py-20 lg:flex-row 2xl:px-0"
                style={{ backgroundImage: `url("background/Banner.png")` }}
            >
                {/* Dark Mode Overlay */}
                <div className="absolute inset-0 bg-[#020720] opacity-0 dark:opacity-85"></div>

                {/* Hero SVG */}
                <div className="absolute left-0 top-0">
                    <Hero width="250" height="350" className="hidden sm:flex" />
                    <Hero
                        width="150"
                        height="250"
                        className="pb-20 sm:hidden"
                    />
                </div>

                <div className="absolute bottom-10 right-4 sm:right-20">
                    <Image
                        src="/deco/Circle.png"
                        alt="techserve4u Hero"
                        width="41"
                        height="41"
                        className="sm:h-[101px] sm:w-[101px]"
                    />
                </div>

                <h3 className="z-10 p-5 text-3xl font-semibold text-white lg:p-24 lg:text-7xl">
                    Our Portfolio
                </h3>
            </div>
        </section>
    );
};
export default Banner;
