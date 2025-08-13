import Image from 'next/image';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Light from '../SVG/Light';
import Link from 'next/link';

const Started = () => {
    return (
        <section className="relative overflow-hidden bg-backSecondary py-8 lg:py-16">
            <div className="absolute -top-1/2 left-0 max-w-full overflow-hidden xl:-top-40">
                <Light className="object-contain" />
            </div>

            <div className="absolute -bottom-1/2 -right-1/3 hidden max-w-full scale-x-[-1] transform overflow-hidden md:flex">
                <Light />
            </div>

            <div className="myContainer">
                <div className="space-y-2 pb-6 text-center sm:pb-10 md:space-y-6">
                    <h3 className="heading mx-auto">
                        ScaleStartups Path to Domination
                    </h3>
                </div>

                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    {/* Left Side Content */}
                    <div className="w-full space-y-6 lg:w-1/2">
                        <h3 className="max-w-[570px] text-2xl font-bold text-headText lg:text-4xl">
                            Code Blueprint in 20 Minutes
                        </h3>
                        <p className="para max-w-2xl">
                            Skip the 6-Month Wait — Steal Our Pre-Built Tech
                            Stack & Launch Your MVP in 7 Days.” 100% owned
                            codebase. Zero equity. We handle servers, AI
                            modules, and crisis scaling — you keep the profits.
                        </p>

                        <Link href={'#contact'}>
                            <Button variant="ts4uPrimary">
                                <ArrowRight /> Get Starter Kit
                            </Button>
                        </Link>
                    </div>

                    {/* Right Side Images */}
                    <div className="flex w-full flex-col gap-8 md:flex-row lg:w-1/2">
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg pt-0 shadow-lg sm:h-[360px] md:mt-10">
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737337087-Started1.png"
                                alt="Calendar Image"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="relative h-[200px] w-full overflow-hidden rounded-lg shadow-lg sm:h-[360px]">
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747737349769-Started2.png"
                                alt="Handshake Image"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Started;
