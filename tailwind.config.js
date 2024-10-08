/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncing: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)" },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slideinbouncing:
          "slidein 1s var(--slidein-delay,0) ease forwards, bouncing 2s ease-in-out infinite",
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
      },
    },
  },
  plugins: [],
};
