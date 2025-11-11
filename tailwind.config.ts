import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom wellness colors
        sage: {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c7cdc7',
          300: '#a8b5a0',
          400: '#8a9b82',
          500: '#6d7f66',
          600: '#576551',
          700: '#465242',
          800: '#3a4437',
          900: '#31392f',
        },
        lavender: {
          50: '#f9f8fb',
          100: '#f0edf5',
          200: '#e4dfee',
          300: '#c5b4e3',
          400: '#b59ad7',
          500: '#a281ca',
          600: '#8d68b8',
          700: '#7855a0',
          800: '#644886',
          900: '#533d6e',
        },
        terracotta: {
          50: '#faf7f6',
          100: '#f4ede9',
          200: '#ead9d2',
          300: '#d4a59a',
          400: '#c78978',
          500: '#b76d5a',
          600: '#a85a4d',
          700: '#8c4a41',
          800: '#743f3a',
          900: '#603734',
        },
        cream: {
          50: '#faf7f0',
          100: '#f5efe0',
          200: '#ebe0c2',
          300: '#dcc897',
          400: '#ccad6f',
          500: '#be944f',
          600: '#b07943',
          700: '#925f39',
          800: '#774d33',
          900: '#61402c',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
