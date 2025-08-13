'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Variants } from 'framer-motion';
import Hope from '../SVG/Hope';

const Solutions = () => {
    // Refs for scroll-triggered animations
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const cardsRef = useRef(null);

    // InView hooks
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
    const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
    const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
    const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

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

    const paragraphVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 0.3,
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
                delay: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const cardsContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const iconContainerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.2,
                ease: 'easeOut',
            },
        },
    };

    const hopeVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, rotate: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            className="relative overflow-hidden bg-backPrimary py-6 lg:py-14"
            id="solution"
            ref={sectionRef}
        >
            {/* Decorative Element with Enhanced Animation */}
            <motion.div
                className="absolute right-2 top-10 lg:right-10"
                variants={hopeVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
            >
                <motion.div
                    animate={{
                        rotate: 360,
                        transition: {
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'linear',
                        },
                    }}
                >
                    <Hope
                        width="70"
                        height="70"
                        className="h-[70px] w-[70px] lg:h-[160px] lg:w-[160px]"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className="myContainer mx-auto flex flex-col items-center justify-between gap-10 xl:flex-row"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? 'visible' : 'hidden'}
            >
                {/* Left Side */}
                <div
                    className="space-y-4 text-center xl:w-1/2 xl:space-y-8 xl:text-left"
                    ref={contentRef}
                >
                    <motion.p
                        className="sectionName mx-auto xl:mx-0"
                        variants={headingLabelVariants}
                        initial="hidden"
                        animate={contentInView ? 'visible' : 'hidden'}
                    >
                        Professional Solution
                    </motion.p>

                    <motion.h2
                        className="heading !text-white"
                        variants={headingTitleVariants}
                        initial="hidden"
                        animate={contentInView ? 'visible' : 'hidden'}
                    >
                        ScaleStartups' Hyper-Growth Arsenal
                    </motion.h2>

                    <motion.p
                        className="para mx-auto max-w-[670px] !text-white lg:mx-0"
                        variants={paragraphVariants}
                        initial="hidden"
                        animate={contentInView ? 'visible' : 'hidden'}
                    >
                        Embed VC-Grade Financial Firepower — Auto-Sync Payments,
                        Equity Rounds, and Revenue in Real Time
                    </motion.p>

                    {/* Circular Image with Animation */}
                    <motion.div
                        className="relative mx-auto h-[200px] w-[320px] flex-shrink-0 sm:h-[300px] sm:w-[500px] lg:h-[381px] lg:w-[618px] xl:mx-0"
                        ref={imageRef}
                        variants={imageVariants}
                        initial="hidden"
                        animate={imageInView ? 'visible' : 'hidden'}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.5 },
                        }}
                    >
                        <motion.div
                            initial={{ filter: 'brightness(0.9)' }}
                            whileInView={{ filter: 'brightness(1)' }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737248759-SolutionHero.png"
                                alt="Solution Image"
                                width={670}
                                height={500}
                                className="h-full w-full rounded-full border-4 border-tertiary object-cover md:border-8"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side - Cards with Staggered Animation */}
                <motion.div
                    className="max-w-3xl space-y-4 xl:w-1/2 xl:space-y-8"
                    ref={cardsRef}
                    variants={cardsContainerVariants}
                    initial="hidden"
                    animate={cardsInView ? 'visible' : 'hidden'}
                >
                    {/* Card 1 */}
                    <motion.div
                        className="mr-10 rounded-3xl bg-backWhite p-4 text-headText shadow-lg sm:p-6 md:mr-40"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            boxShadow:
                                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <motion.div
                                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                                variants={iconContainerVariants}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(255, 99, 71, 0.2)',
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <Image
                                        src="/icons/si1.png"
                                        alt="Icon 1"
                                        width={18}
                                        height={18}
                                        className="h-[18px] w-[18px] object-contain lg:h-[30px] lg:w-[30px]"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                className="text-md font-semibold lg:text-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Scale Engineering Squad
                            </motion.h3>
                        </div>
                        <motion.p
                            className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Your In-House Tech Team Without the $2M Burn Rate.
                            We code, you own 100%. 24/7 crisis support + growth
                            hacks baked into your stack. Launch 3X faster, scale
                            without panic.
                        </motion.p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="mx-5 rounded-3xl bg-backWhite p-4 text-headText shadow-lg sm:p-6 md:mx-20"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            boxShadow:
                                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <motion.div
                                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                                variants={iconContainerVariants}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(65, 105, 225, 0.2)',
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <Image
                                        src="/icons/si2.png"
                                        alt="Icon 2"
                                        width={18}
                                        height={18}
                                        className="h-[18px] w-[18px] object-contain lg:h-[30px] lg:w-[30px]"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                className="text-md font-semibold lg:text-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Telematics Power Modules
                            </motion.h3>
                        </div>
                        <motion.p
                            className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Out-Innovate Giants with Pre-Built AI Chat, CRM &
                            Analytics. Plug our battle-tested modules into your
                            app. Launch enterprise features in 48 hours — no dev
                            cycles, no equity loss
                        </motion.p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="ml-10 rounded-3xl bg-backWhite p-4 text-headText shadow-lg sm:p-6 md:ml-40"
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            boxShadow:
                                '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <motion.div
                                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-tertiary/10 p-1 lg:h-[50px] lg:w-[50px] lg:p-2"
                                variants={iconContainerVariants}
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: 'rgba(50, 205, 50, 0.2)',
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <motion.div
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <Image
                                        src="/icons/si1.png"
                                        alt="Icon 3"
                                        width={18}
                                        height={18}
                                        className="h-[18px] w-[18px] object-contain lg:h-[30px] lg:w-[30px]"
                                    />
                                </motion.div>
                            </motion.div>
                            <motion.h3
                                className="text-md font-semibold lg:text-xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                Equity-Free Code Vault
                            </motion.h3>
                        </div>
                        <motion.p
                            className="mt-4 text-xs font-semibold opacity-70 lg:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Own Your Empire — Zero Royalties, Forever. 100%
                            owned SaaS/CRM platforms. We build, you scale. Pay 0
                            until you hit 1M ARR
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Solutions;
