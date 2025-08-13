'use client';

import type React from 'react';

import { useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

export default function TermsAndConditions() {
    const [expandedSections, setExpandedSections] = useState<
        Record<string, boolean>
    >({
        'service-scope': true,
        eligibility: true,
        'user-accounts': true,
        'acceptable-use': true,
        'subscription-terms': true,
        'intellectual-property': true,
        privacy: true,
        'service-modifications': true,
        termination: true,
        disclaimers: true,
        'limitation-liability': true,
        indemnification: true,
        'governing-law': true,
        'changes-terms': true,
        'contact-information': true,
    });

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const LegalTerm = ({
        term,
        definition,
    }: {
        term: string;
        definition: string;
    }) => (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="cursor-help font-medium text-[#0736CF] underline decoration-dotted">
                        {term}
                    </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
                    <p className="text-sm text-gray-700">{definition}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );

    const Section = ({
        id,
        title,
        children,
    }: {
        id: string;
        title: string;
        children: React.ReactNode;
    }) => (
        <div className="mb-8 rounded-lg bg-backSecondary p-6 shadow-md">
            <div
                className="flex cursor-pointer items-center justify-between py-2"
                onClick={() => toggleSection(id)}
            >
                <h2 className="text-xl font-bold text-primary dark:text-white">
                    {title}
                </h2>
                <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-[#0736CF]"
                >
                    {expandedSections[id] ? (
                        <ChevronUp className="h-5 w-5" />
                    ) : (
                        <ChevronDown className="h-5 w-5" />
                    )}
                </Button>
            </div>
            {expandedSections[id] && (
                <div className="mt-4 text-gray-700">{children}</div>
            )}
            <Separator className="mt-6" />
        </div>
    );

    return (
        <>
            <Navbar />

            <div className="container mx-auto max-w-4xl px-4 py-12">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0736CF] sm:text-4xl">
                        Terms and Conditions
                    </h1>
                    <p className="text-gray-600">Last Updated: April 5, 2025</p>
                </div>

                <div className="prose prose-gray mb-8 max-w-none">
                    <p>
                        Welcome to ScaleStartup.ai ("
                        <LegalTerm
                            term="ScaleStartup.ai"
                            definition="The company providing AI-powered services and tools through the website scalestartup.ai and related applications."
                        />
                        ", "<strong>we</strong>", "<strong>us</strong>", or "
                        <strong>our</strong>"). These Terms and Conditions ("
                        <LegalTerm
                            term="Terms"
                            definition="The legally binding agreement between you and ScaleStartup.ai that governs your access to and use of our services."
                        />
                        ") govern your access to and use of our AI-powered
                        services, tools, and platform (collectively, the "
                        <LegalTerm
                            term="Service"
                            definition="All features, applications, content, and other services provided by ScaleStartup.ai that you may access or use."
                        />
                        "). By accessing or using the Service, you agree to be
                        bound by these Terms and our Privacy Policy.{' '}
                        <strong>
                            If you do not agree with these Terms, you must not
                            use the Service.
                        </strong>
                    </p>
                </div>

                <Section id="service-scope" title="Service Scope and Use ">
                    <p className="mb-4 dark:text-gray-200">
                        ScaleStartup.ai provides a software-as-a-service
                        platform offering AI-powered tools and solutions to help
                        users and organizations scale their operations. This may
                        include web-based software, APIs, machine learning
                        models, and any related services such as{' '}
                        <LegalTerm
                            term="consulting or integration support"
                            definition="Professional services provided by ScaleStartup.ai to help implement or customize our solutions for your specific needs."
                        />{' '}
                        we might offer. These Terms apply to{' '}
                        <LegalTerm
                            term="all features and services"
                            definition="Current and future functionality, tools, and capabilities provided through the ScaleStartup.ai platform."
                        />{' '}
                        we provide now or in the future.
                    </p>
                    <p className="dark:text-gray-200">
                        We grant you a limited, non-exclusive, non-transferable
                        license to access and use our Service for your internal
                        business or personal purposes, in accordance with these
                        Terms.{' '}
                        <LegalTerm
                            term="All new features, updates, or enhancements"
                            definition="Improvements or additions to the Service that are released after you begin using the Service."
                        />{' '}
                        to the Service will also be subject to these Terms.
                        Please note that the Service may integrate with or allow
                        access to third-party services; your use of those
                        third-party services is subject to their own terms and
                        we are not responsible for those services.
                    </p>
                </Section>

                <Section id="eligibility" title="Eligibility">
                    <p className="dark:text-gray-200">
                        You must be at least{' '}
                        <LegalTerm
                            term="18 years old"
                            definition="The minimum age required to use our Service. Users under 18 are not permitted to use ScaleStartup.ai."
                        />{' '}
                        (or the age of legal majority in your jurisdiction) and{' '}
                        <LegalTerm
                            term="capable of entering into a binding contract"
                            definition="Having the legal capacity to agree to and be bound by these Terms under applicable law."
                        />{' '}
                        to use our Service. By using ScaleStartup.ai, you
                        represent and warrant that you meet this eligibility
                        requirement. If you are using the Service on behalf of a
                        company or other organization, you represent and warrant
                        that you have the authority to{' '}
                        <LegalTerm
                            term="bind that organization"
                            definition="Legally commit your company or organization to these Terms and the obligations contained within them."
                        />{' '}
                        to these Terms and that the organization accepts these
                        Terms.
                    </p>
                </Section>

                <Section id="user-accounts" title="User Accounts and Security">
                    <p className="mb-4 dark:text-gray-200">
                        Some features of our Service require you to{' '}
                        <LegalTerm
                            term="create an account"
                            definition="Register with ScaleStartup.ai by providing certain information to access the Service."
                        />
                        . When registering an account, you agree to provide
                        truthful, current, and complete information, and to keep
                        it updated. You are responsible for maintaining the{' '}
                        <LegalTerm
                            term="confidentiality"
                            definition="Keeping your login credentials private and secure from unauthorized access."
                        />{' '}
                        of your login credentials and for all activities that
                        occur under your account.{' '}
                        <LegalTerm
                            term="Do not share"
                            definition="Never provide your password or access credentials to another person or entity."
                        />{' '}
                        your account credentials with others. If you suspect any
                        unauthorized use of your account or a security breach,
                        you must notify us immediately.
                    </p>
                    <p className="dark:text-gray-200">
                        You are responsible for all content or data that you
                        upload or generate through the Service under your
                        account. Please use a secure password and{' '}
                        <LegalTerm
                            term="protect your account"
                            definition="Take reasonable measures to prevent unauthorized access, such as using strong passwords and enabling two-factor authentication if available."
                        />{' '}
                        to prevent misuse. We are not liable for any loss or
                        damage arising from your failure to safeguard your
                        account information.
                    </p>
                </Section>

                <Section id="acceptable-use" title="Acceptable Use Policy">
                    <p className="mb-4 dark:text-gray-200">
                        When using ScaleStartup.ai, you agree to{' '}
                        <LegalTerm
                            term="use the Service lawfully and responsibly"
                            definition="Using the Service in compliance with all applicable laws and in a manner that doesn't harm others or the Service itself."
                        />
                        . You <strong>shall NOT</strong> use the Service in ways
                        that:
                    </p>
                    <ul className="list-disc space-y-4 pl-6 dark:text-gray-200">
                        <li>
                            <strong>Violate Laws or Rights:</strong> You will
                            not use the Service for any unlawful purpose or in
                            violation of any applicable laws or regulations.
                            This includes not infringing any intellectual
                            property or privacy rights of others, and not
                            posting or transmitting content that is illegal,
                            defamatory, harassing, obscene, or otherwise
                            objectionable.
                        </li>
                        <li>
                            <strong>Abuse or Harm the Service:</strong> You will
                            not use the Service in a manner that could damage,
                            disable, or impair our systems or networks. For
                            example, you must not introduce viruses, worms, or
                            any other malicious code, and you will not engage in
                            volume-based attacks, denial-of-service attacks, or
                            any activity that interferes with or disrupts the
                            integrity or performance of the Service or other
                            users' use of the Service.
                        </li>
                        <li>
                            <strong>Circumvent or Misuse the AI Models:</strong>{' '}
                            You will not attempt to bypass any security
                            measures, content filters, or usage limits we have
                            placed on the AI models or the platform.
                            Additionally, you agree not to{' '}
                            <LegalTerm
                                term="misuse the AI outputs"
                                definition="Using AI-generated content for harmful, deceptive, or malicious purposes, such as creating misinformation or content that violates our policies."
                            />{' '}
                            for harmful activities (such as generating spam,
                            disinformation, or any content that violates this
                            Acceptable Use Policy).
                        </li>
                        <li>
                            <strong>Reverse Engineer or Copy:</strong> You will
                            not reverse engineer, decompile, disassemble, or
                            otherwise attempt to{' '}
                            <LegalTerm
                                term="extract the source code or underlying models"
                                definition="Attempting to access, reproduce, or derive the proprietary algorithms, code, or machine learning models that power our Service."
                            />{' '}
                            of any part of the Service. Similarly, you must not
                            copy, modify, or create derivative works based on
                            our software, algorithms, or content provided by the
                            Service, except as explicitly allowed by us.
                        </li>
                        <li>
                            <strong>
                                Unauthorized Commercial Use or Resale:
                            </strong>{' '}
                            You will not{' '}
                            <LegalTerm
                                term="resell, rent, or sublicense"
                                definition="Providing access to the Service to third parties, either for payment or for free, without our explicit permission."
                            />{' '}
                            the Service to any third party without our
                            permission. Also, you must not use the Service to
                            develop or enhance a competing product or service,
                            nor harvest or scrape information from the platform
                            for any unauthorized purpose.
                        </li>
                    </ul>
                    <p className="mt-4 dark:text-gray-200">
                        Violation of this Acceptable Use Policy may result in
                        suspension or termination of your access (see{' '}
                        <strong>Termination</strong> section below) and may also
                        expose you to legal liabilities. We reserve the right to
                        investigate any suspected breach and to report any
                        unlawful activity to law enforcement authorities as
                        appropriate.
                    </p>
                </Section>

                <Section id="subscription-terms" title="Subscription Terms">
                    <p className="mb-4 dark:text-gray-200">
                        Some of ScaleStartup.ai's services or features may be
                        offered on a{' '}
                        <LegalTerm
                            term="subscription basis"
                            definition="A recurring payment model where you pay at regular intervals (e.g., monthly or annually) for continued access to the Service."
                        />
                        . By subscribing to our Service, you agree to the
                        following terms regarding free trials, billing,
                        renewals, and cancellation:
                    </p>
                    <ul className="list-disc space-y-4 pl-6 dark:text-gray-200">
                        <li>
                            <strong>Free Trials:</strong> We may offer free
                            trial periods for new users. If a free trial is
                            available, its duration and any specific terms will
                            be indicated at sign-up.{' '}
                            <LegalTerm
                                term="Unless otherwise stated, once the free trial ends, you will be charged the applicable subscription fee"
                                definition="After your trial period expires, your payment method will be automatically charged for the subscription plan you selected, unless you cancel before the trial ends."
                            />{' '}
                            for continued use of the Service, using the payment
                            method you provided, unless you cancel before the
                            trial ends. We reserve the right to modify or end
                            free trial offers at any time.
                        </li>
                        <li>
                            <strong>Fees and Payment:</strong> You agree to pay
                            all{' '}
                            <LegalTerm
                                term="subscription fees and charges"
                                definition="The costs associated with your selected subscription plan, including any applicable taxes or additional service fees."
                            />{' '}
                            associated with your chosen plan, as described at
                            the time of purchase or renewal. Fees are typically
                            charged in advance (e.g., at the start of each
                            billing cycle). You must provide valid payment
                            information and{' '}
                            <LegalTerm
                                term="authorize us to charge"
                                definition="Give permission for ScaleStartup.ai to bill your payment method for the subscription amount on a recurring basis."
                            />{' '}
                            your provided payment method for the recurring
                            subscription fees, including any applicable taxes.
                            If your payment method fails or your account is past
                            due, we may suspend or restrict your Service until
                            payment is successfully processed. You are
                            responsible for any charges or fees incurred due to
                            the use of the Service (including, for example,
                            currency exchange fees or bank charges if
                            applicable).
                        </li>
                        <li>
                            <strong>Auto-Renewals:</strong>{' '}
                            <LegalTerm
                                term="Subscriptions will automatically renew"
                                definition="Your subscription will continue and your payment method will be charged at the start of each new billing period without requiring you to take any action."
                            />{' '}
                            at the end of each billing period (e.g., monthly or
                            annually) by charging the then-current subscription
                            fee to your payment method on file. We will inform
                            you of the renewal in advance if required by law or
                            applicable regulation. If you do not want to renew,
                            you must cancel the subscription before the next
                            billing date as described below.
                        </li>
                        <li>
                            <strong>Cancellation:</strong> You may cancel your
                            subscription at any time. Cancellations can
                            typically be made through your account settings on
                            our platform or by contacting our support team. If
                            you cancel, your subscription will remain active
                            until the{' '}
                            <LegalTerm
                                term="end of the current billing period"
                                definition="The last day of the subscription term you've already paid for (e.g., the end of the month for monthly subscriptions)."
                            />
                            , and you will not be charged for the next period.{' '}
                            <LegalTerm
                                term="No refunds are provided for partial or unused subscription periods"
                                definition="If you cancel mid-billing cycle, you won't receive money back for the remaining time in your current billing period."
                            />{' '}
                            after a billing cycle has started, except where
                            required by law or explicitly stated by us. For
                            example, if you cancel in the middle of a month for
                            a monthly plan, you will retain access until the end
                            of that month, but you will not receive a refund for
                            the remaining days of the cycle.
                        </li>
                        <li>
                            <strong>Plan Changes and Pricing:</strong> We
                            reserve the right to{' '}
                            <LegalTerm
                                term="change our subscription plans or pricing"
                                definition="Modify the cost or features of our subscription offerings, which may affect your future payments."
                            />
                            . If we make changes that affect the cost of your
                            plan or the Service features, we will provide you
                            with advance notice (for example, by email or via
                            the Service).{' '}
                            <LegalTerm
                                term="If you do not agree to the new price or changes, you may cancel your subscription"
                                definition="You have the option to end your subscription before the new terms take effect if you don't want to accept the changes."
                            />{' '}
                            before the changes take effect. Continuing to use
                            the Service after the effective date of a pricing
                            change constitutes your acceptance of the new fees.
                        </li>
                        <li>
                            <strong>Refunds:</strong> Except as expressly
                            provided in these Terms or required by law,{' '}
                            <LegalTerm
                                term="all payments are non-refundable"
                                definition="Once you've been charged for a subscription period, we generally don't return those funds even if you stop using the Service."
                            />
                            . If you believe you deserve a refund due to an
                            error or issue with the Service, please contact us,
                            and we will review such requests on a case-by-case
                            basis. However, initiating a chargeback or dispute
                            with your payment provider without first contacting
                            us may be considered a violation of these Terms.
                        </li>
                    </ul>
                </Section>

                <Section
                    id="intellectual-property"
                    title="Intellectual Property Rights"
                >
                    <p className="mb-4 dark:text-gray-200">
                        All intellectual property rights in and to the Service
                        and its content are owned by ScaleStartup.ai or our
                        licensors. This section explains how those rights are
                        handled and how we treat any content or data{' '}
                        <strong>you</strong> provide:
                    </p>
                    <ul className="list-disc space-y-4 pl-6 dark:text-gray-200">
                        <li>
                            <strong>Our Platform and Content:</strong> The
                            Service (including all software, algorithms, AI
                            models, code, databases, user interfaces, designs,
                            text, graphics, logos, trademarks, and other content
                            provided by us) is{' '}
                            <LegalTerm
                                term="protected by intellectual property laws"
                                definition="Covered by copyright, trademark, patent, trade secret, and other intellectual property rights that legally prevent unauthorized use or copying."
                            />
                            . ScaleStartup.ai and its licensors retain all
                            rights, title, and interest in this content. We only
                            grant you a limited right to <strong>use</strong>{' '}
                            the Service and its content for its intended purpose
                            under these Terms. Except for the limited use rights
                            expressly granted here, we do <strong>not</strong>{' '}
                            grant you any license or ownership in our
                            intellectual property. You may not copy, distribute,
                            modify, publicly display, or create derivative works
                            of our content or software unless we give you
                            explicit permission. Our company name, logo, and any
                            product or service names or slogans are our{' '}
                            <LegalTerm
                                term="trademarks"
                                definition="Words, symbols, or designs that identify and distinguish our brand, products, or services from others."
                            />
                            ; you may not use them without our prior written
                            consent.
                        </li>
                        <li>
                            <strong>Your Data and Content:</strong>{' '}
                            <LegalTerm
                                term="You retain ownership"
                                definition="You continue to own and control the rights to any content you create or upload to our Service."
                            />{' '}
                            of any data, information, or content that you
                            upload, submit, or otherwise provide to our Service
                            ("
                            <strong>User Content</strong>"). We do not claim
                            ownership of your User Content. However, by using
                            the Service and providing User Content, you grant us
                            a{' '}
                            <LegalTerm
                                term="worldwide, royalty-free, sublicensable license"
                                definition="Permission for us to use your content globally, without paying you, and with the ability to extend this permission to our service providers as needed."
                            />{' '}
                            to use, host, store, reproduce, process, transmit,
                            and display your content{' '}
                            <LegalTerm
                                term="solely for the purpose of operating and improving the Service"
                                definition="We will only use your content to provide and enhance our services, not for other unrelated purposes."
                            />
                            . This license enables us, for example, to feed your
                            data into our AI tools to generate results for you,
                            to back up your data, or to analyze usage patterns
                            to improve performance. We will handle your User
                            Content and data in accordance with our Privacy
                            Policy and applicable data protection laws. You
                            represent and warrant that you have the{' '}
                            <LegalTerm
                                term="necessary rights to provide"
                                definition="You legally own or have permission to use and share any content you upload to our Service."
                            />{' '}
                            any User Content to the Service and that doing so
                            (and our use of it for providing the Service) does
                            not violate any law or infringe anyone's rights.
                        </li>
                        <li>
                            <strong>AI-Generated Output:</strong> Content or
                            results generated by our AI tools based on your
                            input (the "<strong>Output</strong>") is provided to
                            you as part of the Service.{' '}
                            <LegalTerm
                                term="As between you and us, you may use, edit, and distribute the Output for any lawful purposes"
                                definition="You can utilize the AI-generated content we provide to you in various ways, as long as those uses comply with laws and these Terms."
                            />
                            , subject to these Terms and any usage guidelines we
                            provide. However, you acknowledge that the Output is
                            generated by an algorithm based on your inputs and
                            our models, and we do <strong>not guarantee</strong>{' '}
                            that the Output will be error-free or free from
                            third-party rights. It is your responsibility to
                            review and use the Output in compliance with all
                            applicable laws and regulations. We retain all
                            rights to the underlying AI models and algorithms
                            that produce the Output.
                        </li>
                        <li>
                            <strong>Feedback:</strong> We welcome feedback,
                            suggestions, or ideas about the Service ("
                            <strong>Feedback</strong>"). If you choose to
                            provide Feedback, you agree that we are free to use
                            it without restriction or compensation to you. You
                            hereby grant us a perpetual, irrevocable, worldwide
                            license to use and incorporate any Feedback you
                            provide into our products or services. This helps us
                            improve our platform for all users. (Please do not
                            submit Feedback that you consider confidential or
                            proprietary, as we may already be working on similar
                            ideas.)
                        </li>
                    </ul>
                </Section>

                <Section id="privacy" title="Privacy">
                    <p className="dark:text-gray-200">
                        Your use of the Service is also subject to our{' '}
                        <strong>Privacy Policy</strong>, which explains how we
                        collect, use, store, and protect your personal data and
                        User Content. We encourage you to read the Privacy
                        Policy to understand our practices. By using the
                        Service, you{' '}
                        <LegalTerm
                            term="consent to the collection and use of information"
                            definition="You agree to allow us to gather and utilize your data as described in our Privacy Policy."
                        />{' '}
                        as described in the Privacy Policy. Remember that any
                        data or content you input into the Service may be
                        processed by our AI systems; we strive to maintain
                        appropriate security and confidentiality of your data.
                        If we process personal data on your behalf as part of
                        the Service, we will do so in compliance with applicable
                        data protection laws.
                    </p>
                </Section>

                <Section
                    id="service-modifications"
                    title="Service Modifications and Availability"
                >
                    <p className="mb-4 dark:text-gray-200">
                        We are continually improving and evolving our Service.{' '}
                        <LegalTerm
                            term="ScaleStartup.ai reserves the right to modify, suspend, or discontinue"
                            definition="We may change, temporarily pause, or permanently stop providing any aspect of our Service at our discretion."
                        />{' '}
                        any part of the Service (including any specific feature)
                        at any time. We may add or remove features, impose new
                        limits, or restrict access to parts or all of the
                        Service in our discretion. Whenever feasible, we will
                        try to inform you of any{' '}
                        <LegalTerm
                            term="major changes or discontinuation"
                            definition="Significant alterations to the Service or complete removal of features that could substantially impact your use of the platform."
                        />{' '}
                        that could significantly affect your use of the Service.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        While we strive to maintain a{' '}
                        <LegalTerm
                            term="reliable and accessible platform"
                            definition="A service that functions properly and is available when you need it."
                        />
                        , we do not guarantee that the Service will be{' '}
                        <LegalTerm
                            term="100% available or error-free"
                            definition="Completely functional without any downtime, technical issues, or bugs at all times."
                        />{' '}
                        at all times. You acknowledge that downtime, delays, or
                        errors may occur for maintenance, updates, or for
                        reasons beyond our control. Any new updates or features
                        that modify the current Service are subject to these
                        Terms. We are{' '}
                        <LegalTerm
                            term="not liable for any modification, suspension, or discontinuation"
                            definition="We cannot be held legally responsible for any changes to or interruptions in our Service."
                        />{' '}
                        of the Service, but if we discontinue the Service
                        entirely, we will endeavor to allow you to export your
                        data and provide notice where possible.
                    </p>
                </Section>

                <Section id="termination" title="Termination">
                    <p className="mb-4 dark:text-gray-200">
                        <strong>By You:</strong> You are free to stop using
                        ScaleStartup.ai at any time. You may terminate your
                        account by following the instructions on the platform
                        (if available) or by contacting us to request account
                        deletion. Terminating your account or subscription will
                        stop future use and charges, but you will not receive
                        any refund for services already paid (see{' '}
                        <strong>Subscription Terms – Cancellation</strong>{' '}
                        above). It is your responsibility to{' '}
                        <LegalTerm
                            term="retrieve any data"
                            definition="Download or export any information or content you've stored on our platform that you wish to keep."
                        />{' '}
                        or content you need from the Service before terminating
                        your account, as you may lose access to it afterward.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        <strong>By Us:</strong> We reserve the right to{' '}
                        <LegalTerm
                            term="suspend or terminate your access"
                            definition="Temporarily or permanently prevent you from using our Service."
                        />{' '}
                        to the Service (in whole or in part) under the following
                        circumstances: (a) if you violate any of these Terms or
                        our policies (including the Acceptable Use Policy); (b)
                        if your use of the Service poses a security risk or
                        could adversely impact the Service or others; (c) if
                        required by law enforcement or government request; (d)
                        if you fail to pay any fees due for a paid subscription;
                        or (e) for any other reason in our sole discretion (for
                        example, if we discontinue the Service). In most cases
                        of less serious violations, we will attempt to provide
                        you with notice and an opportunity to resolve the issue
                        prior to termination, but we are not required to do so.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        If your account is terminated or suspended, whether by
                        you or us, your{' '}
                        <LegalTerm
                            term="right to access the Service will immediately cease"
                            definition="You will no longer be able to use the Service or its features once your account is terminated."
                        />
                        . You must cease all use of the Service, and we may
                        delete or disable access to any information or data you
                        had on the Service (except we may retain copies as
                        required for legal compliance or backup purposes). Any{' '}
                        <LegalTerm
                            term="outstanding fees or charges"
                            definition="Any unpaid amounts that you owe for the Service at the time your account is terminated."
                        />{' '}
                        owed to ScaleStartup.ai at the time of termination
                        remain payable and will be charged (or invoiced) to you.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        Certain provisions of these Terms{' '}
                        <LegalTerm
                            term="survive termination"
                            definition="Continue to be legally binding even after you stop using the Service or your account is closed."
                        />{' '}
                        of your account or these Terms, meaning they remain in
                        effect even after termination. These include, for
                        example, provisions on Intellectual Property Rights,
                        Disclaimers, Limitation of Liability, Indemnification,
                        Governing Law, and any other clauses that by their
                        nature should survive.
                    </p>
                </Section>

                <Section id="disclaimers" title="Disclaimers">
                    <p className="mb-4 dark:text-gray-200">
                        <strong>Use at Your Own Risk:</strong> The Service is
                        provided on an "<strong>as is</strong>" and "
                        <strong>as available</strong>" basis.{' '}
                        <LegalTerm
                            term="To the fullest extent permitted by law"
                            definition="To the maximum degree allowed by applicable legal regulations in your jurisdiction."
                        />
                        , ScaleStartup.ai disclaims all warranties and
                        representations of any kind, whether express, implied,
                        or statutory, regarding the Service. This includes, but
                        is not limited to, any implied warranties of{' '}
                        <LegalTerm
                            term="merchantability"
                            definition="The implied guarantee that a product is reasonably fit for its ordinary purpose."
                        />
                        ,{' '}
                        <LegalTerm
                            term="fitness for a particular purpose"
                            definition="The implied guarantee that a product is suitable for a specific use that you intend."
                        />
                        ,{' '}
                        <LegalTerm
                            term="title"
                            definition="The guarantee that the seller has proper ownership rights to the product."
                        />
                        ,{' '}
                        <LegalTerm
                            term="non-infringement"
                            definition="The guarantee that the product doesn't violate any third-party intellectual property rights."
                        />
                        , and any warranties that may arise from course of
                        dealing or usage of trade. We make{' '}
                        <strong>no guarantee</strong> that the Service will meet
                        your requirements or expectations, or that it will
                        achieve any particular results.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        <strong>No Guarantee of Results:</strong> You
                        acknowledge that using an AI-powered service involves
                        inherent uncertainty.{' '}
                        <LegalTerm
                            term="We do not guarantee any specific performance, accuracy, or outcomes"
                            definition="We cannot promise that our AI will produce perfect results or achieve exactly what you're hoping for in every situation."
                        />{' '}
                        from the use of our tools. Any results, suggestions, or
                        outputs generated by the AI are provided for your
                        consideration{' '}
                        <LegalTerm
                            term="without any warranty of correctness or reliability"
                            definition="With no promise that the information is accurate, complete, or suitable for your specific needs."
                        />
                        . You are solely responsible for how you interpret and
                        use the results.{' '}
                        <LegalTerm
                            term="No information or advice"
                            definition="Any guidance, recommendations, or explanations provided by our team or through our Service."
                        />{' '}
                        (whether oral or written) obtained by you from
                        ScaleStartup.ai or through the Service shall create any
                        warranty not expressly stated in these Terms.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        <strong>Service Quality and Uptime:</strong> While we
                        strive to maintain high quality and uptime,{' '}
                        <LegalTerm
                            term="we do not warrant that the Service will be uninterrupted, timely, secure, or error-free"
                            definition="We cannot guarantee that our Service will always work perfectly without any technical issues, delays, or security vulnerabilities."
                        />
                        . We do not warrant that any data or content (including
                        your User Content or AI-generated Output) will be secure
                        or not otherwise lost or altered. You understand that{' '}
                        <LegalTerm
                            term="data transmissions over the internet"
                            definition="The transfer of information between computers and servers across the global network."
                        />{' '}
                        are never completely private or secure, and you use the
                        Service at your own discretion and risk.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        <strong>
                            No Responsibility for Third-Party Content:
                        </strong>{' '}
                        The Service may use or provide access to third-party
                        data, APIs, or services (for example, integrating with
                        other software or using third-party AI components).{' '}
                        <LegalTerm
                            term="We make no warranties or endorsements"
                            definition="We do not guarantee or officially approve any external content, services, or products that may be accessed through our Service."
                        />{' '}
                        regarding any third-party content or services, and we
                        are not liable for anything provided by third parties.
                        Your use of any third-party materials is at your own
                        risk and may be subject to additional terms from those
                        third parties.
                    </p>
                    <p className="mt-4 dark:text-gray-200">
                        Some jurisdictions do not allow the exclusion of certain
                        warranties, so some of the above disclaimers may not
                        apply to you. In such cases, any implied warranties are
                        limited to the{' '}
                        <LegalTerm
                            term="minimum extent permitted by applicable law"
                            definition="The shortest duration or narrowest scope that the law in your location allows for such warranties."
                        />
                        .
                    </p>
                </Section>

                <Section
                    id="limitation-liability"
                    title="Limitation of Liability"
                >
                    <p className="mb-4 dark:text-gray-200">
                        <LegalTerm
                            term="To the maximum extent permitted by law"
                            definition="As much as legally possible under the laws that apply to you."
                        />
                        , in no event will ScaleStartup.ai, its parent company,
                        affiliates, officers, directors, employees, agents,
                        partners, or licensors (collectively, "
                        <strong>Affiliates</strong>") be liable for any{' '}
                        <LegalTerm
                            term="indirect, incidental, special, consequential, or punitive damages"
                            definition="Types of damages that are not direct results of an action but follow as a consequence, such as lost profits or reputation damage."
                        />{' '}
                        whatsoever. This includes, without limitation, damages
                        for lost profits, lost revenue, lost business
                        opportunities, loss of data, business interruption, or
                        any other intangible losses arising out of or related to
                        your use of (or inability to use) the Service,
                        regardless of the theory of liability (contract, tort,
                        negligence, strict liability, or otherwise), and even if
                        we have been advised of the possibility of such damages.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        In addition, our total{' '}
                        <LegalTerm
                            term="cumulative liability"
                            definition="The combined total amount we could be responsible for across all claims."
                        />{' '}
                        to you for any claims arising out of or relating to
                        these Terms or the Service{' '}
                        <LegalTerm
                            term="will not exceed the amount"
                            definition="The maximum financial responsibility we accept."
                        />{' '}
                        that you have paid to us for the Service in the{' '}
                        <LegalTerm
                            term="twelve (12) months"
                            definition="The one-year period immediately before the event that led to the claim."
                        />{' '}
                        immediately preceding the event that gave rise to the
                        claim. If you have not paid any amount to us in that
                        time (for example, if you are using a free service), our
                        liability shall be limited to{' '}
                        <LegalTerm
                            term="USD $100"
                            definition="One hundred United States dollars, which is the maximum amount we would be liable for if you haven't paid for our Service."
                        />{' '}
                        (one hundred U.S. dollars) or the minimum amount
                        permitted by law, whichever is greater.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        These limitations and exclusions of liability apply
                        whether the claimed liability is based on breach of
                        contract, tort (including negligence), strict liability,
                        or any other legal theory.{' '}
                        <LegalTerm
                            term="Some jurisdictions do not allow the exclusion or limitation of certain damages"
                            definition="Some locations have laws that don't permit companies to limit their liability for certain types of damages."
                        />
                        , so some of the above limitations may not apply to you.
                        In such cases, our liability will be limited to the{' '}
                        <LegalTerm
                            term="greatest extent permitted by law"
                            definition="The maximum amount allowed by the laws in your location."
                        />
                        .
                    </p>
                </Section>

                <Section id="indemnification" title="Indemnification">
                    <p className="mb-4 dark:text-gray-200">
                        You agree to{' '}
                        <LegalTerm
                            term="indemnify, defend, and hold harmless"
                            definition="Protect from legal and financial consequences by covering costs and providing legal defense."
                        />{' '}
                        ScaleStartup.ai and its Affiliates from and against any
                        and all claims, liabilities, damages, losses, and
                        expenses (including reasonable attorneys' fees) that
                        arise from or relate to{' '}
                        <LegalTerm
                            term="your use of the Service"
                            definition="How you interact with and utilize our platform and tools."
                        />
                        ,{' '}
                        <LegalTerm
                            term="your violation of these Terms"
                            definition="Any actions you take that don't comply with this agreement."
                        />
                        , or{' '}
                        <LegalTerm
                            term="your infringement of any intellectual property or other rights of any third party"
                            definition="Using content or materials that belong to others without proper permission or rights."
                        />
                        . This means that if a third party sues or demands
                        compensation from ScaleStartup.ai due to something you
                        did (for example, your misuse of the Service, your
                        violation of law, or content you provided that infringes
                        someone's rights), you will cover all costs and
                        liabilities incurred by us as a result.
                    </p>
                    <p className="mt-4 dark:text-gray-200">
                        We reserve the right to handle our legal defense as we
                        see fit, including choosing our counsel, in any case
                        subject to indemnification by you. You agree to
                        cooperate with us in defending such claims and not to
                        settle any matter without our prior written consent.
                        This indemnification obligation will survive the
                        termination of your account or these Terms.
                    </p>
                </Section>

                <Section
                    id="governing-law"
                    title="Governing Law and Jurisdiction"
                >
                    <p className="mb-4 dark:text-gray-200">
                        These Terms and any dispute arising out of or relating
                        to these Terms or the Service will be{' '}
                        <LegalTerm
                            term="governed by the laws of the State of Michigan, USA"
                            definition="The legal rules and regulations of Michigan will apply to this agreement and any disputes related to it."
                        />
                        ,{' '}
                        <LegalTerm
                            term="without regard to its conflict of law principles"
                            definition="The laws of Michigan will apply even if other jurisdictions might have different rules about which laws should govern."
                        />
                        . (If you reside outside of the United States, you
                        understand and agree that U.S. laws will apply to your
                        use of the Service.)
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        You agree that any disputes or claims arising out of or
                        in connection with these Terms or the Service shall be{' '}
                        <LegalTerm
                            term="exclusively brought in the state or federal courts"
                            definition="Legal proceedings must be filed only in these specific courts, not in other jurisdictions."
                        />{' '}
                        located in the State of Michigan, USA,{' '}
                        <LegalTerm
                            term="and you consent to the personal jurisdiction"
                            definition="You agree that these courts have the legal authority to make decisions that affect you personally."
                        />{' '}
                        of those courts. We and you waive any objection to venue
                        in those courts based on inconvenience or any other
                        reason. Notwithstanding this, we reserve the right to
                        seek injunctive or equitable relief in any jurisdiction
                        if necessary to protect our interests.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        If you are a consumer residing in a jurisdiction with
                        mandatory consumer protection laws, nothing in this{' '}
                        <strong>Governing Law and Jurisdiction</strong> section
                        affects your rights under those laws to potentially have
                        claims heard in your local courts under local law.
                    </p>
                </Section>

                <Section id="changes-terms" title="Changes to These Terms">
                    <p className="mb-4 dark:text-gray-200">
                        ScaleStartup.ai may{' '}
                        <LegalTerm
                            term="update or modify these Terms"
                            definition="Change the rules and conditions that govern your use of our Service."
                        />{' '}
                        from time to time. If we make material changes, we will
                        provide reasonable notice to you, such as by posting the
                        updated Terms on our website and updating the "Last
                        Updated" date above, or by sending you an email
                        notification. It is your responsibility to review these
                        Terms periodically for any changes.
                    </p>
                    <p className="mb-4 dark:text-gray-200">
                        <LegalTerm
                            term="By continuing to use the Service after any revised Terms become effective, you agree to be bound by the updated Terms."
                            definition="If you keep using our Service after we change these Terms, it means you accept and agree to the new version."
                        />{' '}
                        If you do not agree to a change or update, you must stop
                        using the Service and (if applicable) cancel any
                        subscription before the updated Terms take effect. We
                        encourage you to print or save a local copy of these
                        Terms for your records.
                    </p>
                </Section>

                <Section id="contact-information" title="Contact Information">
                    <p className="mb-4 dark:text-gray-200">
                        If you have any questions, concerns, or feedback
                        regarding these Terms or the Service, please feel free
                        to contact us:
                    </p>
                    <ul className="list-none space-y-2 dark:text-gray-200">
                        <li>
                            <strong>Email:</strong> hello@scalestartup.ai
                        </li>
                        <li>
                            <strong>Mailing Address:</strong> ScaleStartup.ai,
                            30500 Van Dyke Ave, Suite 201, Warren, MI 48093
                        </li>
                    </ul>
                    <p className="mt-4 dark:text-gray-200">
                        We are committed to addressing your inquiries and
                        resolving any issues in a timely manner. For any
                        disputes or issues, contacting us via the above email is
                        often the quickest way to seek resolution.
                    </p>
                </Section>

                <div className="mt-12 border-t pt-8 text-center">
                    <p className="font-medium dark:text-gray-200">
                        <strong>
                            By using ScaleStartup.ai's Service, you acknowledge
                            that you have read, understood, and agree to these
                            Terms and Conditions.
                        </strong>{' '}
                        Thank you for using ScaleStartup.ai and trusting us with
                        your AI-powered tools and services needs. We value your
                        business and aim to provide you with an excellent
                        experience under these guidelines.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
