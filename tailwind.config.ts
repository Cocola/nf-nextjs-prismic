import type { Config } from 'tailwindcss';

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        fontFamily: {
            sans: 'DM Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
        extend: {
            minHeight: {
              screen: '100dvh',
            },
            keyframes: {
              underline: {
                '0%': { transform: 'rotate(-1deg)' },
                '1%': { transform: 'rotate(-1deg) scale3d(0, 1, 1)' },
                '90%': { transform: 'rotate(-1deg) scale3d(1, 1, 1)' },
                '100%': { transform: 'rotate(-1deg) scale3d(1, 1, 1)' },
              }
            },
            animation: {
              underline: '.5s underline 1s cubic-bezier(0, 0, 0.2, 1) forwards'
            },
            colors: {
              primary: {
                light: '#4AE4B5',
              }
            }
        },
    },
};
export default config;