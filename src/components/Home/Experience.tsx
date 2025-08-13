import React from 'react';
import Car from '../SVG/Car';
import Archive from '../SVG/Archive';
import Discount from '../SVG/Discount';
import Money from '../SVG/Money';
import { Button } from '../ui/button';
import CarosoleContent from './CarosoleContent';
import Link from 'next/link';

const Experience = () => {
    return (
        <section className="bg-backSecondary py-6 lg:py-14">
            <div className="myContainer">
                <h2 className="heading mx-auto max-w-6xl text-center">
                    {/* We Provide Best Customer Experiences */}
                    We Fuel Startup Hyper-Growth
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {/* Card 1 */}
                    <div className="buttonHover rounded-lg bg-bgPink/30 p-6 shadow-md sm:p-8">
                        <div className="max-w-min rounded-full bg-bgPink p-3">
                            <Money className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" />
                        </div>
                        <h3 className="subHeading mt-4"> 100% Owned Code</h3>
                        <p className="subPara mt-2">
                            Launch Your Software Empire — No Royalties, No
                            Licensing, Just Profit.” White-label software built
                            for YOUR brand. Own 100% of the IP, codebase, and
                            revenue. No hidden fees or “Powered By” footers
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            ✅ Only 10 slots left for Q4
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg bg-bgSky/30 p-6 shadow-md sm:p-8">
                        <div className="max-w-min rounded-full bg-bgSky p-3">
                            <Discount className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" />
                        </div>
                        <h3 className="subHeading mt-4">
                            Growth-Backed Guarantee
                        </h3>
                        <p className="subPara mt-2">
                            Scale to $1M ARR or We Work for Free.” We don’t just
                            code — we embed proven growth hacks into your tech.
                            Fail to scale? Get a 100% refund + free crisis
                            sprints
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            🚀 Guarantee applies to first 50 clients
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-lg bg-bgPurple/30 p-6 shadow-md sm:p-8">
                        <div className="max-w-min rounded-full bg-bgPurple p-3">
                            <Archive className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" />
                        </div>
                        <h3 className="subHeading mt-4">
                            Daily Innovation Injection
                        </h3>
                        <p className="subPara mt-2">
                            New Features, Zero Effort — Your Software Evolves
                            While You Sleep.” AI-driven updates, security
                            patches, and prebuilt integrations auto-pushed to
                            your platform. Stay cutting-edge without lifting a
                            finger
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            🤖 Latest AI modules added today
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="rounded-lg bg-bgPest/30 p-6 shadow-md sm:p-8">
                        <div className="max-w-min rounded-full bg-bgPest p-3">
                            <Car className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" />
                        </div>
                        <h3 className="subHeading mt-4">
                            Code in 30 Days, Not 30 Months
                        </h3>
                        <p className="subPara mt-2">
                            ZERO Upfront Pay, Only When You Hit the Road” Launch
                            MVP-ready web/apps in 1 week. We front the dev cost
                            — you pay after scaling. Founder-friendly, not
                            VC-controlled
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                            💸 Limited to 20 startups
                        </p>
                    </div>
                </div>
            </div>
            <Link
                href="#contact"
                className="flex w-full items-center justify-center"
            >
                <Button>Crush Competitors Now</Button>
            </Link>

            <CarosoleContent />
        </section>
    );
};

export default Experience;
