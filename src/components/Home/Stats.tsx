'use client';
import React from 'react';
import Project from '../SVG/Project';
import Clients from '../SVG/Clients';
import Advisor from '../SVG/Advisor';
import Calendar from '../SVG/Calendar';
import Wave from '../SVG/Wave';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section className="relative bg-backPrimary py-8" ref={ref}>
            <div className="absolute -top-20 left-0 w-full">
                <Wave width="100%" height="100%" />
            </div>
            <div className="myContainer z-10 mx-auto grid grid-cols-2 justify-between gap-2 gap-y-10 text-white sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-4">
                {/* Active Clients */}
                <div className="flex flex-col items-center">
                    <Clients
                        width={100}
                        height={40}
                        className="sm:h-[60px] sm:w-[100px]"
                    />
                    <div className="flex items-end pt-2 sm:pt-5">
                        <p className="text-2xl font-semibold sm:text-5xl">
                            {inView && (
                                <CountUp
                                    key={`clients-${inView}`}
                                    end={46}
                                    duration={4}
                                />
                            )}
                            %
                        </p>
                        <p className="text-sm font-light opacity-70 sm:text-xl">
                            Active Clients
                        </p>
                    </div>
                </div>

                {/* Project Done */}
                <div className="flex flex-col items-center">
                    <Project
                        width={60}
                        height={40}
                        className="sm:h-[60px] sm:w-[100px]"
                    />
                    <div className="flex items-end pt-2 sm:pt-5">
                        <p className="text-2xl font-semibold sm:text-5xl">
                            {inView && (
                                <CountUp
                                    key={`projects-${inView}`}
                                    end={28}
                                    duration={3}
                                />
                            )}
                        </p>
                        <p className="text-sm font-light opacity-70 sm:text-xl">
                            Project Done
                        </p>
                    </div>
                </div>

                {/* Team Advisor */}
                <div className="flex flex-col items-center">
                    <Advisor
                        width={71}
                        height={40}
                        className="sm:h-[60px] sm:w-[100px]"
                    />
                    <div className="flex items-end pt-2 sm:pt-5">
                        <p className="text-2xl font-semibold sm:text-5xl">
                            {inView && (
                                <CountUp
                                    key={`advisor-${inView}`}
                                    end={9}
                                    duration={2}
                                />
                            )}
                        </p>
                        <p className="text-sm font-light opacity-70 sm:text-xl">
                            Team Advisor
                        </p>
                    </div>
                </div>

                {/* Glorious Years */}
                <div className="flex flex-col items-center">
                    <Calendar
                        width={60}
                        height={40}
                        className="sm:h-[60px] sm:w-[100px]"
                    />
                    <div className="flex items-end pt-2 sm:pt-5">
                        <p className="text-2xl font-semibold sm:text-5xl">
                            {inView && (
                                <CountUp
                                    key={`years-${inView}`}
                                    end={3}
                                    duration={2}
                                />
                            )}
                            /
                        </p>
                        <p className="text-sm font-light opacity-70 sm:text-xl">
                            Glorious Years
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
