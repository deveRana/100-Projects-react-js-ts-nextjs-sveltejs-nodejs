/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1228px",
		},
		fontFamily: {
			oswald: ["Oswald", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
			montserrat: ['Montserrat', 'sans-serif']
		},
		extend: {
			colors: {
				primaryColor: "#FF8E09",
				primaryColorLight: "rgba(255, 142, 9, 0.4)",
				paragraphColor: "#37393f",
				whiteColor: "#fff",
				blackColor: "#000",
				darkColor: "#1E1E26",
				darkColorLight: "#171717",
			},
			boxShadow: {
				'custom': '1px 4px 14px 3px rgba(0, 0, 0, 0.15)',
				'custom2': '1px 4px 14px 3px rgba(255, 142, 9, 0.4)',
			}
		},
		container: {
			center: true,
		}
	},
	plugins: [],
}
