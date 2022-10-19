/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        SocialUp: "#8CD6DB",
        Grey: "#999999",
        Linear: "#5AB0B6",
        account: "#2B79C0",
        abu: {
          10: "#FFFFFF",
          20: "#F3F0F0",
          50: "#F3F3F3",
          80: "#565555",
          100: "#999999",
          120: "#DCDCDC",
        },
        biru: {
          50: "#5AB0B6",
        },
        hitam: {
          50: "#282727",
        },
      },
    },
    plugins: [],
  }, 
 },
};
