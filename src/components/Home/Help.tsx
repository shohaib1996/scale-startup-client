'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import ArrowRight from '../SVG/ArrowRight';
import FlowerOp from '../SVG/FlowerOp';
import StarDot from '../SVG/StarDot';
import faq from '@/api/data/faq.json';
import '../styles/Help.css';

const Help = () => {
    // Refs for scroll-triggered animations
    const sectionRef = useRef(null);
    const rightContentRef = useRef(null);
    const imageRef = useRef(null);
    const headingRef = useRef(null);
    const featuresRef = useRef(null);
    const buttonRef = useRef(null);

    // InView hooks
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const rightContentInView = useInView(rightContentRef, {
        once: true,
        amount: 0.3,
    });
    const imageInView = useInView(imageRef, { once: true, amount: 0.5 });
    const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
    const buttonInView = useInView(buttonRef, { once: true, amount: 0.5 });

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

    const imageContainerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const headingVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
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

    const featuresContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
            },
        },
    };

    const featureItemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const buttonVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const decorativeElementVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.2,
                ease: 'easeOut',
            },
        },
    };

    // Floating animation for image
    const floatingAnimation = {
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
        transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop' as const,
            ease: 'easeInOut',
        },
    };

    // Rotating animation for FlowerOp
    const rotatingAnimation = {
        rotate: 360,
        transition: {
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
        },
    };

    // Pulsing animation for StarDot
    const pulsingAnimation: import('framer-motion').TargetAndTransition = {
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
        transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop' as const,
            ease: 'easeInOut',
        },
    };

    // Checkmark animation
    const checkmarkAnimation = {
        scale: [1, 1.2, 1],
        color: ['#8c7af1', '#a054fa', '#8c7af1'],
        transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'loop' as const,
            ease: 'easeInOut',
        },
    };

    return (
        <section
            className="relative overflow-hidden py-8 lg:py-16"
            id="faq"
            ref={sectionRef}
        >
            {/* Decorative Elements with Animation */}
            <motion.div
                className="absolute right-5 top-6 sm:right-10 sm:top-20"
                variants={decorativeElementVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                whileInView={rotatingAnimation}
                viewport={{ once: false }}
            >
                <FlowerOp
                    width={300}
                    height={300}
                    className="h-20 w-20 sm:h-72 sm:w-72"
                />
            </motion.div>

            <motion.div
                className="absolute left-5 top-10 sm:left-10 sm:top-20"
                variants={decorativeElementVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
                whileInView={pulsingAnimation}
                viewport={{ once: false }}
            >
                <StarDot fillColor="blue" className="animate-spin" />
            </motion.div>

            <motion.div
                className="myContainer mx-auto flex flex-col-reverse justify-between gap-5 sm:gap-20 lg:flex-row"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
            >
                {/* Accordion Section */}
                <div className="w-full space-y-4 lg:w-[55%]">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        {faq.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <AccordionItem
                                    value={item.id}
                                    className="rounded-lg p-3 text-xl sm:p-5"
                                >
                                    <AccordionTrigger className="flex items-start py-4 font-medium sm:text-xl">
                                        <span className="flex justify-start">
                                            <span className="pr-2 text-xl sm:pr-8 sm:!text-2xl">
                                                {item.no}
                                            </span>
                                            <span className="text-md text-left sm:text-xl">
                                                {item.question}
                                            </span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="max-w-2xl pl-9 text-xs font-light sm:pl-16 sm:text-sm">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>

                {/* Right Side Content with Enhanced Animations */}
                <div
                    className="flex w-full flex-col items-center space-y-5 text-center lg:w-[45%] lg:items-start lg:text-left"
                    ref={rightContentRef}
                >
                    {/* Animated Image */}
                    <motion.div
                        className="h-[250px] w-[250px] rounded-full bg-[#8c7af1]/20"
                        ref={imageRef}
                        variants={imageContainerVariants}
                        initial="hidden"
                        animate={imageInView ? 'visible' : 'hidden'}
                        whileInView={floatingAnimation}
                        viewport={{ once: false }}
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: 5,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737094997-Help.png"
                                alt="Help Image"
                                height={250}
                                width={250}
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Animated Heading */}
                    <motion.h3
                        className="heading"
                        ref={headingRef}
                        variants={headingVariants}
                        initial="hidden"
                        animate={headingInView ? 'visible' : 'hidden'}
                    >
                        Code Red? Scaling Panic? We've Got Your Back
                    </motion.h3>

                    {/* Animated Features List */}
                    <motion.div
                        className="para max-w-2xl font-bold"
                        ref={featuresRef}
                        variants={featuresContainerVariants}
                        initial="hidden"
                        animate={featuresInView ? 'visible' : 'hidden'}
                    >
                        <motion.div
                            variants={featureItemVariants}
                            className="flex items-start"
                        >
                            <motion.span
                                animate={checkmarkAnimation}
                                className="mr-2"
                            >
                                ✅
                            </motion.span>
                            <span>Your Scaling SWAT Team On Speed Dial:</span>
                        </motion.div>

                        <motion.p
                            variants={featureItemVariants}
                            className="flex items-start"
                        >
                            <motion.span
                                animate={checkmarkAnimation}
                                className="mr-2"
                            >
                                ✅
                            </motion.span>
                            <span>
                                Server crashes, feature fails, scaling meltdowns
                                — solved before your coffee cools
                            </span>
                        </motion.p>

                        <motion.p
                            variants={featureItemVariants}
                            className="flex items-start"
                        >
                            <motion.span
                                animate={checkmarkAnimation}
                                className="mr-2"
                            >
                                ✅
                            </motion.span>
                            <span>
                                Instant access to growth hacks, pivot
                                strategies, and investor-ready metrics
                            </span>
                        </motion.p>

                        <motion.p
                            variants={featureItemVariants}
                            className="flex items-start"
                        >
                            <motion.span
                                animate={checkmarkAnimation}
                                className="mr-2"
                            >
                                ✅
                            </motion.span>
                            <span>
                                2X user growth in 90 days or we rebuild your
                                stack for free. the way.
                            </span>
                        </motion.p>
                    </motion.div>

                    {/* Animated Button */}
                    <motion.div
                        ref={buttonRef}
                        variants={buttonVariants}
                        initial="hidden"
                        animate={buttonInView ? 'visible' : 'hidden'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="#contact">
                            <Button variant="ts4uPrimary">
                                <motion.span
                                    animate={{
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: 'reverse',
                                    }}
                                    className="flex items-center"
                                >
                                    <ArrowRight /> Raid the Vault
                                </motion.span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Help;
