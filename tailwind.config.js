module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '-1': '-1',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
