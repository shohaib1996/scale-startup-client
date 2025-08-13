'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PortfolioBox from '@/components/Portfolio/PortfolioBox';
import projects from '@/api/data/projects.json';
import Bird from '../SVG/Bird';
import { Button } from '../ui/button';
import ArrowRight from '../SVG/ArrowRight';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    category: string;
    image: string;
    type: string;
}

const PortfolioHome = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    const filteredProjects: Project[] =
        activeTab === 'all'
            ? projects
            : projects.filter((project: Project) => project.type === activeTab);

    return (
        <section className="relative overflow-hidden bg-backSecondary py-6 lg:py-14">
            <div className="absolute right-5 top-80 hidden overflow-hidden 2xl:right-10 2xl:flex">
                <Bird />
            </div>

            <div className="myContainer relative">
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-between">
                        <p className="sectionName">Our Project</p>

                        <Link href="/portfolio" className="block lg:hidden">
                            <Button variant="ts4uSecondary" className="">
                                <ArrowRight /> See More
                            </Button>
                        </Link>
                    </div>

                    <h3 className="heading sm:pb-2">Discover Our Portfolio</h3>
                </div>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <div className="flex items-center justify-between">
                        <TabsList
                            style={{
                                display: 'flex',
                                overflowX: 'auto',
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch',
                            }}
                            className="mb-6 shadow-md"
                        >
                            <TabsTrigger
                                value="all"
                                className="whitespace-nowrap px-8 py-2"
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value="web"
                                className="whitespace-nowrap px-4 py-2"
                            >
                                Web App Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="mobile"
                                className="whitespace-nowrap px-4 py-2"
                            >
                                Mobile App Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="desktop"
                                className="whitespace-nowrap px-4 py-2"
                            >
                                Desktop Development
                            </TabsTrigger>
                            <TabsTrigger
                                value="seo"
                                className="whitespace-nowrap px-4 py-2"
                            >
                                SEO
                            </TabsTrigger>
                            <TabsTrigger
                                value="cloudops"
                                className="whitespace-nowrap px-4 py-2"
                            >
                                CloudOps Consultancy
                            </TabsTrigger>
                        </TabsList>

                        <Link href="/portfolio" className="hidden lg:block">
                            <Button
                                variant="ts4uSecondary"
                                className="mb-5 ml-5"
                            >
                                <ArrowRight /> See More
                            </Button>
                        </Link>
                    </div>

                    <TabsContent value={activeTab} className="hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {filteredProjects
                                        .slice(0, 8)
                                        .map((project, index) => (
                                            <PortfolioBox
                                                key={index}
                                                project={project}
                                            />
                                        ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>

                    {/* For screens smaller than md, display slider */}
                    <div className="block lg:hidden">
                        <div className="flex w-full items-center justify-center">
                            <Carousel className="w-full max-w-sm">
                                <CarouselContent>
                                    {filteredProjects
                                        .slice(0, 8)
                                        .map((project, index) => (
                                            <CarouselItem key={index}>
                                                <PortfolioBox
                                                    key={index}
                                                    project={project}
                                                />
                                            </CarouselItem>
                                        ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default PortfolioHome;
