'use client';
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="me-5 flex flex-col items-end space-y-4 text-white opacity-80 lg:me-0 lg:flex-row lg:space-y-0">
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="#services" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Services
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                    <Link href="/portfolio" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Portfolio
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}

                <NavigationMenuItem>
                    <Link href="#solution" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Solution
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="#tech" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Technology
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="#choose" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Company
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="#contact" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} transition-colors duration-300 hover:text-white/50`}
                        >
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
