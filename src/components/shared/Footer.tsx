'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FacebookIcon from '../SVG/FacebookIcon';
import TwitterIcon from '../SVG/TwitterIcon';
import TelegramIcon from '../SVG/TelegramIcon';
import LinkedInIcon from '../SVG/LinkedInIcon';
import Flower from '../SVG/Flower';
// import Ring from '../SVG/Ring';
import Star from '../SVG/Star';
import StarDot from '../SVG/StarDot';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <section id="contact" className="relative overflow-hidden bg-nav">
            {/* Background Icons */}
            <div className="absolute -bottom-8 -left-8 opacity-50">
                <Flower className="animate-spin" />
            </div>

            {/* <div className="absolute left-1/4 top-1/2">
                <Ring />
            </div> */}

            <div className="absolute left-1/2 top-1/3 opacity-50">
                <Star className="animate-spin" />
            </div>

            <div className="absolute right-10 top-14">
                <StarDot className="animate-spin" />
            </div>

            <div className="myContainer relative">
                {/* Footer Section */}
                <div>
                    <div className="mx-auto grid grid-cols-2 space-y-10 py-8 text-left md:grid-cols-4 lg:py-14 lg:pb-28">
                        <div className="col-span-2 mx-auto md:col-span-1">
                            <div className="mx-auto mt-8 w-full space-y-6">
                                {/* Logo */}
                                <Link href="/" className="">
                                    <Image
                                        src="/logo/logo.svg"
                                        alt="scalestartup Logo"
                                        width={152.24}
                                        height={50}
                                        className="h-auto w-full object-cover"
                                    />
                                </Link>

                                <p className="font-light leading-7 tracking-wider text-white opacity-80">
                                    Delivering innovative tech solutions to
                                    empower businesses worldwide.
                                </p>
                            </div>
                        </div>

                        <div className="mx-0 md:col-span-1 md:mx-auto">
                            <div className="space-y-6">
                                <h4 className="pb-2 text-xl font-bold text-white">
                                    Company
                                </h4>

                                <ul className="space-y-2 text-sm text-white opacity-80">
                                    <li>
                                        <Link
                                            href="#about-us"
                                            className="hover:underline"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#contact"
                                            className="hover:underline"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#how-we-work"
                                            className="hover:underline"
                                        >
                                            How it works
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mx-0 md:col-span-1 md:mx-auto">
                            <div className="space-y-6">
                                <h4 className="pb-2 text-xl font-bold text-white">
                                    Support
                                </h4>

                                <ul className="space-y-2 text-sm text-white opacity-80">
                                    <li>
                                        <Link
                                            href="/privacy-policy"
                                            className="hover:underline"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/terms-and-conditions"
                                            className="hover:underline"
                                        >
                                            Term and Conditions
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="#faq"
                                            className="hover:underline"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mx-0 md:col-span-1 md:mx-auto">
                            <div className="space-y-6">
                                <h4 className="pb-2 text-xl font-bold text-white">
                                    Contact Info
                                </h4>

                                <ul className="space-y-2 text-sm text-white opacity-80">
                                    <li>hello@scalestartup.ai</li>
                                    <div className="flex items-center space-x-6 py-4">
                                        <Link
                                            href=""
                                            className="hover:underline"
                                        >
                                            <FacebookIcon />
                                        </Link>
                                        <Link
                                            href=""
                                            className="hover:underline"
                                        >
                                            <TwitterIcon />
                                        </Link>
                                        <Link
                                            href=""
                                            className="hover:underline"
                                        >
                                            <TelegramIcon />
                                        </Link>
                                        <Link
                                            href=""
                                            className="hover:underline"
                                        >
                                            <LinkedInIcon />
                                        </Link>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="border-t-1 border-white opacity-15" />

                    <div className="pt-4 text-center text-white opacity-70">
                        <p>© {year} All rights reserved by ScaleStartup</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
