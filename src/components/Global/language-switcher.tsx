'use client';

import * as React from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import Language from '../SVG/Language';

export function LanguageSwitcher() {
    const [language, setLanguage] = React.useState<string>('English');

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <Select value={language} onValueChange={handleLanguageChange}>
            {/* For larger screens */}
            <SelectTrigger className="border-none pr-0 text-white">
                <SelectValue>
                    <div className="hidden sm:flex">{language}</div>
                    {/* For smaller screens */}
                    <div className="sm:hidden">
                        <Language width={18} height={18} strokeColor="#fff" />
                    </div>
                </SelectValue>
            </SelectTrigger>

            <SelectContent className="border-none bg-nav text-white">
                <SelectGroup>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="বাংলা">বাংলা</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
