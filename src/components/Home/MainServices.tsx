'use client';
import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Wave from '../SVG/Wave';

const MainServices = () => {
    // Main container animation
    const [containerRef, containerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Individual card animations with separate refs
    const [card1Ref, card1InView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [card2Ref, card2InView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [card3Ref, card3InView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
                duration: 0.6,
            },
        },
    };

    const headingVariants: Variants = {
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

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    const tagContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const tagVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
    };

    const waveVariants: Variants = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: {
            opacity: 0.2,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <section
            className="relative bg-backPrimary py-6 lg:py-14"
            ref={containerRef}
        >
            {/* Animated Wave Background */}
            <motion.div
                className="absolute left-0 top-1/2 w-full -translate-y-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                >
                    <Wave width="100%" height="100%" />
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="myContainer mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate={containerInView ? 'visible' : 'hidden'}
            >
                <motion.h2
                    className="heading mx-auto !text-white"
                    variants={headingVariants}
                >
                    Our Core Solutions
                </motion.h2>

                <div className="mx-auto grid grid-cols-1 gap-4 pt-10 md:gap-8 lg:grid-cols-2">
                    {/* White-Label Software Card */}
                    <motion.div
                        className="glass p-5 text-center md:p-10"
                        ref={card1Ref}
                        variants={cardVariants}
                        initial="hidden"
                        animate={card1InView ? 'visible' : 'hidden'}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.h3
                            className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl"
                            initial={{ opacity: 0 }}
                            animate={
                                card1InView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            White-Label Software
                        </motion.h3>

                        <motion.p
                            className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white opacity-90 sm:my-6 lg:mx-0 lg:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                card1InView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <span className="font-semibold opacity-100">
                                Launch Your 'Own' Software in 30 Days, 100% Your
                                Brand.
                            </span>{' '}
                            <br /> Skip the 2-year dev cycle. We build, you
                            brand. Own scalable SaaS, CRM, or Edtech tools
                            instantly
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap content-center justify-center gap-2 sm:gap-3"
                            variants={tagContainerVariants}
                            initial="hidden"
                            animate={card1InView ? 'visible' : 'hidden'}
                        >
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Prebuilt Templates
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                100% White-Label
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                In-House Tech Stack
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Scalable Infrastructure
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Claim Your Template
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    {/* Custom Software Development Card */}
                    <motion.div
                        className="glass p-5 text-center md:p-10"
                        ref={card2Ref}
                        variants={cardVariants}
                        initial="hidden"
                        animate={card2InView ? 'visible' : 'hidden'}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                            transition: { duration: 0.3 },
                        }}
                    >
                        <motion.h3
                            className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl"
                            initial={{ opacity: 0 }}
                            animate={
                                card2InView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Custom Software Development
                        </motion.h3>

                        <motion.p
                            className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white opacity-90 sm:my-6 lg:mx-0 lg:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                card2InView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <span className="font-semibold opacity-100">
                                From MVP to $10M ARR: Code that Scales as Fast
                                as Your Ambition
                            </span>{' '}
                            <br /> Bespoke web/mobile/desktop apps built for
                            startups who refuse to plateau
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap content-center justify-center gap-2 sm:gap-3"
                            variants={tagContainerVariants}
                            initial="hidden"
                            animate={card2InView ? 'visible' : 'hidden'}
                        >
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Ownership Guarantee
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Growth-Ready Architecture
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Speed-to-Market
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Unlimited Support
                            </motion.span>
                            <motion.span
                                className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                                variants={tagVariants}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                }}
                            >
                                Start Building
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Business Growth Engine Card */}
                <motion.div
                    className="glass mt-4 flex flex-col p-10 text-center md:mt-8 lg:flex-row lg:gap-20"
                    ref={card3Ref}
                    variants={cardVariants}
                    initial="hidden"
                    animate={card3InView ? 'visible' : 'hidden'}
                    whileHover={{
                        scale: 1.01,
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
                        transition: { duration: 0.3 },
                    }}
                >
                    <motion.div
                        className="lg:text-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                            card3InView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h3
                            className="mx-auto text-xl font-semibold text-white sm:text-2xl lg:text-4xl"
                            initial={{ opacity: 0 }}
                            animate={
                                card3InView ? { opacity: 1 } : { opacity: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Business Growth Engine
                        </motion.h3>

                        <motion.p
                            className="sm:text-md mx-auto my-4 max-w-2xl text-sm font-light text-white/90 sm:my-6 lg:mx-0 lg:max-w-full lg:text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                card3InView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            We Code. You Sell. We Fill Your Pipeline — or We
                            Don't Get Paid Your growth team: Lead gen,
                            conversion funnels, and automation baked into your
                            software
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap content-center justify-center gap-2 sm:gap-3"
                        variants={tagContainerVariants}
                        initial="hidden"
                        animate={card3InView ? 'visible' : 'hidden'}
                    >
                        <motion.span
                            className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                            variants={tagVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            CRM + Lead Gen
                        </motion.span>
                        <motion.span
                            className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                            variants={tagVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            Conversion Playbooks
                        </motion.span>
                        <motion.span
                            className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                            variants={tagVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            AI-Powered Analytics
                        </motion.span>
                        <motion.span
                            className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                            variants={tagVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            Edtech Automation
                        </motion.span>
                        <motion.span
                            className="rounded-lg border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white sm:px-4 sm:py-2 sm:text-sm"
                            variants={tagVariants}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                        >
                            Get Guaranteed Leads
                        </motion.span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default MainServices;
