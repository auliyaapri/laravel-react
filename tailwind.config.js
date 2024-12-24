/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",  // Jika ada file Blade
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};