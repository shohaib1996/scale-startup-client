import Image from 'next/image';
import Link from 'next/link';
import Arrow from '../SVG/Arrow';
import { Button } from '../ui/button';

const Choose = () => {
    return (
        <section className="bg-backSecondary py-6 lg:py-14" id="choose">
            <div className="myContainer">
                <div className="mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                    {/* Left Side Image */}
                    <div className="relative flex items-center justify-center">
                        <div className="relative h-[100%] min-h-[250px] w-full rounded-xl shadow-lg sm:min-h-[400px] md:min-h-[600px]">
                            <Image
                                src="/image/Choose.png"
                                alt="Customer holding box"
                                fill
                                className="rounded-xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side Text Content */}
                    <div className="space-y-6 rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 md:p-14">
                        <h3 className="heading">Why ScaleStartups?</h3>

                        <p className="text-md pb-2 text-headText lg:text-xl">
                            Your Technical Co-Founder for Hyper-Growth: Code,
                            Customers, and Scale on Autopilot
                        </p>

                        <div className="space-y-5 md:pl-10">
                            <div className="space-y-1 sm:space-y-3">
                                <h4 className="subHeading">
                                    Bulletproof Code, Zero Downtime
                                </h4>
                                <p className="subPara">
                                    Enterprise-grade software with 99.99% uptime
                                    SLA. Launch fast, scale endlessly, and leave
                                    technical debt to amateurs
                                </p>
                                <p className="mt-2 text-sm font-semibold">
                                    ✅ Used by 3 startups acquired for $100M+
                                </p>
                            </div>

                            <div className="space-y-1 sm:space-y-3">
                                <h4 className="subHeading">
                                    Code + Growth in One Stack
                                </h4>
                                <p className="subPara">
                                    We build your software and fill your
                                    pipeline. Embed proven lead gen hacks, AI
                                    analytics, and conversion engines
                                </p>
                                <p className="mt-2 text-sm font-semibold">
                                    ✅ Guaranteed 500 leads/month or we work
                                    free
                                </p>
                            </div>

                            <div className="space-y-1 sm:space-y-3">
                                <h4 className="subHeading">
                                    {' '}
                                    Scale Without the Crash
                                </h4>
                                <p className="subPara">
                                    Infrastructure that grows as you do. Pay
                                    only for active users—no overprovisioning,
                                    no surprise bills
                                </p>
                                <p className="mt-2 text-sm font-semibold">
                                    ✅ Slash ops costs by 70%
                                </p>
                            </div>

                            <div className="space-y-1 sm:space-y-3">
                                <h4 className="subHeading">
                                    From MVP to $100M Traction
                                </h4>
                                <p className="subPara">
                                    12 years of scaling secrets from 237+
                                    startups. Your success becomes our next case
                                    study.
                                </p>
                                <p className="mt-2 text-sm font-semibold">
                                    ✅ Featured in TechCrunch, YC, Forbes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section for Additional Cards */}
                <div className="mx-auto mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="group flex h-full flex-col justify-between space-y-4 rounded-xl bg-tertiary/15 p-8 shadow-lg hover:bg-tertiary hover:text-white sm:p-10">
                        <div>
                            <h2 className="heading group-hover:text-white">
                                Innovative <br /> Design
                            </h2>

                            <p className="para py-4 group-hover:text-white">
                                Innovative design focuses on creating new,
                                creative, and practical solutions that enhance
                                functionality and appeal, setting products apart
                                from the competition.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <Link
                                href=""
                                className="flex items-center space-x-2 font-bold text-tertiary group-hover:text-white"
                            >
                                <span>See More</span>
                                <Arrow />
                            </Link>
                        </div>
                    </div>

                    <div className="group flex h-full flex-col justify-between space-y-4 rounded-xl bg-tertiary/15 p-8 shadow-lg hover:bg-tertiary hover:text-white sm:p-10">
                        <div>
                            <h2 className="heading group-hover:text-white">
                                Advanced <br /> Technology
                            </h2>

                            <p className="para py-4 group-hover:text-white">
                                Advanced technology refers to cutting-edge tools
                                and innovations that improve efficiency,
                                performance, and user experience in products or
                                services.
                            </p>
                        </div>
                        <div className="mt-auto">
                            <Link
                                href=""
                                className="flex items-center space-x-2 font-bold text-tertiary group-hover:text-white"
                            >
                                <span>See More</span>
                                <Arrow />
                            </Link>
                        </div>
                    </div>

                    <div className="group flex h-full flex-col justify-between space-y-4 rounded-xl bg-tertiary/15 p-8 shadow-lg hover:bg-tertiary hover:text-white sm:p-10">
                        <div>
                            <h2 className="heading group-hover:text-white">
                                Exceptional <br /> Quality
                            </h2>

                            <p className="para py-4 group-hover:text-white">
                                Exceptional quality means products are made to
                                the highest standards, offering superior
                                performance, durability, and reliability
                            </p>
                        </div>
                        <div className="mt-auto">
                            <Link
                                href=""
                                className="flex items-center space-x-2 font-bold text-tertiary group-hover:text-white"
                            >
                                <span>See More</span>
                                <Arrow />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link
                href="#contact"
                className="flex w-full items-center justify-center"
            >
                <Button>Code + Cash Now</Button>
            </Link>
        </section>
    );
};

export default Choose;
