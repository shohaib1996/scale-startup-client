import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel';

const WorkingProcess = () => {
    const datas = [
        {
            title: 'Phase 1: Profit Blueprint (48 Hours)',
            sub: 'We Reverse-Engineer Your $10M Future',
            info: [
                '✅ Steal 237 proven tactics from your niche’s top players',
                '✅ Pinpoint where 95% of startups bleed cash (and plug it)',
                '✅ Get a custom roadmap to crush CAC, LTV, and churn',
            ],
        },
        {
            title: 'Phase 2: Code Sprints, Not Marathons (7-14 Days)',
            sub: 'Your Branded Software, Built at Warp Speed',
            info: [
                '✅ Embed chatbots, analytics, or CRM in 72 hours',
                '✅ Serverless architecture scales to 10M users without DevOps nightmares',
                '✅ Watch your empire rise — no ‘black box’ development',
            ],
        },
        {
            title: 'Phase 3: Pipeline Preload (Day 15-21)',
            sub: 'We Code by Day, Hack Growth by Night',
            info: [
                '✅ Pre-qualified prospects in YOUR CRM before launch',
                '✅ Battle-tested flows that turn 25% of trials into paying users',
                '✅ Automated emails that get 63% opens (we’ll show you the receipts)',
            ],
        },
        {
            title: 'Phase 4: Hyper-Growth Launch (Day 22)',
            sub: 'Your ‘Category King’ Moment',
            info: [
                '✅ Real-time user analytics to exploit hidden demand',
                '✅ Our 20+ engineers on standby for scaling panics (fixes in <20 mins)',
                '✅ Track ‘escape velocity’ metrics investors salivate over',
            ],
        },
        {
            title: 'Phase 5: Profit Reinvestment (Day 30-90)',
            sub: 'Turn Revenue into Rocket Fuel',
            info: [
                '✅ Auto-pilot features that boost ARPU by 35%',
                '✅ Position for acquisition with our $100M+ startup playbook',
                '✅ Secure your first $1M payout while we handle scale',
            ],
        },
        {
            title: 'Phase 6: Legacy Mode (Ongoing)',
            sub: 'Become the Amazon of Your Niche',
            info: [
                '✅ Spot trends 6 months early — own them before competitors wake up',
                '✅ One-click localization for 50+ countries',
                '✅ Operate hands-off while we auto-pilot updates, security, and growth',
            ],
        },
    ];
    return (
        <div className="myContainer">
            <h2 className="heading mb-10 text-center">
                {' '}
                Our Work Process Framework
            </h2>
            <Carousel className="">
                <CarouselContent>
                    {datas.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/4"
                        >
                            <Card className="min-h-[300px] w-full">
                                <div className="space-y-3 p-3">
                                    <h1 className="text-center text-xl font-bold">
                                        {item?.title}
                                    </h1>
                                    <p className="text-[16px] font-semibold">
                                        {item?.sub}
                                    </p>
                                    <div className="space-y-3 text-sm">
                                        {item.info.map((_, i) => (
                                            <p key={i}>{_}</p>
                                        ))}
                                    </div>
                                </div>
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

export default WorkingProcess;
