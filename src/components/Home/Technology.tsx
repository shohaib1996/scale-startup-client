'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';
import Hope from '../SVG/Hope';
import Javascript from '../SVG/Technology/Javascript';
import Python from '../SVG/Technology/Python';
import Nodejs from '../SVG/Technology/Nodejs';
import Reactjs from '../SVG/Technology/Reactjs';
import Mongodb from '../SVG/Technology/Mongodb';
import Redis from '../SVG/Technology/Redis';
import Postgresql from '../SVG/Technology/Postgresql';
import Docker from '../SVG/Technology/Docker';
import AWS from '../SVG/Technology/AWS';
import Jenkins from '../SVG/Technology/Jenkins';

const Technology = () => {
    // Refs for scroll-triggered animations
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const techGridRef = useRef(null);

    // InView hooks
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
    const techGridInView = useInView(techGridRef, { once: true, amount: 0.2 });

    const techComponents = [
        { name: 'JAVASCRIPT', Component: Javascript },
        { name: 'PYTHON', Component: Python },
        { name: 'NODEJS', Component: Nodejs },
        { name: 'REACTJS', Component: Reactjs },
        { name: 'MONGODB', Component: Mongodb },
        { name: 'REDIS', Component: Redis },
        { name: 'POSTGRESQL', Component: Postgresql },
        { name: 'DOCKER', Component: Docker },
        { name: 'AWS', Component: AWS },
        { name: 'JENKINS', Component: Jenkins },
    ];

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const headingLabelVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const headingTitleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.2,
                ease: 'easeOut',
            },
        },
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const techGridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
                duration: 0.5,
            },
        },
    };

    const techItemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.5,
            },
        },
    };

    const hopeVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -20 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            className="relative bg-backPrimary py-10 text-white lg:py-20"
            id="tech"
            ref={sectionRef}
        >
            {/* Decorative Element with Enhanced Animation */}
            <motion.div
                className="absolute left-4 top-4 sm:left-10 sm:top-10"
                variants={hopeVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
            >
                <motion.div
                    animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                >
                    <Hope
                        width="70"
                        height="70"
                        className="h-[70px] w-[70px] lg:h-[160px] lg:w-[160px]"
                    />
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="myContainer mx-auto space-y-2 sm:space-y-4 lg:space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
            >
                {/* Heading Section */}
                <div className="space-y-6 text-center" ref={headingRef}>
                    <motion.p
                        className="text-md mx-auto w-max rounded-full bg-backTitle/80 px-4 py-1 font-bold text-titleText"
                        variants={headingLabelVariants}
                        initial="hidden"
                        animate={headingInView ? 'visible' : 'hidden'}
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 255, 255, 0.25)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        Tech Stack
                    </motion.p>

                    <motion.h2
                        className="heading mx-auto max-w-[650px] !text-white"
                        variants={headingTitleVariants}
                        initial="hidden"
                        animate={headingInView ? 'visible' : 'hidden'}
                    >
                        Technology We Use to Build Great Products
                    </motion.h2>
                </div>

                <div className="flex flex-col items-center gap-2 2xl:flex-row 2xl:gap-10">
                    {/* Image Section with Animation */}
                    <motion.div
                        className="relative mx-auto w-full overflow-hidden rounded-xl p-4 pb-4 md:pb-10 lg:w-[75vw] 2xl:w-[50vw] 2xl:rounded-l-none 2xl:rounded-r-[2xl] 2xl:p-0"
                        ref={imageRef}
                        variants={imageVariants}
                        initial="hidden"
                        animate={imageInView ? 'visible' : 'hidden'}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <motion.div
                            initial={{ filter: 'brightness(0.8)' }}
                            whileInView={{ filter: 'brightness(1)' }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737414564-Tech.png"
                                alt="techserve4u Hero"
                                width={654}
                                height={481}
                                className="w-full rounded-3xl object-cover 2xl:rounded-l-none 2xl:rounded-r-[30px]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Tech Stack Boxes with Staggered Animation */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-2 px-2 sm:gap-4 lg:gap-10 lg:px-5 2xl:w-[60%]"
                        ref={techGridRef}
                        variants={techGridVariants}
                        initial="hidden"
                        animate={techGridInView ? 'visible' : 'hidden'}
                    >
                        {techComponents.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="glass flex h-[50px] w-auto items-center justify-center gap-1 rounded-xl p-2 sm:h-[80px] sm:gap-2 sm:rounded-2xl sm:p-3 md:gap-3 md:rounded-3xl md:p-4 lg:h-[80px] lg:gap-4 lg:p-8"
                                variants={techItemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow:
                                        '0 0 15px rgba(255, 255, 255, 0.2)',
                                    backgroundColor:
                                        'rgba(255, 255, 255, 0.15)',
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <tech.Component
                                        width="20"
                                        height="26"
                                        className="h-[26] w-[20] sm:h-[40px] sm:w-[36px] md:h-[36px] md:w-[42px]"
                                    />
                                </motion.div>

                                <motion.h4
                                    className="sm:text-md text-sm font-semibold text-white md:text-lg lg:text-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.5,
                                    }}
                                >
                                    {tech.name}
                                </motion.h4>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Technology;
