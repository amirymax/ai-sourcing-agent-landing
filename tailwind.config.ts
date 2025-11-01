import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb', // основной бренд-синий
          dark: '#1e40af',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
