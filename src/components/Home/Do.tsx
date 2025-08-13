import React from 'react';
import Image from 'next/image';
import Bird from '../SVG/Bird';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Java from '../SVG/Technology/Java';
import PHP from '../SVG/Technology/PHP';
import Python from '../SVG/Technology/Python';
import Javascript from '../SVG/Technology/Javascript';
import Link from 'next/link';

const Do = () => {
    return (
        <section className="relative bg-backWhite py-6 md:py-14">
            <div className="myContainer mx-auto flex flex-col-reverse items-center lg:flex-row">
                {/* Left Side with Circles and Images */}
                <Button variant="ts4uPrimary" className="flex lg:hidden">
                    <ArrowRight /> Book a Meeting
                </Button>

                <div className="relative flex items-center justify-center p-5 pl-24 lg:w-1/2 lg:pl-40">
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative h-[320px] max-h-full w-[230px] max-w-full sm:h-[400px] sm:w-[280px] lg:h-[520px] lg:w-[370px]">
                            <div className="relative h-full w-full">
                                <Image
                                    src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736971326-Do1.png"
                                    alt="Image 1"
                                    fill
                                    className="rounded-full border-4 border-tertiary object-cover md:border-8"
                                />
                            </div>
                        </div>

                        <div className="absolute -left-20 bottom-0 h-[190px] max-h-full w-[140px] max-w-full sm:-left-28 sm:h-[260px] sm:w-[200px] lg:-left-40 lg:h-[340px] lg:w-[250px]">
                            <div className="relative h-full w-full">
                                <Image
                                    src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736988239-Do2.png"
                                    alt="Image 2"
                                    fill
                                    className="scale-x-[-1] transform rounded-full border-4 border-secondary object-cover md:border-8"
                                />
                            </div>
                        </div>

                        <div className="absolute -left-24 top-0 overflow-hidden lg:-left-44">
                            <Bird
                                width={100}
                                height={100}
                                fillColor="blue"
                                fillOpacity={0.2}
                                className="h-[100px] w-[100px] lg:h-[180px] lg:w-[180px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="relative z-10 max-w-xl space-y-4 sm:space-y-5 lg:w-1/2 lg:pl-10">
                    <p className="sectionName">Scale. Surge. Dominate.</p>

                    <h2 className="heading">What We Actually Deliver</h2>

                    <p className="text-md font-semibold text-headText lg:text-xl">
                        Startup-Grade ‘Unfair Advantages’
                    </p>

                    <div className="max-w-[600px] space-y-1">
                        <p>
                            ✅ 7-Day Launch Protocol “Steal our pre-built
                            AI/telematics modules — launch enterprise-grade apps
                            3X faster than competitors.”
                        </p>{' '}
                        <br />{' '}
                        <p>
                            ✅ 100% IP Ownership “We code, you keep every line.
                            No licenses, no equity grabs, no vendor lock-in.”{' '}
                        </p>
                        <br />
                        <p>
                            ✅ Code + Customers “We don’t stop at dev. Get 500
                            pre-qualified leads in your CRM before launch day.”{' '}
                        </p>
                        <br />{' '}
                        <p>
                            ✅ Scale or We Sprint Again “Guaranteed 2X user
                            growth in 90 days — or we rebuild your stack for
                            free.”
                        </p>
                    </div>

                    {/* Icons below the text */}
                    <div className="flex gap-4 pb-2">
                        {/* JavaScript Icon */}
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-iconBack/40 bg-iconBack/20">
                            <div
                                className="relative flex items-center justify-center"
                                style={{ width: '20px', height: '24px' }}
                            >
                                <Javascript width="25" height="30" />
                            </div>
                        </div>

                        {/* Python Icon */}
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-iconBack/40 bg-iconBack/20">
                            <div
                                className="relative flex items-center justify-center"
                                style={{ width: '22px', height: '26px' }}
                            >
                                <Python width="25" height="26" />
                            </div>
                        </div>

                        {/* Java Icon */}
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-iconBack/40 bg-iconBack/20">
                            <div
                                className="relative flex items-center justify-center"
                                style={{ width: '40px', height: '28px' }}
                            >
                                <Java width="25" height="30" />
                            </div>
                        </div>

                        {/* PHP Icon */}
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-iconBack/40 bg-iconBack/20">
                            <div
                                className="relative flex items-center justify-center"
                                style={{ width: '30px', height: '30px' }}
                            >
                                <PHP width="40" height="16" />
                            </div>
                        </div>
                    </div>

                    <Link href="#contact">
                        {' '}
                        <Button
                            variant="ts4uPrimary"
                            className="hidden lg:flex"
                        >
                            <ArrowRight /> Unleash Your Tech
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Do;
