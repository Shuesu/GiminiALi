/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/src/assets/images/bg-1.png')",
        'bg-2': "url('/src/assets/images/bg-2.png')",
        'bg-3': "url('/src/assets/images/bg-3.png')",
        'bg-4': "url('/src/assets/images/bg-4.png')",
        'bg-5': "url('/src/assets/images/bg-5.png')",
        'bg-6': "url('/src/assets/images/bg-6.png')",
        'bg-7': "url('/src/assets/images/bg-7.png')",
      },
      // image: {
      //   'image-pc': "url('/src/assets/images/image-pc.png')",
      //   'image-fire': "url('/src/assets/images/image-fire.png')",
      //   'image-cup': "url('/src/assets/images/image-cup.png')",
      // }
    },
  },
  plugins: [],
}