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
        "faq-white": "hsl(0, 0%, 100%)",
        "faq-light-pink": "hsl(275, 100%, 97%)",
        "faq-grayish-purple": "hsl(292, 16%, 49%)",
        "faq-dark-purple": "hsl(292, 42%, 14%)",
      },
      fontSize: {
        base: "16px",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundimage: {
        // "sample-bg": "/tsugini" // basepath of github pages
      },
    },
  },
  plugins: [],
};
export default config;
