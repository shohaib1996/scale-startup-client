'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Knife from '../SVG/Knife';
import ArrowRight from '../SVG/ArrowRight';
import Light from '../SVG/Light';
import Book from '../SVG/Book';
import Agency from '../SVG/Agency';

const AboutCompany = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const slideUp = {
        hidden: { y: 50, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
                delay: custom * 0.1,
            },
        }),
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: (custom: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
                delay: 0.2 + custom * 0.15,
            },
        }),
    };

    const featureVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.4 + custom * 0.2,
            },
        }),
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
                delay: 0.3 + custom * 0.1,
            },
        }),
    };

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse' as const,
            ease: 'easeInOut',
        },
    };

    const rotatingAnimation = {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
        },
    };

    const hoverScale = {
        scale: 1.05,
        transition: { duration: 0.3 },
    };

    return (
        <motion.div
            className="relative z-10 overflow-hidden bg-backSecondary py-6 lg:py-14"
            id="about-us"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {/* Decorative Elements */}
            <motion.div
                className="absolute -bottom-1/2 left-0 z-10 max-w-full overflow-hidden"
                variants={fadeIn}
                custom={1}
            >
                <Light className="object-contain" />
            </motion.div>

            <motion.div
                className="absolute right-0 top-20 overflow-hidden"
                variants={fadeIn}
                custom={2}
            >
                <Book stroke="tertiary" opacity="0.1" />
            </motion.div>

            <motion.div
                className="absolute -right-2 bottom-0 hidden overflow-hidden md:bottom-20 md:right-20 lg:flex"
                variants={fadeIn}
                animate={rotatingAnimation}
            >
                <Image
                    src="/deco/Circle2.png"
                    alt="techserve4u Hero"
                    width={241}
                    height={241}
                    className="h-[241px] w-[241px] object-contain"
                />
            </motion.div>

            {/* Main Content */}
            <div className="flex">
                <div className="myContainer z-20 flex flex-col-reverse justify-between gap-10 lg:flex-row">
                    <motion.div
                        variants={slideUp}
                        custom={1}
                        whileHover={hoverScale}
                        className="mx-auto flex lg:hidden"
                    >
                        <Button variant="ts4uPrimary">
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: 'reverse',
                                }}
                                className="flex items-center"
                            >
                                <ArrowRight /> Steal Our Codebase
                            </motion.span>
                        </Button>
                    </motion.div>

                    {/* Image Gallery Section */}
                    <motion.div
                        className="flex w-full items-center justify-center lg:p-20"
                        variants={fadeIn}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                className="relative z-30 h-[70vw] max-h-[472px] w-[55vw] max-w-[371px] rounded-[234px] border-2 border-secondary bg-white p-2 lg:border-4 lg:p-3"
                                variants={imageVariants}
                                custom={0}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-[248px]">
                                    <Image
                                        src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736506319-c1.png"
                                        alt="techserve4u Hero"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Overlapping Smaller Image 1 */}
                            <motion.div
                                className="absolute left-[-30%] top-[-22%] z-20"
                                variants={imageVariants}
                                custom={1}
                                whileHover={{ scale: 1.05 }}
                                animate={floatingAnimation}
                            >
                                <div className="relative -z-10 h-[40vw] max-h-[246px] w-[35vw] max-w-[211px] rounded-[248px] border-2 border-tertiary p-2 lg:border-4 lg:p-3">
                                    <div className="relative h-full w-full overflow-hidden rounded-[248px]">
                                        <Image
                                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736556386-c2.png"
                                            alt="Smaller Image 3"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Overlapping Smaller Image 2 */}
                            <motion.div
                                className="absolute bottom-[-10%] left-[-25%] z-40"
                                variants={imageVariants}
                                custom={2}
                                whileHover={{ scale: 1.05 }}
                                animate={floatingAnimation}
                            >
                                <div className="relative -z-10 h-[35vw] max-h-[210px] w-[30vw] max-w-[180px] rounded-[248px] border-2 border-tertiary bg-white p-2 lg:border-4 lg:p-3">
                                    <div className="relative h-full w-full overflow-hidden rounded-[248px]">
                                        <Image
                                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736603601-c3.png"
                                            alt="Smaller Image 1"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Overlapping Smaller Image 3 */}
                            <motion.div
                                className="absolute bottom-[-10%] right-[-25%] z-40"
                                variants={imageVariants}
                                custom={3}
                                whileHover={{ scale: 1.05 }}
                                animate={floatingAnimation}
                            >
                                <div className="relative -z-10 h-[35vw] max-h-[210px] w-[30vw] max-w-[180px] rounded-[248px] border-2 border-primary bg-white p-2 lg:border-4 lg:p-3">
                                    <div className="relative h-full w-full overflow-hidden rounded-[248px]">
                                        <Image
                                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736645601-c4.png"
                                            alt="Smaller Image 2"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Overlapping Smaller Image 4 */}
                            <motion.div
                                className="absolute right-[-25%] top-[-25%] z-0 lg:right-[-30%] lg:top-[-100px]"
                                variants={imageVariants}
                                custom={4}
                            >
                                <div className="relative z-10 h-[25vw] max-h-[165px] w-[25vw] max-w-[165px]">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, 0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: 'reverse',
                                        }}
                                    >
                                        <Agency primaryColor="#355BFB" />
                                    </motion.div>
                                </div>

                                {/* Overlapping Smaller Image 5 */}
                                <motion.div
                                    className="absolute -right-[0%] top-[60%] h-[30vw] max-h-[180px] w-[15vw] max-w-[55px]"
                                    animate={{
                                        y: [0, -5, 0, 5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    <Knife
                                        width="100"
                                        height="200"
                                        layoutMode="fill"
                                    />
                                </motion.div>

                                {/* Overlapping Smaller Image 6 */}
                                <motion.div
                                    className="absolute right-[100%] top-[-30%] h-[30vw] max-h-[180px] w-[15vw] max-w-[55px] -rotate-90 scale-y-[-1] transform"
                                    animate={{
                                        y: [0, 5, 0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    <Knife
                                        width="100"
                                        height="200"
                                        layoutMode="fill"
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side Content */}
                    <div className="space-y-4 pb-14 sm:pb-24 lg:space-y-6 lg:pb-2">
                        <motion.p
                            className="sectionName"
                            variants={slideUp}
                            custom={0}
                        >
                            About Company
                        </motion.p>

                        <motion.h2
                            className="heading max-w-[650px]"
                            variants={slideUp}
                            custom={1}
                        >
                            From Struggling Business to $10M+ Revenue
                        </motion.h2>

                        <motion.p
                            className="para max-w-2xl lg:max-w-[1500px]"
                            variants={slideUp}
                            custom={2}
                        >
                            ScaleStartups isn't just a vendor – we're your
                            growth engineering team. While others build stores,
                            we architect revenue machines. For 60 years, we've
                            helped enterprises and scrappy startups:
                        </motion.p>

                        <motion.ul className="space-y-2">
                            <motion.li variants={listItemVariants} custom={0}>
                                ✅ 8.7X average revenue growth in 6 months
                            </motion.li>
                            <motion.li variants={listItemVariants} custom={1}>
                                ✅ Slash cart abandonment by 67% with
                                battle-tested UX
                            </motion.li>
                            <motion.li variants={listItemVariants} custom={2}>
                                ✅ Cut operational chaos with AI-driven order &
                                inventory systems
                            </motion.li>
                        </motion.ul>

                        <motion.div
                            className="flex gap-6"
                            variants={featureVariants}
                            custom={0}
                            whileHover={{ x: 5 }}
                        >
                            <div className="relative h-[44px] w-[44px]">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    <Zap className="size-9 stroke-[#A054FA]" />
                                </motion.div>
                            </div>
                            <div>
                                <h5 className="subHeading">
                                    The 20-Second Support Lifeline
                                </h5>
                                <p className="subPara py-2">
                                    Your emergency is our priority. Get code
                                    fixes, strategy pivots, <br /> or crisis
                                    management from our 20+ experts in under 20
                                    seconds
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex gap-6"
                            variants={featureVariants}
                            custom={1}
                            whileHover={{ x: 5 }}
                        >
                            <div className="relative h-[44px] w-[44px]">
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotate: [0, 5, 0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: 'reverse',
                                    }}
                                >
                                    <Crown className="size-9 stroke-[#A054FA]" />
                                </motion.div>
                            </div>
                            <div>
                                <h5 className="subHeading">
                                    Your 'Unfair' Growth Advantage
                                </h5>
                                <p className="subPara py-2">
                                    We don't just code – we embed our 12 years
                                    of scaling secrets into <br /> your tech
                                    stack. Steal playbooks from $100M+ brands.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={slideUp}
                            custom={6}
                            whileHover={hoverScale}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="#contact">
                                <Button
                                    variant="ts4uPrimary"
                                    className="hidden lg:flex"
                                >
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: 'reverse',
                                        }}
                                        className="flex items-center"
                                    >
                                        <ArrowRight /> Steal Our Codebase
                                    </motion.span>
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutCompany;
