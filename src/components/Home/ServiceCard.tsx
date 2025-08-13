import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    icon: string;
    title: string;
    para: string;
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    para,
    image,
}) => {
    return (
        <div className="flex flex-col space-y-4 rounded-3xl border border-white border-opacity-70 bg-white bg-opacity-10 p-6 text-start text-white sm:p-8">
            {/* Dynamic Icon */}
            <Image
                src={icon}
                alt={title}
                width={61}
                height={61}
                className="h-[41px] w-[41px] object-cover lg:h-[71px] lg:w-[71px]"
            />

            {/* Dynamic Title */}
            <h3 className="subHeading !text-white">{title}</h3>

            {/* Dynamic Description */}
            <p className="subPara !text-white">{para}</p>

            {/* Dynamic Image */}
            <div>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={177}
                    className="h-[160px] w-full rounded-3xl object-cover sm:h-[192px]"
                />
            </div>
        </div>
    );
};

export default ServiceCard;
