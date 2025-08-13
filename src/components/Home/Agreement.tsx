import Image from 'next/image';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Wave from '../SVG/Wave';
import Link from 'next/link';

const Agreement = () => {
    return (
        <section
            className="relative bg-backPrimary py-6 lg:py-16"
            id="agreement"
        >
            <div className="absolute left-0 top-0 w-full">
                <Wave width="100%" height="100%" />
            </div>

            <div className="myContainer flex flex-col items-center justify-between gap-14 lg:flex-row lg:gap-10">
                {/* Left Side Images */}
                <div className="relative w-full lg:w-1/2">
                    {/* First Image */}
                    <div className="xs:pl-10 relative flex items-center justify-start pl-5 sm:justify-center sm:pl-0 lg:absolute lg:-top-72 lg:left-0 xl:justify-start">
                        <div className="relative h-[180px] w-[240px] flex-shrink-0 rounded-lg shadow-lg sm:h-[250px] sm:w-[300px] xl:h-[360px] xl:w-[500px]">
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736770157-Agreement1.png"
                                alt="Online Register Image"
                                fill
                                className="rounded-3xl border-2 border-secondary object-cover"
                            />

                            {/* Second Image */}
                            <div className="absolute -bottom-8 -right-12 -mt-10 h-[120px] w-[160px] flex-shrink-0 rounded-lg shadow-lg sm:-bottom-20 sm:-right-32 sm:h-[200px] sm:w-[260px] xl:h-[260px] xl:w-[360px]">
                                <Image
                                    src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747736788453-Agreement2.png"
                                    alt="Payment Data Image"
                                    fill
                                    className="rounded-3xl border-2 border-secondary object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Background Shape */}
                    <div className="absolute left-0 top-0 -z-10 h-[300px] w-[320px] flex-shrink-0 rounded-xl bg-[#F162A2] bg-opacity-20 shadow-[0_0_72px_rgba(254,141,191,0.5)] lg:h-[400px] lg:w-[420px]"></div>
                </div>

                {/* Right Side Text Content */}
                <div className="w-full space-y-6 lg:w-1/2 lg:px-0">
                    <h3 className="text-2xl font-bold text-white lg:text-4xl">
                        Crisis-to-Cash Engineering
                    </h3>

                    <p className="para max-w-2xl !text-white">
                        our Scaling SWAT Team: Code Fixes + Pivot Strategies in
                        20 Minutes.” Our 20+ engineers become your 24/7 crisis
                        crew. Server crashed? Feature flop? Consider it handled.
                    </p>

                    <Link href={'#contact'}>
                        <Button variant="ts4uSecondary">
                            <ArrowRight /> Hire Our Squad
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Agreement;
