const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ["components/**/*.js", "pages/**/*.js"],
	safeList: [
		'active',
		'show-to-top-btn'
	],
	theme: {
		screens: {
			xs: '450px',
			semi: '600px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				"main-color": "#094758",
				"secondary-color": "#581A09",
			},
			fontFamily: {
				"pacifico": "Pacifico, cursive",
				"open-sans": "'Open Sans', sans-serif",
				"poppins": "'Poppins', sans-serif",
				"luckiest-guy": "'Luckiest Guy', cursive",
				"mulish": "'Mulish', sans-serif",
			},
			backgroundImage: {
				'hero-bg': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(/img/hero-bg.jpg)"
			},
			animation: {
				"smoothSlide": "smoothSlide 1.5s linear infinite forwards"
			},
			keyframes: {
				smoothSlide: {
					"0%, 100%": { 'transform': 'translateX(0)' },
					"50%": { 'transform': 'translateX(1rem)' }
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: 'class',
		}),
	],
};
