/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			serif: ['Arial', 'serif']
		},
		extend: {
			colors: {
				blue2: 'rgb(128, 227, 255)'
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('not-last', '&:not(:last-child)');
		}),
		require('@tailwindcss/aspect-ratio'),

		require('@tailwindcss/typography'),
		require('flowbite/plugin')
	]
};
