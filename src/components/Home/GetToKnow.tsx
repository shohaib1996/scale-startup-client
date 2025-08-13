'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Flower from '../SVG/Flower';
import { motion } from 'framer-motion';
import Link from 'next/link';

const GetToKnow = () => {
    return (
        <section className="relative overflow-hidden bg-backPrimary py-6 pb-16 lg:py-14">
            <motion.div
                animate={{ rotate: 360 }} // Rotate full circle
                transition={{
                    duration: 5, // Adjust speed (e.g., 10 seconds for a full rotation)
                    repeat: Infinity, // Infinite repeat
                    ease: 'linear', // Ensures smooth constant speed rotation
                }}
                className="absolute bottom-10 left-5"
            >
                <Flower
                    width={160}
                    height={160}
                    fillOpacity={0.2}
                    gradientColor="#FF0000"
                />
            </motion.div>

            <div className="myContainer mx-auto flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
                {/* Left Side Image with Background */}
                <div className="relative mx-auto w-full max-w-xl pl-10 lg:w-1/2 lg:px-14">
                    <div className="absolute -bottom-8 left-0 h-3/4 w-3/4 rounded-xl bg-secondary lg:-bottom-14" />

                    <div className="relative h-[200px] w-full overflow-hidden rounded-3xl border-2 border-secondary shadow-lg sm:h-[300px] lg:h-[340px]">
                        <Image
                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737062112-Know.png"
                            alt="Meeting Image"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="w-full max-w-xl space-y-6 text-white lg:w-1/2 lg:py-10">
                    <h3 className="text-2xl font-bold lg:text-4xl">
                        Your $1M Roadmap Call
                    </h3>

                    <div className="para space-y-1 !text-white">
                        Free 15-Minute ‘Profit Explosion’ Session: We’ll Map
                        Your 12-Month Path to 7 Figures. Leave with:{' '}
                        <p>✅ 3 competitor weaknesses to exploit</p>{' '}
                        <p>✅ A proven tech stack blueprint</p>
                        <p>✅ 500 guaranteed leads/month strategy</p>
                    </div>

                    <Link href="#contact">
                        <Button variant="ts4uSecondary">
                            <ArrowRight /> Claim Free Audit
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GetToKnow;
