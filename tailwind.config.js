module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#ffffff',
                lightPurple: '#818DD1',
                blackOlive: '#3b413c',
                lightGrey: '#878D89',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
};
