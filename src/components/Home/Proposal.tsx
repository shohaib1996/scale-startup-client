import Image from 'next/image';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Dot from '../SVG/Dot';
import Link from 'next/link';

const Proposal = () => {
    return (
        <section className="relative overflow-hidden bg-backWhite py-6 lg:py-32">
            <div className="myContainer mx-auto flex flex-col items-center justify-between gap-20 lg:flex-row lg:gap-10">
                {/* Left Side Text Content */}
                <div className="z-30 w-full space-y-6 lg:w-1/2 lg:px-0">
                    <h3 className="text-2xl font-bold text-headText lg:text-4xl">
                        Code + Cash Acceleration
                    </h3>
                    <p className="para max-w-2xl">
                        We Fund Your Dev Costs — Pay 0 Until You Hit Production
                        Founder-friendly terms. No licenses. No equity grabs.
                        Just a signed NDA and your napkin sketch
                    </p>

                    <Link
                        href={'#contact'}
                        className="z-30 flex justify-center lg:justify-start"
                    >
                        <Button
                            variant="ts4uPrimary"
                            className="hidden lg:flex"
                        >
                            <ArrowRight /> Start Risk-Free
                        </Button>
                    </Link>
                </div>

                {/* Right Side Image with Design */}
                <div className="relative z-30 w-full lg:w-1/2 lg:px-20">
                    <div className="relative z-30 mx-auto h-[240px] w-full max-w-2xl sm:h-[300px] lg:h-[380px] 2xl:ml-20">
                        <Image
                            src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737169615-Proposal.png"
                            alt="Online Register Image"
                            fill
                            className="rounded-3xl object-cover"
                        />

                        {/* Design Background Elements */}
                        <div className="absolute -right-20 -top-16 -z-30">
                            <div className="relative z-10 h-[200px] w-[200px] flex-shrink-0 -rotate-[39.561deg] transform rounded-[30px] bg-[#F162A2] shadow-[0_0_72px_rgba(254,141,191,0.5)] sm:h-[250px] sm:w-[250px] lg:rounded-[46px] xl:h-[342px] xl:w-[342px]"></div>
                            <div className="absolute -right-52 top-4 z-0 h-[140px] w-full max-w-2xl sm:h-[200px] lg:h-[380px]">
                                <Dot
                                    rows={15}
                                    cols={15}
                                    dotSize={6}
                                    spacing={22}
                                    color="#F68ABB"
                                    className="z-0"
                                />
                            </div>
                        </div>
                    </div>

                    <Button
                        variant="ts4uPrimary"
                        className="mx-auto mt-6 flex lg:hidden"
                    >
                        <ArrowRight /> Book a Meeting
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Proposal;
