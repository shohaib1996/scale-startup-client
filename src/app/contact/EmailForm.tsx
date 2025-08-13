'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CalendarIcon, Clock, Loader2 } from 'lucide-react';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { Calendar } from './calendar';
import { toast } from 'sonner';

const formSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    mobile: z.string().min(10, {
        message: 'Please enter a valid mobile number.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    message: z.string().optional(),
    meetingDateTime: z.date({
        required_error: 'Please select a date and time for the meeting.',
    }),
    employed: z.enum(['1-Yes', '2-No'], {
        required_error: 'Please select if you are currently employed.',
    }),
    jobSwitch: z.enum(['1-Yes', '2-No'], {
        required_error: 'Please select if you are looking for a job switch.',
    }),
});

const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '17:00', label: '5:00 PM' },
];

const EmailForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            mobile: '',
            email: '',
            message: '',
            employed: undefined,
            jobSwitch: undefined,
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            // Transform form data to API payload format
            const payload = {
                formSteps: [
                    {
                        label: 'Applicant Info',
                        icon: '',
                        id: 'eacc6581-ce9f-4e79-a75f-fb3e4d7f4c9d',
                        type: 'tab',
                        rows: [
                            {
                                label: 'Full Name',
                                icon: '',
                                id: '15ac53f7-89e9-40c6-b70f-d5fb3cf42a87',
                                type: 'row',
                                fields: [
                                    {
                                        label: 'Name',
                                        icon: 'FaTextHeight',
                                        id: '70cd9b86-ea25-4dca-a627-56b1ff727af3',
                                        type: 'shortText',
                                        description: '',
                                        isDefault: false,
                                        isRequired: true,
                                        options: [],
                                        children: [],
                                        _id: '67d30e9bb6137a55b2ba0994',
                                        value: values.name,
                                    },
                                    {
                                        label: 'Mobile',
                                        icon: 'FaSortNumericDownAlt',
                                        id: '51ce6340-adee-4421-ade2-1d35a9534af8',
                                        type: 'number',
                                        description: '',
                                        isDefault: false,
                                        isRequired: true,
                                        options: [],
                                        children: [],
                                        _id: '67d30e9bb6137a55b2ba0995',
                                        value: values.mobile,
                                    },
                                    {
                                        label: 'Email',
                                        icon: 'FaTextHeight',
                                        id: 'e05b3213-b8eb-464c-b5f4-2274d672f98a',
                                        type: 'shortText',
                                        description: '',
                                        isDefault: false,
                                        isRequired: true,
                                        options: [],
                                        children: [],
                                        _id: '67d30e9bb6137a55b2ba0996',
                                        value: values.email,
                                    },
                                    {
                                        label: 'Message',
                                        icon: 'FaAlignCenter',
                                        id: 'b8d27c15-0475-4df2-8274-954967afd591',
                                        type: 'paragraph',
                                        description: '',
                                        defaultValue:
                                            'Please write your message here',
                                        isDefault: false,
                                        isRequired: false,
                                        options: [],
                                        children: [],
                                        _id: '67e344b877cc157938676c74',
                                        value: values.message,
                                    },
                                    {
                                        label: 'What is the best time to set up a 15 min introductory meeting with you?',
                                        icon: 'FaCalendarAlt',
                                        id: 'f5116d25-e2c1-4434-b7bc-4d5a725018f6',
                                        type: 'date',
                                        description: '',
                                        isDefault: false,
                                        isRequired: true,
                                        options: [],
                                        children: [],
                                        _id: '67d31016b6137a55b2ba0f6d',
                                        value: values.meetingDateTime.toISOString(),
                                    },
                                    {
                                        label: 'Are you currently employed?',
                                        icon: 'FaRegDotCircle',
                                        id: '687654fe-4d51-468b-9528-d5ef2b85c5e2',
                                        type: 'radio',
                                        description: '',
                                        isDefault: false,
                                        isRequired: false,
                                        options: [
                                            {
                                                value: '1-Yes',
                                            },
                                            {
                                                value: '2-No',
                                            },
                                        ],
                                        children: [],
                                        _id: '67d30e9bb6137a55b2ba0998',
                                        value: values.employed,
                                    },
                                    {
                                        label: 'Are you looking for job switch?',
                                        icon: 'FaRegDotCircle',
                                        id: '63573ce1-0ecc-4e3e-b798-cc0186c25a17',
                                        type: 'radio',
                                        description: '',
                                        isDefault: false,
                                        isRequired: false,
                                        options: [
                                            {
                                                value: '1-Yes',
                                            },
                                            {
                                                value: '2-No',
                                            },
                                        ],
                                        children: [],
                                        _id: '67d30e9bb6137a55b2ba0999',
                                        value: values.jobSwitch,
                                    },
                                ],
                                _id: '67d30e9bb6137a55b2ba0993',
                            },
                        ],
                        _id: '67d30e9bb6137a55b2ba0992',
                    },
                ],
            };

            // Submit to API
            const response = await fetch(
                'https://api.bizcoms.ai/api/v1/crm/form/submit/cuCrcAiveW',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                },
            );
            console.log(response);
            if (!response.ok) {
                toast.error(`API error: ${response.status}`);
                throw new Error(`API error: ${response.status}`);
            } else {
                toast.success('Form submitted successfully!');
                form.reset();
            }

            // Store form data for display in success message

            // router.push('/submit');
        } catch (err) {
            console.error('Form submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="myContainer" id="contact">
            <Card className="mx-4 my-2 overflow-hidden rounded-lg shadow-md md:mx-0 md:my-10">
                <CardHeader className="px-6 py-5">
                    <CardTitle className="text-base font-bold md:text-lg lg:text-2xl">
                        Book a FREE Business Consultation
                    </CardTitle>
                    <CardDescription className="mt-1 text-xs sm:text-sm md:text-base">
                        Please fill out the form below to schedule a 15-minute
                        career auditing session
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-6 py-6">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-bold md:text-lg">
                                                Name{' '}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your name"
                                                    {...field}
                                                    className="rounded-md border-gray-300 p-6 text-headText focus:border-primary focus:ring-primary"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-destructive text-sm" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base font-bold md:text-lg">
                                                Mobile{' '}
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your mobile number"
                                                    {...field}
                                                    className="rounded-md border-gray-300 p-6 text-headText focus:border-primary focus:ring-primary"
                                                />
                                            </FormControl>
                                            <FormMessage className="text-destructive text-sm" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-bold md:text-lg">
                                            Email{' '}
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your email address"
                                                {...field}
                                                className="rounded-md border-gray-300 p-6 text-headText focus:border-primary focus:ring-primary"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-destructive text-sm" />
                                    </FormItem>
                                )}
                            />

                            {/* Message Field */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-base font-bold md:text-lg">
                                            Message
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your message here"
                                                {...field}
                                                className="min-h-32 rounded-md border-gray-300 p-4 text-headText focus:border-primary focus:ring-primary"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-destructive text-sm" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="meetingDateTime"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-base font-bold md:text-lg">
                                            What is the best time for a
                                            15-minute career auditing session?{' '}
                                            <span className="text-destructive">
                                                *
                                            </span>
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={'outline'}
                                                        className={cn(
                                                            'my-2 w-full rounded-md border-gray-300 py-4 text-left font-normal text-headText focus:border-primary focus:ring-primary',
                                                            !field.value &&
                                                                'text-muted-foreground',
                                                        )}
                                                    >
                                                        {field.value &&
                                                        dayjs(
                                                            field.value,
                                                        ).isValid() ? (
                                                            dayjs(
                                                                field.value,
                                                            ).format(
                                                                'MMMM D, YYYY [at] h:mm A',
                                                            )
                                                        ) : (
                                                            <span>
                                                                Select date and
                                                                time
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto rounded-md p-0 shadow-lg"
                                                align="start"
                                            >
                                                <div className="space-y-4 bg-backWhite">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={(date) => {
                                                            if (date) {
                                                                const hours =
                                                                    field.value
                                                                        ? dayjs(
                                                                              field.value,
                                                                          ).hour()
                                                                        : 9;
                                                                const minutes =
                                                                    field.value
                                                                        ? dayjs(
                                                                              field.value,
                                                                          ).minute()
                                                                        : 0;
                                                                const newDate =
                                                                    dayjs(date)
                                                                        .hour(
                                                                            hours,
                                                                        )
                                                                        .minute(
                                                                            minutes,
                                                                        )
                                                                        .toDate();
                                                                field.onChange(
                                                                    newDate,
                                                                );
                                                            }
                                                        }}
                                                        initialFocus
                                                        className="border-b text-headText"
                                                    />
                                                    <div className="flex flex-col space-y-2 bg-backWhite">
                                                        <div className="flex items-center">
                                                            <Clock className="ml-2 mr-2 h-4 w-4 text-primary" />
                                                            <span className="text-sm font-medium">
                                                                Time
                                                            </span>
                                                        </div>
                                                        <Select
                                                            onValueChange={(
                                                                time,
                                                            ) => {
                                                                if (
                                                                    field.value &&
                                                                    time
                                                                ) {
                                                                    const [
                                                                        hours,
                                                                        minutes,
                                                                    ] = time
                                                                        .split(
                                                                            ':',
                                                                        )
                                                                        .map(
                                                                            Number,
                                                                        );
                                                                    const newDate =
                                                                        dayjs(
                                                                            field.value,
                                                                        )
                                                                            .hour(
                                                                                hours,
                                                                            )
                                                                            .minute(
                                                                                minutes,
                                                                            )
                                                                            .toDate();
                                                                    field.onChange(
                                                                        newDate,
                                                                    );
                                                                } else if (
                                                                    time
                                                                ) {
                                                                    const today =
                                                                        dayjs();
                                                                    const [
                                                                        hours,
                                                                        minutes,
                                                                    ] = time
                                                                        .split(
                                                                            ':',
                                                                        )
                                                                        .map(
                                                                            Number,
                                                                        );
                                                                    const newDate =
                                                                        today
                                                                            .hour(
                                                                                hours,
                                                                            )
                                                                            .minute(
                                                                                minutes,
                                                                            )
                                                                            .toDate();
                                                                    field.onChange(
                                                                        newDate,
                                                                    );
                                                                }
                                                            }}
                                                            value={
                                                                field.value
                                                                    ? `${dayjs(
                                                                          field.value,
                                                                      )
                                                                          .hour()
                                                                          .toString()
                                                                          .padStart(
                                                                              2,
                                                                              '0',
                                                                          )}:${dayjs(
                                                                          field.value,
                                                                      )
                                                                          .minute()
                                                                          .toString()
                                                                          .padStart(
                                                                              2,
                                                                              '0',
                                                                          )}`
                                                                    : undefined
                                                            }
                                                        >
                                                            <SelectTrigger className="border-gray-300 focus:border-primary focus:ring-primary">
                                                                <SelectValue placeholder="Select time" />
                                                            </SelectTrigger>
                                                            <SelectContent className="rounded-md bg-backWhite">
                                                                {timeSlots.map(
                                                                    (slot) => (
                                                                        <SelectItem
                                                                            className="text-headText"
                                                                            key={
                                                                                slot.value
                                                                            }
                                                                            value={
                                                                                slot.value
                                                                            }
                                                                        >
                                                                            {
                                                                                slot.label
                                                                            }
                                                                        </SelectItem>
                                                                    ),
                                                                )}
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription className="mt-1 text-sm">
                                            Select your preferred date and time
                                            for the meeting.
                                        </FormDescription>
                                        <FormMessage className="text-destructive text-sm" />
                                    </FormItem>
                                )}
                            />

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="employed"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-base font-bold md:text-lg">
                                                Are you a business owner?
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem
                                                                value="1-Yes"
                                                                className="border-gray-400 text-primary"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-xs font-normal sm:text-sm md:text-base">
                                                            Yes
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem
                                                                value="2-No"
                                                                className="border-gray-400 text-primary"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-xs font-normal sm:text-sm md:text-base">
                                                            No
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage className="text-destructive text-sm" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="jobSwitch"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-base font-bold md:text-lg">
                                                Do you want revenue growth?
                                                <span className="text-destructive">
                                                    *
                                                </span>
                                            </FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem
                                                                value="1-Yes"
                                                                className="border-gray-400 text-primary"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-xs font-normal sm:text-sm md:text-base">
                                                            Yes
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem
                                                                value="2-No"
                                                                className="border-gray-400 text-primary"
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="text-xs font-normal sm:text-sm md:text-base">
                                                            No
                                                        </FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage className="text-destructive text-sm" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <CardFooter className="flex justify-center px-0 py-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    variant={'ts4uPrimary'}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default EmailForm;
