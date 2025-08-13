import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.scalestartup.ai'),
    title: {
        default:
            'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        template: '%s | Tech Serve4U, LLC. DBA Scale Startup',
    },
    description:
        'Tech Serve4U, LLC. DBA Scale Startup is a Michigan-based technology company that turns ideas into scalable, production-ready software using AI, automation, and modern cloud infrastructure.',
    keywords: [
        'custom software development',
        'AI automation',
        'SaaS development',
        'cloud infrastructure',
        'Michigan software company',
        'Scale Startup LLC',
    ],
    applicationName: 'Tech Serve4U, LLC. DBA Scale Startup',
    category: 'Technology',
    authors: [
        {
            name: 'Tech Serve4U, LLC. DBA Scale Startup',
            url: 'https://www.scalestartup.ai',
        },
    ],
    creator: 'Tech Serve4U, LLC. DBA Scale Startup',
    publisher: 'Tech Serve4U, LLC. DBA Scale Startup',
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/',
        },
    },
    openGraph: {
        type: 'website',
        url: 'https://www.scalestartup.ai/',
        title: 'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        description:
            'We specialize in end-to-end custom software, AI-powered systems, and cloud-native deployments that scale your business.',
        siteName: 'Tech Serve4U, LLC. DBA Scale Startup',
        images: [
            {
                url: 'https://res.cloudinary.com/dhtgewr0u/image/upload/v1753389009/WhatsApp_Image_2025-07-25_at_02.28.29_23017bec_qv1asf.jpg',
                width: 1200,
                height: 630,
                alt: 'Team at Tech Serve4U, LLC. DBA Scale Startup building scalable software products',
            },
        ],
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Serve4U, LLC. DBA Scale Startup — From Idea to Scalable Reality',
        description:
            'We specialize in end-to-end custom software, AI-powered systems, and cloud-native deployments that scale your business.',
        images: [
            'https://res.cloudinary.com/dhtgewr0u/image/upload/v1753389009/WhatsApp_Image_2025-07-25_at_02.28.29_23017bec_qv1asf.jpg',
        ],
        creator: '@ScaleStartupAI', // update if you have a Twitter handle
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
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
