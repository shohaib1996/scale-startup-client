import Link from 'next/link';
import { ChevronRight, Info } from 'lucide-react';

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function PrivacyPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <TooltipProvider>
            <Navbar />
            <div className="container mx-auto max-w-4xl py-12">
                <div className="mb-10 space-y-2 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: {currentDate}
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="mb-10 rounded-lg border border-[#e0e8ff] bg-primary p-6 dark:border-[#e0e8ff]/20 dark:bg-[#1e293b]">
                    <h2 className="mb-4 text-xl font-semibold text-primary dark:text-white">
                        Contents
                    </h2>
                    <div className="grid gap-2">
                        {[
                            'Information We Collect',
                            'How We Use Your Information',
                            'Meeting Setup and Demo Process',
                            'Data Sharing and Disclosure',
                            'Data Retention',
                            'Your Privacy Rights',
                            'Data Security',
                            'Third-Party Services',
                            "Children's Privacy",
                            'Changes to This Policy',
                            'Contact Us',
                        ].map((section, index) => (
                            <Link
                                key={index}
                                href={`#section-${index + 1}`}
                                className="flex items-center text-sm transition-colors hover:text-primary dark:text-white md:text-base"
                            >
                                <ChevronRight className="mr-2 h-4 w-4 text-primary dark:text-white" />
                                {section}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg">
                            At{' '}
                            <span className="font-semibold text-primary dark:text-white">
                                Scale Startup
                            </span>
                            , the mother company of{' '}
                            <span className="font-semibold">
                                Tech Serve4 U, LLC.
                            </span>
                            , we are committed to protecting your privacy and
                            ensuring that your personal data is handled
                            responsibly and transparently. This Privacy Policy
                            outlines how we collect, use, store, and protect
                            your information in connection with our custom web
                            development and app development services.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section id="section-1" className="scroll-mt-16">
                        <h2 className="mb-4 flex items-center text-2xl font-bold text-primary dark:text-white">
                            1. Information We Collect
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 flex items-center text-xl font-semibold">
                                    Personal Information
                                    <InfoTooltip content="Information that can be used to identify you directly" />
                                </h3>
                                <p className="mb-3">
                                    When you reach out to us for services,
                                    schedule a demo, or book a meeting, we may
                                    collect:
                                </p>
                                <ul className="list-disc space-y-1 pl-6 marker:text-primary dark:text-white">
                                    <li>Full name</li>
                                    <li>Company name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Job title</li>
                                    <li>Country and time zone</li>
                                    <li>
                                        Meeting notes or business requirements
                                        shared voluntarily
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 flex items-center text-xl font-semibold">
                                    Usage Data
                                    <InfoTooltip content="Information collected automatically when you visit our website" />
                                </h3>
                                <p className="mb-3">
                                    When you visit our website or use our SaaS
                                    platform, we may automatically collect:
                                </p>
                                <ul className="list-disc space-y-1 pl-6 marker:text-primary dark:text-white">
                                    <li>IP address</li>
                                    <li>Browser type and version</li>
                                    <li>Pages visited</li>
                                    <li>Time spent on pages</li>
                                    <li>Referral URLs</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 flex items-center text-xl font-semibold">
                                    Cookies and Tracking Technologies
                                    <InfoTooltip content="Small text files stored on your device that help us improve your experience" />
                                </h3>
                                <p>
                                    We use cookies to enhance user experience
                                    and for analytics. You can manage cookie
                                    preferences through your browser settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section id="section-2" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            2. How We Use Your Information
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3">
                            We use the collected information to:
                        </p>
                        <ul className="list-disc space-y-2 pl-6 marker:text-primary dark:text-white">
                            <li>
                                Understand your project needs and customize our
                                offerings
                            </li>
                            <li>Set up discovery or consultation meetings</li>
                            <li>
                                Provide demos tailored to your business use case
                            </li>
                            <li>Deliver our services and project updates</li>
                            <li>
                                Improve our website, platform, and customer
                                experience
                            </li>
                            <li>
                                Communicate with you about new services or
                                features
                                <span className="text-muted-foreground ml-1">
                                    (only with your consent)
                                </span>
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section id="section-3" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            3. Meeting Setup and Demo Process
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3">
                            When you request a meeting or demo:
                        </p>
                        <ul className="list-disc space-y-2 pl-6 marker:text-primary dark:text-white">
                            <li>
                                We collect only the necessary information to
                                personalize your session
                            </li>
                            <li>
                                All communication and scheduling are secured via
                                encrypted channels
                                <InfoTooltip content="We use services like Calendly, Zoom, and Google Meet with enterprise-grade security" />
                            </li>
                            <li>
                                Meeting records (if any) are stored securely and
                                deleted upon request
                            </li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section id="section-4" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            4. Data Sharing and Disclosure
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3 font-medium">
                            We do not sell or rent your personal data.
                        </p>
                        <p className="mb-3">We may share your data with:</p>
                        <ul className="list-disc space-y-2 pl-6 marker:text-primary dark:text-white">
                            <li>
                                Trusted third-party vendors
                                <span className="text-muted-foreground ml-1">
                                    (e.g., CRM, analytics tools, calendar
                                    platforms)
                                </span>
                                under strict confidentiality agreements
                            </li>
                            <li>
                                Legal or government authorities if required by
                                law or to protect our rights
                            </li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section id="section-5" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            5. Data Retention
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3">
                            We retain your personal data only as long as
                            necessary for:
                        </p>
                        <ul className="list-disc space-y-2 pl-6 marker:text-primary dark:text-white">
                            <li>The purpose it was collected</li>
                            <li>
                                Legal, accounting, or reporting requirements
                            </li>
                        </ul>
                        <p className="mt-4">
                            You may request deletion of your data at any time by
                            contacting us at{' '}
                            <Link
                                href="mailto:hello@scalestartup.ai"
                                className="text-primary hover:underline dark:text-white"
                            >
                                hello@scalestartup.ai
                            </Link>
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section id="section-6" className="scroll-mt-16">
                        <h2 className="mb-4 flex items-center text-2xl font-bold text-primary dark:text-white">
                            6. Your Privacy Rights
                            <InfoTooltip content="These rights may vary depending on your location and applicable laws" />
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3">
                            Depending on your region (e.g., EU/EEA under GDPR,
                            California under CCPA), you have the right to:
                        </p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="rounded-lg border border-[#e0e8ff] bg-primary p-4">
                                <p className="mb-2 font-medium">
                                    Access your data
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Request a copy of all personal data we hold
                                    about you
                                </p>
                            </div>
                            <div className="rounded-lg border border-[#e0e8ff] bg-primary p-4">
                                <p className="mb-2 font-medium">
                                    Correct inaccurate data
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Update or correct any information that is
                                    inaccurate
                                </p>
                            </div>
                            <div className="rounded-lg border border-[#e0e8ff] bg-primary p-4">
                                <p className="mb-2 font-medium">
                                    Delete your data
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Request complete deletion of your personal
                                    information
                                </p>
                            </div>
                            <div className="rounded-lg border border-[#e0e8ff] bg-primary p-4">
                                <p className="mb-2 font-medium">
                                    Restrict or object to data processing
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Limit how we use your information
                                </p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <p>To exercise your rights, contact:</p>
                            <Button className="mt-2 bg-[#0736CF] hover:bg-[#0736CF]/90">
                                <Link
                                    href="mailto:hello@scalestartup.ai"
                                    className="text-white"
                                >
                                    hello@scalestartup.ai
                                </Link>
                            </Button>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section id="section-7" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            7. Data Security
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-3">
                            We implement industry-standard security measures to
                            protect your data, including:
                        </p>
                        <ul className="list-disc space-y-2 pl-6 marker:text-primary dark:text-white">
                            <li>
                                SSL encryption for all data in transit
                                <InfoTooltip content="Secure Sockets Layer encryption protects data as it travels between your device and our servers" />
                            </li>
                            <li>Role-based access controls</li>
                            <li>Secure servers and firewalls</li>
                            <li>Regular security audits and monitoring</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section id="section-8" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            8. Third-Party Services
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p>
                            Our website and communications may include links to
                            third-party services. We are not responsible for the
                            privacy practices or content of these services. We
                            encourage you to review their privacy policies.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section id="section-9" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            9. Children's Privacy
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p>
                            Our services are not intended for children under 16.
                            We do not knowingly collect data from minors. If we
                            become aware of such data, we will delete it
                            immediately.
                        </p>
                    </section>

                    {/* Section 10 */}
                    <section id="section-10" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            10. Changes to This Policy
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p>
                            We may update this policy to reflect changes in our
                            practices or legal obligations. Updates will be
                            posted on this page with the updated "Last Updated"
                            date.
                        </p>
                    </section>

                    {/* Section 11 */}
                    <section id="section-11" className="scroll-mt-16">
                        <h2 className="mb-4 text-2xl font-bold text-primary dark:text-white">
                            11. Contact Us
                        </h2>
                        <Separator className="mb-6 bg-[#0736CF]/20" />
                        <p className="mb-4">
                            If you have any questions or concerns about this
                            Privacy Policy, please contact us at:
                        </p>
                        <div className="rounded-lg border border-[#e0e8ff] bg-primary p-6 dark:border-[#e0e8ff]/20 dark:bg-[#1e293b]">
                            <h3 className="mb-3 text-xl font-semibold text-primary dark:text-white">
                                Scale Startup
                            </h3>
                            <p className="mb-3 text-sm">
                                Parent company of Tech Serve4 U, LLC.
                            </p>
                            <div className="space-y-2">
                                <p>
                                    <span className="font-medium">Email:</span>{' '}
                                    <Link
                                        href="mailto:hello@scalestartup.ai"
                                        className="text-primary hover:underline dark:text-white"
                                    >
                                        hello@scalestartup.ai
                                    </Link>
                                </p>
                                <p>
                                    <span className="font-medium">Phone:</span>{' '}
                                    +1 (555) 123-4567
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Website:
                                    </span>{' '}
                                    <Link
                                        href="https://www.scalestartup.ai"
                                        className="text-primary hover:underline dark:text-white"
                                    >
                                        www.scalestartup.ai
                                    </Link>
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Mailing Address:
                                    </span>{' '}
                                    123 Business St, Suite 100, San Francisco,
                                    CA 94103
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Scale Startup. All rights
                        reserved.
                    </p>
                </div>
            </div>

            <Footer />

            {/* Tooltip Component */}
        </TooltipProvider>
    );
}

function InfoTooltip({ content }: { content: string }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Info className="text-muted-foreground ml-2 h-4 w-4 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs border-[#0736CF]/20 bg-primary">
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    );
}
