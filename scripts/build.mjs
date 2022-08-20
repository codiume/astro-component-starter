import { deleteAsync } from 'del';
import { build } from 'esbuild';

(async () => {
  try {
    await deleteAsync(['dist']);
    await build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      format: 'esm',
      outdir: 'dist',
      outbase: 'src',
      platform: 'node',
      target: 'node14',
      loader: {
        '.astro': 'file'
      }
    });
    console.log('⚡ Done');
  } catch (error) {
    process.exit(1);
  }
})();
