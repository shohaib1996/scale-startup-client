'use client';
import React from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Hope from '../SVG/Hope';
import services from '@/api/data/services.json';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import Link from 'next/link';

const cardVariants: Variants = {
    offscreen: {
        opacity: 0,
        // y: 100,
        transition: {
            duration: 1, // Delay transition when going offscreen
        },
    },
    onscreen: {
        opacity: 1,
        // y: 0,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1,
        },
    },
};

// const servicesData = [
//     {
//         id: 1,
//         icon: '/services/icon1.png',
//         title: 'E-Commerce Landing Page',
//         para: 'A conversion-focused E-Commerce landing page that showcases key products, special offers, and provides a seamless shopping experience to drive sales.',
//         image: '/services/s1.png',
//     },
//     {
//         id: 2,
//         icon: '/services/icon2.png',
//         title: 'Online Product Sale',
//         para: 'Our online product sale platform enables businesses to showcase and sell products effortlessly. With features like intuitive product catalogs, secure checkout, and real-time inventory updates.',
//         image: '/services/s2.png',
//     },
//     {
//         id: 3,
//         icon: '/services/icon3.png',
//         title: 'E-Commerce App Development',
//         para: 'We specialize in E-Commerce app development, creating custom,  mobile applications that offer seamless shopping experiences.',
//         image: '/services/s3.png',
//     },
//     {
//         id: 4,
//         icon: '/services/icon4.png',
//         title: 'E-Commerce Services',
//         para: 'Our E-Commerce services streamline online business operations by providing robust platforms for product listings, secure payment processing, inventory management, and fast shipping',
//         image: '/services/s4.png',
//     },
//     {
//         id: 5,
//         icon: '/services/icon5.png',
//         title: 'QuickCart Solutions',
//         para: 'QuickCart Solutions offers fast, reliable, and user-friendly eCommerce platforms designed to simplify online shopping.',
//         image: '/services/s5.png',
//     },
//     {
//         id: 6,
//         icon: '/services/icon6.png',
//         title: 'E-Commerce Saas Product',
//         para: 'Our E-Commerce SaaS product delivers a scalable, cloud-based platform that simplifies online store management.',
//         image: '/services/s6.png',
//     },
// ];

const Services = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger every time it comes into view
        threshold: 0.2, // Trigger when 20% of the parent div is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start('onscreen');
        } else {
            setTimeout(() => {
                controls.start('offscreen');
            }, 200); // Delay invisibility by 300ms
        }
    }, [controls, inView]);

    return (
        <section
            className="relative bg-backPrimary py-6 lg:py-14"
            id="services"
        >
            <div className="absolute left-10 top-10">
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1.5, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
                    }}
                    transition={{
                        duration: 2,
                        ease: 'easeInOut',
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    className="absolute left-4 top-4 sm:left-10 sm:top-10"
                >
                    <Hope
                        width="70"
                        height="70"
                        className="h-[70px] w-[70px] lg:h-[160px] lg:w-[160px]"
                    />
                </motion.div>
            </div>

            <motion.div
                ref={ref}
                initial="offscreen"
                animate={controls}
                variants={cardVariants}
                className="myContainer"
            >
                <div className="mx-auto space-y-4 text-center sm:space-y-6">
                    <p className="sectionName mx-auto">Our Services</p>

                    <h2 className="heading mx-auto !text-white">
                        White-Label Dominance
                    </h2>

                    <div className="mx-auto max-w-screen-2xl">
                        <div className="hidden lg:block">
                            <motion.div
                                ref={ref}
                                initial="offscreen"
                                animate={controls}
                                variants={cardVariants}
                                className="flex flex-wrap"
                            >
                                {services.slice(0, 3).map((card, index) => (
                                    <motion.div
                                        variants={cardVariants}
                                        key={index}
                                        className={`w-1/3 p-4 ${index === 0 || index === 2 ? 'relative top-20' : ''}`}
                                    >
                                        <ServiceCard
                                            icon={card.icon}
                                            title={card.title}
                                            para={card.para}
                                            image={card.image}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                ref={ref}
                                initial="offscreen"
                                animate={controls}
                                variants={cardVariants}
                                className="flex flex-wrap"
                            >
                                {services.slice(3, 6).map((card, index) => (
                                    <motion.div
                                        variants={cardVariants}
                                        key={index}
                                        className={`w-1/3 p-4 ${index === 0 || index === 2 ? 'relative top-14' : ''}`}
                                    >
                                        <ServiceCard
                                            icon={card.icon}
                                            title={card.title}
                                            para={card.para}
                                            image={card.image}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* For screens smaller than md, display slider */}
                        <div className="block lg:hidden">
                            <div className="flex w-full items-center justify-center">
                                <Carousel className="w-full max-w-sm">
                                    <CarouselContent>
                                        {services.map((card, index) => (
                                            <CarouselItem key={index}>
                                                <ServiceCard
                                                    key={index}
                                                    icon={card.icon}
                                                    title={card.title}
                                                    para={card.para}
                                                    image={card.image}
                                                />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="#contact">
                    <Button
                        variant="ts4uSecondary"
                        className="mx-auto mt-3 flex items-center"
                    >
                        <ArrowRight /> Own 100% Equity
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
};

export default Services;
