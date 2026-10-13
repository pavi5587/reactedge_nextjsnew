import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f7f9fc",
        panel: "#ffffff",
        line: "#dce4ec",
        acid: "#75a928",
        muted: "#607080"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 12px 40px rgba(20,42,66,.08)"
      }
    }
  },
  plugins: []
};
export default config;
