// @ts-nocheck
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui-kit/src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
