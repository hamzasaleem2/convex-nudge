import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', '@remix-run/react', '@convex-nudge/react', '@convex-nudge/core']
}); 