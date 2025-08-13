import Image from 'next/image';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Dot from '../SVG/Dot';
import Link from 'next/link';

const Feedback = () => {
    return (
        <section className="relative overflow-hidden bg-backWhite py-6 md:py-16">
            <div className="myContainer mx-auto flex flex-col items-center justify-between gap-10 lg:flex-row">
                {/* Left Side Text Content */}
                <div className="z-30 w-full space-y-6 lg:w-1/2 lg:px-0">
                    <h3 className="max-w-xl text-2xl font-bold lg:text-4xl">
                        Profit Autopilot Mode
                    </h3>
                    <p className="para max-w-2xl">
                        Get Live Market Intel: AI-Powered Leaks on Competitors
                        Moves, VC Trends & Exploitable Gaps.” Weekly playbooks
                        to out-innovate, out-price, and out-scale rivals. Your
                        empire grows while you sleep.
                    </p>

                    <Link
                        href={'#contact'}
                        className="z-30 flex justify-center lg:justify-start"
                    >
                        <Button
                            variant="ts4uPrimary"
                            className="hidden lg:flex"
                        >
                            <ArrowRight /> Steal Our Secrets
                        </Button>
                    </Link>
                </div>

                {/* Right Side Image with Design */}
                <div className="relative z-40 w-full max-w-2xl pr-10 lg:w-1/2 lg:px-16">
                    <div className="relative z-40 h-[180px] w-full sm:h-[300px] lg:h-[380px]">
                        <Image
                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737027894-Feedback.png"
                            alt="Online Register Image"
                            fill
                            className="rounded-3xl object-cover"
                        />

                        {/* Design Background Elements */}
                        <div className="absolute -right-10 top-1/2 -z-10 -translate-y-1/2 transform">
                            <div className="relative z-10 h-[250px] w-[170px] flex-shrink-0 rounded-[30px] bg-tertiary shadow-[0_0_72px_rgba(96,124,246,0.1)] sm:h-[400px] sm:w-[280px] lg:-right-20 lg:h-[520px] lg:w-[350px] lg:rounded-[46px]"></div>
                            <div className="absolute -right-52 top-0 z-0">
                                <Dot
                                    rows={15}
                                    cols={15}
                                    dotSize={6}
                                    spacing={22}
                                    className="z-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    variant="ts4uPrimary"
                    className="z-40 mt-5 flex lg:hidden"
                >
                    <ArrowRight /> Book a Meeting
                </Button>
            </div>
        </section>
    );
};

export default Feedback;
