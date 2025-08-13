import {
    Download,
    Mail,
    Globe,
    CheckCircle,
    Code,
    Smartphone,
    Cloud,
    MessageSquare,
    BarChart3,
    ShoppingCart,
    Bot,
    GraduationCap,
    Rocket,
    Building,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.scalestartup.ai'),
    title: {
        default:
            'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        template: '%s | Tech Serve4U, LLC. DBA Scale Startup',
    },
    description:
        'Tech Serve4U, LLC. DBA Scale Startup is a Michigan-based technology company specializing in custom software development—from concept to deployment—leveraging AI, automation, and modern cloud infrastructure.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        type: 'website',
        url: 'https://www.scalestartup.ai/about',
        title: 'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        description:
            'Tech Serve4U, LLC. DBA Scale Startup is a Michigan-based technology company specializing in custom software development—from concept to deployment—leveraging AI, automation, and modern cloud infrastructure.',
        siteName: 'Tech Serve4U, LLC. DBA Scale Startup',
        images: [
            {
                url: 'https://res.cloudinary.com/dhtgewr0u/image/upload/v1753388997/WhatsApp_Image_2025-07-25_at_02.28.29_87ded7b6_yslzkf.jpg',
                width: 1200,
                height: 630,
                alt: 'Tech Serve4U, LLC. DBA Scale Startup team building scalable software',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        description:
            'Tech Serve4U, LLC. DBA Scale Startup is a Michigan-based technology company specializing in custom software development—from concept to deployment—leveraging AI, automation, and modern cloud infrastructure.',
        images: [
            'https://res.cloudinary.com/dhtgewr0u/image/upload/v1753388997/WhatsApp_Image_2025-07-25_at_02.28.29_87ded7b6_yslzkf.jpg',
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};
export default function TechServe4UProfile() {
    return (
        <div className="min-h-screen bg-backSecondary py-3">
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="space-y-3">
                    <Image
                        src="/logo/logo.svg"
                        alt="techserve4u Logo"
                        width={152.24}
                        height={50}
                        className="h-16 w-fit"
                    />

                    <div className="mb-2">
                        <p className="text-lg font-medium">
                            From Idea to Scalable Reality
                        </p>
                        <div className="to my-4 h-1 w-full bg-gradient-to-r from-blue-900 to-blue-500"></div>
                    </div>
                </div>

                <div className="space-y-7 pb-8">
                    {/* About Us */}
                    <div className="flex items-start space-x-4 border-b pb-7">
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                            <Building className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-semibold">
                                About Us
                            </h2>
                            <p className="text-gray text-sm leading-relaxed">
                                Tech Serve4U, LLC. DBA Scale Startup is a
                                Michigan-based technology company specializing
                                in custom software development — from concept to
                                deployment. We turn business visions into
                                working solutions using AI, automation, and
                                modern cloud infrastructure.
                            </p>

                            {/* Founder */}
                            <div className="mt-4 flex items-start space-x-4 rounded-lg bg-backPrimary p-4 text-white">
                                <Avatar className="h-12 w-12 flex-shrink-0">
                                    <AvatarFallback className="bg-blue-600 text-sm font-semibold text-white">
                                        SA
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="mb-1 text-base font-semibold">
                                        Founder: Shiblu Ahmad
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                        25+ years of enterprise IT experience —
                                        former Lead Solution Architect at
                                        Volkswagen, Rocket Mortgage, and
                                        Chrysler. Now leading a global team of
                                        40+ engineers, designers, and marketers
                                        with an offshore development center in
                                        Dhaka, Bangladesh.
                                    </p>
                                    <Link href="https://calendly.com/ts4u/30min">
                                        <Button size={'sm'} className="mt-3">
                                            Setup a meeting
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Expertise */}
                    <div className="flex items-start space-x-4 border-b pb-7">
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                            <Code className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h2 className="mb-4 text-xl font-semibold">
                                Core Expertise
                            </h2>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                                <div className="flex items-start space-x-2">
                                    <ShoppingCart className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        Multi-Vendor & Single Vendor E-Commerce
                                        Platforms
                                    </span>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <Bot className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        AI-Powered Dialer & CRM Solutions
                                    </span>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <BarChart3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        AI-Driven Project Management Systems
                                    </span>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <MessageSquare className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        Real-Time Chat & Calendar Applications
                                    </span>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        EdTech Platform (BootCamps Hub) for
                                        coaches and consultants
                                    </span>
                                </div>

                                <div className="flex items-start space-x-2">
                                    <Smartphone className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        Mobile App Development using React
                                        Native
                                    </span>
                                </div>

                                <div className="col-span-2 flex items-start space-x-2">
                                    <Cloud className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray leading-tight">
                                        End-to-End SaaS Development & Deployment
                                        on AWS, GCP, and Azure
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BootCamps Hub */}
                    <div className="flex items-start space-x-4 border-b pb-7">
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-semibold">
                                BootCamps Hub
                            </h2>
                            <p className="text-gray text-sm leading-relaxed">
                                Our flagship product — an AI-powered coaching
                                platform supporting one-to-one and one-to-many
                                education models, including automation,
                                certification, marketing, and multi-academy
                                management.
                            </p>
                        </div>
                    </div>

                    {/* Our Model */}
                    <div className="flex items-start space-x-4 border-b pb-7">
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-semibold">
                                Our Model
                            </h2>
                            <p className="text-gray mb-4 text-sm leading-relaxed">
                                We partner with businesses earning $2M–$20M who
                                are ready to scale but face technological
                                barriers.
                            </p>

                            <div className="space-y-2">
                                <p className="text-gray text-sm font-medium">
                                    We offer:
                                </p>

                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray text-sm">
                                        Rapid Deployment (30-45 Days)
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray text-sm">
                                        Revenue-Sharing Partnerships or Fixed
                                        Cost Models
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span className="text-gray text-sm">
                                        Full Lifecycle Services – refactoring,
                                        scaling, and full product builds
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Let's Collaborate */}
                    <div className="flex items-start space-x-4">
                        <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-blue-100">
                            <Rocket className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="mb-3 text-xl font-semibold">
                                Let's Collaborate
                            </h2>
                            <p className="text-gray mb-4 text-sm leading-relaxed">
                                If you're looking to modernize, automate, or
                                scale your platform — we're ready to build with
                                you. Let's connect and explore a partnership for
                                mutual growth.
                            </p>

                            <div className="space-y-2">
                                <p className="text-gray text-sm font-medium">
                                    Contact:
                                </p>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4 text-blue-600" />
                                    <a
                                        href="mailto:hello@scalestartup.ai"
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        hello@scalestartup.ai
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Globe className="h-4 w-4 text-blue-600" />
                                    <a
                                        href="https://www.scalestartup.ai"
                                        className="text-sm text-blue-600 hover:underline"
                                    >
                                        www.scalestartup.ai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-center border-t border-blue-200 px-8 py-6">
                    <Image
                        src="/logo/logo.svg"
                        alt="techserve4u Logo"
                        width={152.24}
                        height={50}
                        className="h-8 w-fit"
                    />
                </div>
            </div>
        </div>
    );
}
