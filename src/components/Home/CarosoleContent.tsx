import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const CarosoleContent = () => {
    const videos = [
        'https://player.vimeo.com/video/1069755594?h=c674655111',
        'https://player.vimeo.com/video/1069755416?h=634824fa38',
        'https://player.vimeo.com/video/1069755686?h=96ee81b8db',
    ];
    return (
        <div className="myContainer">
            <h2 className="heading mb-10 text-center">
                What Our Clients Have to Say
            </h2>
            <Carousel className="w-full bg-transparent">
                <CarouselContent>
                    {videos?.map((video, index) => (
                        <CarouselItem
                            key={index}
                            className="w-[300px] md:w-[400px] md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="h-full w-full overflow-hidden border-2">
                                <CardContent className="flex w-full items-center justify-center overflow-hidden px-0 py-0">
                                    <iframe
                                        src={video}
                                        className="aspect-[9/16] w-full rounded-md border-none"
                                    ></iframe>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CarosoleContent;
