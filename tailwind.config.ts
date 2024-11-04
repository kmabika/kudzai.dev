import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		  colors: {
			background: "var(--background)",
			foreground: "var(--foreground)",
			n1: "var(--neutral-1)",
			n2: "var(--neutral-2)",
			n3: "var(--neutral-3)",
			n4: "var(--neutral-4)",
			n5: "var(--neutral-5)",
			n6: "var(--neutral-6)",
			n7: "var(--neutral-7)",
			n8: "var(--neutral-8)",
		  },
		  fontFamily: {
			serif: ["var(--font-lora)"],
			sans: ["var(--font-geist-sans)"],
			mono: ["var(--font-geist-mono)"],
			inter: ["var(--font-inter)"],
		  },
		  keyframes: {
			scale: {
			  "0%": {
				transform: "scale(1)",
			  },
			  "35%": {
				transform: "scale(0.9)",
			  },
			  "50%": {
				transform: "scale(0.9)",
			  },
			  "65%": {
				transform: "scale(0.9)",
			  },
			  "100%": {
				transform: "scale(1)",
			  },
			},
			"fan-right-1": {
			  "0%": {
				transform: "translate3d(0, 0, 0)",
			  },
			  "35%": {
				transform: "translate3d(2rem, 5%, 0) rotate3d(0, 0, 1, 12deg)",
			  },
			  "50%": {
				transform: "translate3d(2rem, 5%, 0) rotate3d(0, 0, 1, 12deg)",
			  },
			  "65%": {
				transform: "translate3d(2rem, 5%, 0) rotate3d(0, 0, 1, 12deg)",
			  },
			  "100%": {
				transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 0.98)",
			  },
			},
			"fan-right-2": {
			  "0%": {
				transform: "translate3d(0, 0, 0)",
			  },
			  "45%": {
				transform: "translate3d(4rem, 6%, 0) rotate3d(0, 0, 1, 14deg)",
			  },
			  "50%": {
				transform: "translate3d(4rem, 6%, 0) rotate3d(0, 0, 1, 14deg)",
			  },
			  "55%": {
				transform: "translate3d(4rem, 6%, 0) rotate3d(0, 0, 1, 14deg)",
			  },
			  "100%": {
				transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 0.98)",
			  },
			},
		  },
		  animation: {
			scale: "scale 3.5s 2.15s forwards",
			"fan-right-1": "fan-right-1 3.15s 2.15s forwards",
			"fan-right-2": "fan-right-2 3.15s 2.25s forwards",
		  },
		},
	  },
	plugins: [],
};
export default config;
