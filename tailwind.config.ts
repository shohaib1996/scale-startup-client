import type { Config } from 'tailwindcss';
import talAnimation from 'tailwindcss-animate';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'hsla(var(--primary), var(--tw-bg-opacity,1))',
                    muted: 'hsla(var(--primary-muted), var(--tw-bg-opacity,1))',
                },
                secondary: {
                    DEFAULT: 'hsla(var(--secondary), var(--tw-bg-opacity,1))',
                },
                tertiary: {
                    DEFAULT: 'hsla(var(--tertiary), var(--tw-bg-opacity,1))',
                },
                titleText: {
                    DEFAULT: 'hsla(var(--titleText), var(--tw-bg-opacity,1))',
                },
                headText: {
                    DEFAULT: 'hsla(var(--headText), var(--tw-bg-opacity,1))',
                },
                textGray: {
                    DEFAULT: 'hsla(var(--textGray), var(--tw-bg-opacity,1))',
                },
                textSilver: {
                    DEFAULT: 'hsla(var(--textSilver), var(--tw-bg-opacity,1))',
                },
                backPrimary: {
                    DEFAULT: 'hsla(var(--backPrimary), var(--tw-bg-opacity,1))',
                },
                backSecondary: {
                    DEFAULT:
                        'hsla(var(--backSecondary), var(--tw-bg-opacity,1))',
                },
                backTitle: {
                    DEFAULT: 'hsla(var(--backTitle), var(--tw-bg-opacity,1))',
                },
                backWhite: {
                    DEFAULT: 'hsla(var(--backWhite), var(--tw-bg-opacity,1))',
                },
                lightBlue: {
                    DEFAULT: 'hsla(var(--lightBlue), var(--tw-bg-opacity,1))',
                },
                lightBrown: {
                    DEFAULT: 'hsla(var(--lightBrown), var(--tw-bg-opacity,1))',
                },
                lightPest: {
                    DEFAULT: 'hsla(var(--lightPest), var(--tw-bg-opacity,1))',
                },
                lightGreen: {
                    DEFAULT: 'hsla(var(--lightGreen), var(--tw-bg-opacity,1))',
                },
                lightPurple: {
                    DEFAULT: 'hsla(var(--lightPurple), var(--tw-bg-opacity,1))',
                },
                rosePink: {
                    DEFAULT: 'hsla(var(--rosePink), var(--tw-bg-opacity,1))',
                },
                bgPink: {
                    DEFAULT: 'hsla(var(--bgPink), var(--tw-bg-opacity,1))',
                },
                bgSky: {
                    DEFAULT: 'hsla(var(--bgSky), var(--tw-bg-opacity,1))',
                },
                bgPurple: {
                    DEFAULT: 'hsla(var(--bgPurple), var(--tw-bg-opacity,1))',
                },
                bgPest: {
                    DEFAULT: 'hsla(var(--bgPest), var(--tw-bg-opacity,1))',
                },
                gold: {
                    DEFAULT: 'hsla(var(--gold), var(--tw-bg-opacity,1))',
                },
                purple: {
                    DEFAULT: 'hsla(var(--purple), var(--tw-bg-opacity,1))',
                },
                sky: {
                    DEFAULT: 'hsla(var(--sky), var(--tw-bg-opacity,1))',
                },
                pink: {
                    DEFAULT: 'hsla(var(--pink), var(--tw-bg-opacity,1))',
                },
                orange: {
                    DEFAULT: 'hsla(var(--orange), var(--tw-bg-opacity,1))',
                },
                nav: {
                    DEFAULT: 'hsla(var(--nav), var(--tw-bg-opacity,1))',
                },
                iconBack: {
                    DEFAULT: 'hsla(var(--iconBack), var(--tw-bg-opacity,1))',
                },
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [talAnimation],
};
export default config;
