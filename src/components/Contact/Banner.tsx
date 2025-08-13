'use client';
import React, { useEffect, useState } from 'react';
import Hero from '../SVG/Hero';
import Image from 'next/image';
import { z } from 'zod';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import PhoneIcon from '../SVG/Phone';
import MailIcon from '../SVG/Email';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Zod schema for form validation
const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z
        .string()
        .email('Invalid email address')
        .min(1, 'Email is required'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required'),
});

// Define the types for form fields
type FormData = z.infer<typeof formSchema>;

const Banner = () => {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    // Handle form submission
    const onSubmit = (data: FormData) => {
        setSubmitted(true);
        reset();
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return (
        <section
            className="relative z-10 bg-cover bg-center bg-no-repeat py-8 md:px-8 lg:px-16 lg:py-16 xl:px-24 2xl:px-40"
            style={{ backgroundImage: `url("background/Banner.png")` }}
        >
            {/* Dark Mode Overlay */}
            <div className="absolute inset-0 -z-10 bg-[#020720] opacity-0 dark:opacity-85"></div>

            {/* Hero SVG */}
            <div className="absolute left-0 top-0 hidden lg:block">
                <Hero />
            </div>

            {/* Decorative Circle */}
            <div className="absolute bottom-2/3 right-20 lg:bottom-1/2">
                <Image
                    src="/deco/Circle.png"
                    alt="techserve4u Hero"
                    width={61}
                    height={61}
                    className="sm:h-[91px] sm:w-[91px]"
                />
            </div>

            {/* Main Content */}
            <div className="myContainer flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20">
                {/* Left Content */}
                <div className="w-full space-y-8 lg:w-1/2">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold text-white lg:text-5xl">
                            Have Any{' '}
                            <span
                                className="text-3xl text-white lg:text-5xl"
                                style={{
                                    WebkitTextStroke: '.5px white',
                                    color: 'transparent',
                                }}
                            >
                                Project
                            </span>{' '}
                            on Mind!
                        </h2>

                        <h2 className="text-4xl font-bold text-white lg:text-5xl">
                            <span
                                className="text-white"
                                style={{
                                    WebkitTextStroke: '.5px white',
                                    color: 'transparent',
                                }}
                            >
                                Contact
                            </span>{' '}
                            Us.
                        </h2>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-5 text-secondary md:flex-row">
                        <div className="w-full space-y-2 lg:w-1/2">
                            <p className="flex items-center gap-3">
                                <MailIcon /> Email Us
                            </p>
                            <p className="text-lg font-semibold text-white sm:text-xl">
                                hello@scalestartup.ai
                            </p>
                        </div>

                        <div className="w-full space-y-2 lg:w-1/2">
                            <p className="flex items-center gap-3">
                                <PhoneIcon />
                                Phone Us
                            </p>
                            <p className="text-lg font-semibold text-white sm:text-xl">
                                +1 586-665-3331
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        {/* Name and Email fields */}
                        <div className="flex flex-col sm:flex-row sm:space-x-5">
                            <div className="flex-1">
                                <Input
                                    type="text"
                                    placeholder="Name *"
                                    className="p-5 text-xs text-white placeholder-white"
                                    style={{
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.40)',
                                        background: 'rgba(255, 255, 255, 0.20)',
                                        backdropFilter: 'blur(52px)',
                                    }}
                                    {...register('name')}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="mt-4 flex-1 sm:mt-0">
                                <Input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="p-5 text-xs text-white placeholder-white"
                                    style={{
                                        borderRadius: '10px',
                                        border: '1px solid rgba(255, 255, 255, 0.40)',
                                        background: 'rgba(255, 255, 255, 0.20)',
                                        backdropFilter: 'blur(52px)',
                                    }}
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Subject field */}
                        {/* <div>
                            <Input
                                type="text"
                                placeholder="Subject *"
                                className="w-full p-5 text-xs text-white placeholder-white"
                                style={{
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.40)',
                                    background: 'rgba(255, 255, 255, 0.20)',
                                    backdropFilter: 'blur(52px)',
                                }}
                                {...register('subject')}
                            />
                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.subject.message}
                                </p>
                            )}
                        </div> */}

                        {/* Message field */}
                        <div>
                            <Textarea
                                placeholder="Write what on your mind . . ."
                                className="w-full p-5 text-xs text-white placeholder-white"
                                style={{
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255, 255, 255, 0.40)',
                                    background: 'rgba(255, 255, 255, 0.20)',
                                    backdropFilter: 'blur(52px)',
                                }}
                                rows={5}
                                {...register('message')}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit button */}
                        <Button
                            variant="ts4uSecondary"
                            className=""
                            type="submit"
                        >
                            <ArrowRight /> Submit
                        </Button>

                        {/* Success message */}
                        {submitted && (
                            <p className="mt-2 text-green-500">
                                Thank you! Your message has been sent.
                            </p>
                        )}
                    </form>
                </div>

                {/* Right Side (Image) */}
                <div className="lg:w-1/2">
                    <Image
                        src="/contact/HeroContact.png"
                        alt="Contact Image"
                        width={600}
                        height={400}
                        className="h-auto w-full scale-x-[-1] transform rounded-md object-cover" // Mirror the image on larger screens
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
