// tailwind.config.js (ESM)

/** @type {import('tailwindcss').Config} */
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette.js';

function addVariablesForColors({ addBase, theme }) {
  const all = flattenColorPalette(theme('colors'));
  const vars = Object.fromEntries(
    Object.entries(all).map(([k, v]) => [`--${k}`, v])
  );
  addBase({ ':root': vars });
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};
