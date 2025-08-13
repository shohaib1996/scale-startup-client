'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import PortfolioBox from './PortfolioBox';
import projects from '@/api/data/projects.json';
import Bird from '../SVG/Bird';
import Hope from '../SVG/Hope';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
    title: string;
    category: string;
    image: string;
    type: string;
}

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    const filteredProjects: Project[] =
        activeTab === 'all'
            ? projects
            : projects.filter((project: Project) => project.type === activeTab);

    return (
        <section className="overflow-hidden">
            <div className="myContainer relative py-6 lg:py-16">
                <div className="absolute right-10 top-80 hidden 2xl:-right-32 2xl:flex">
                    <Bird />
                </div>

                <div className="absolute -left-40 top-1/2">
                    <Hope />
                </div>

                <h3 className="pt-5 text-2xl font-semibold text-headText lg:text-4xl">
                    Discover Our Portfolio
                </h3>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <div className="flex items-center justify-between">
                        <TabsList
                            style={{
                                display: 'flex',
                                overflowX: 'auto',
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch',
                            }}
                            className="mb-6 flex shadow-md"
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
                    </div>

                    <TabsContent value={activeTab}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {filteredProjects.map((project, index) => (
                                        <PortfolioBox
                                            key={index}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default Portfolio;
