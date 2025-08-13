import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';

const Work = () => {
    return (
        <section
            className="relative bg-backWhite py-6 md:py-16"
            id="how-we-work"
        >
            <div className="myContainer mx-auto flex flex-col items-center gap-10 md:flex-row">
                {/* Left Column - Text Section */}
                <div className="w-full space-y-4 md:w-1/2 md:space-y-6">
                    <p className="sectionName">How We Work</p>
                    <h3 className="heading">Our Working Process</h3>
                    <p className="para">
                        At the heart of our success is a streamlined,
                        collaborative working process. We begin by understanding
                        your unique needs and vision, ensuring we're aligned
                        with your goals from the start.
                    </p>
                    <p className="para">
                        Through iterative design, development, and feedback
                        cycles, we stay adaptable and responsive to changes. Our
                        transparent communication keeps you informed at every
                        stage, while our commitment to quality ensures that the
                        final product not only meets but exceeds your
                        expectations. From concept to completion, we're
                        dedicated to delivering results that drive success.
                    </p>

                    {/* Button is hidden on small devices (visible on md and larger) */}
                    <div className="hidden md:block">
                        <Button variant="ts4uPrimary">
                            <ArrowRight /> Book a Meeting
                        </Button>
                    </div>
                </div>

                {/* Right Column - Diagram Section */}
                <div className="relative flex w-full flex-col items-center justify-center md:w-1/2">
                    {/* Image Section */}
                    <Image
                        src="/image/Work3.png"
                        alt="Our Working Process"
                        width={600}
                        height={600}
                        className="object-contain"
                    />

                    {/* Button is visible below the image on small devices */}
                    <div className="mt-6 w-full md:hidden">
                        <Button
                            variant="ts4uPrimary"
                            className="mx-auto flex text-center"
                        >
                            <ArrowRight /> Launch MVP Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
