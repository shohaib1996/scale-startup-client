import React from 'react';
import Image from 'next/image';

interface Project {
    image: string;
    title: string;
    category: string;
}

interface PortfolioBoxProps {
    project: Project;
}

const PortfolioBox: React.FC<PortfolioBoxProps> = ({ project }) => {
    return (
        <div>
            {/* Image Section */}
            <div className="15 rounded-lg bg-tertiary/15 p-5">
                <div className="relative h-0 w-full pb-[90%]">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-lg object-contain"
                    />
                </div>
            </div>

            {/* Text Section */}
            <div>
                <h3 className="pt-4 text-2xl font-semibold text-headText">
                    {project.title}
                </h3>
                <p className="font-semibold text-headText opacity-70">
                    {project.category}
                </p>
            </div>
        </div>
    );
};

export default PortfolioBox;
