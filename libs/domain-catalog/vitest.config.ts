import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node'
  },
  resolve: {
    alias: {
      '@kitchen-cpq/shared-types': path.resolve(__dirname, '../shared-types/src/index.ts'),
      '@kitchen-cpq/shared-validation': path.resolve(__dirname, '../shared-validation/src/index.ts')
    }
  }
});
