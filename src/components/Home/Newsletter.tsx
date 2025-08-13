'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useState } from 'react';
import Wave from '../SVG/Wave';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscription = () => {
        setEmail('');
        alert('Complete Subscription');
    };

    return (
        <section className="lg:mx-5 lg:my-6">
            <section className="myContainer relative bg-backPrimary text-white lg:rounded-3xl">
                <div className="absolute left-0 top-20 w-full">
                    <Wave width="100%" height="100%" />
                </div>

                <div className="mx-auto flex flex-col-reverse items-center justify-between gap-8 lg:flex-row lg:p-10">
                    {/* Left Side - Image */}
                    <div className="relative flex w-full justify-center lg:w-[40%] lg:justify-start">
                        <div className="relative h-[360px] w-full">
                            <Image
                                src="https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/enrollment/1747817413541-Newsletter.png"
                                alt="Box of electronics"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side - Subscribe Form */}
                    <div className="flex w-full flex-col items-center space-y-4 py-6 lg:w-[60%] lg:items-start lg:space-y-8 lg:py-14">
                        <h3 className="heading !text-white">
                            Subscribe to Newsletters
                        </h3>
                        <p className="max-w-2xl text-center text-sm opacity-70 lg:text-start lg:text-xl">
                            Stay updated with the latest trends, exclusive
                            deals, and special offers by subscribing to our
                            newsletter. Be the first to know about new arrivals
                            and exciting updates!
                        </p>
                        {/* Subscription Form */}
                        {/* <form className="flex w-full items-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-grow rounded-l-full p-3 text-black outline-none"
                        />
                        <Button
                            type="submit"
                            variant="ts4u"
                            className="mb-5 gap-2 bg-tertiary"
                        >
                            Submit
                        </Button>
                    </form> */}

                        <form className="relative w-full min-w-[300px] max-w-[600px]">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full rounded-xl p-3 text-headText outline-none dark:border md:p-4"
                            />
                            <div className="absolute bottom-0 right-0 top-0 mr-2 flex items-center">
                                <Button
                                    variant="ts4uPrimary"
                                    onClick={handleSubscription}
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Newsletter;
