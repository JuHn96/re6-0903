// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            // 루트 HTML
    "./src/**/*.{js,jsx,ts,tsx}" // src 폴더 아래 모든 JS/TS/JSX/TSX 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}