'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { useSession, signIn } from 'next-auth/react';
// import { CircleUser, Menu } from 'lucide-react';
// import { RiMenu3Fill } from 'react-icons/ri';
import Image from 'next/image';
import { ThemeSwitcher } from '../Global/theme-switcher';
import { NavMenu } from '../Global/NavMenu';
import { LanguageSwitcher } from '../Global/language-switcher';
import UserIcon from '../SVG/UserIcon';
// import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
// import { useState } from 'react';

const Navbar = () => {
    // const { data: session } = useSession();
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <header className="w-full bg-nav py-1 text-white">
            <nav className="myContainer mx-auto flex items-center justify-between !p-2">
                {/* Logo */}
                <Link href="/" className="">
                    <Image
                        src="/logo/logo.svg"
                        alt="techserve4u Logo"
                        width={152.24}
                        height={50}
                        className="h-12 w-full"
                    />
                </Link>

                {/* Middle - Navigation Menu (hidden for mobile, visible for lg and larger) */}
                <div className="hidden items-center space-x-8 lg:flex">
                    <NavMenu />
                </div>

                {/* Right Side - Login, Signup, Language, Theme (visible for lg and larger) */}
                <div className="flex items-center">
                    <div className="mx-2 flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                        {/* Language Switcher */}
                        {/* <LanguageSwitcher /> */}

                        {/* Dark Mode Toggle */}
                        <ThemeSwitcher />

                        {/* {session ? (
                        <Account />
                    ) : ( */}
                        <>
                            {/* <Button
                                variant="ghost"
                                className="gap-[6px]"
                                // onClick={() => signIn()}
                            >
                                <UserIcon
                                    width="16"
                                    height="16"
                                    stroke="white"
                                />
                                Login
                            </Button> */}

                            {/* <Button
                            className="gap-[6px] rounded-xl px-5 py-5 font-semibold"
                            variant="secondary"
                        >
                            <UserAddIcon
                                width="16"
                                height="16"
                                stroke="white"
                            />
                            Sign Up
                        </Button> */}
                        </>
                        {/* )} */}
                    </div>

                    {/* Mobile Menu Trigger (visible for screens smaller than lg) */}
                    {/* <div className="lg:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <button
                                    className="pt-1 text-gray-200 focus:outline-none"
                                    aria-label="Toggle Menu"
                                    onClick={toggleMenu}
                                >
                                    <RiMenu3Fill className="h-6 w-6" />
                                </button>
                            </SheetTrigger>

                            <SheetContent className="w-[200px] bg-nav lg:w-[400px]">
                                <div className="mt-10 flex flex-col items-end space-y-4">
                                    <NavMenu />
                                    <Button
                                        variant="ghost"
                                        className="mr-5 gap-[6px]"
                                        // onClick={() => signIn()}
                                    >
                                        <UserIcon
                                            width="16"
                                            height="16"
                                            stroke="white"
                                        />
                                        Login
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div> */}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
