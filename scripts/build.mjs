import { build as esbuild } from 'esbuild';
import { clean } from 'esbuild-plugin-clean';

(async () => {
  try {
    const outdir = 'dist';
    await esbuild({
      bundle: false,
      entryPoints: ['src/index.ts', 'src/components/Button.astro'],
      format: 'esm',
      minify: false,
      outdir: outdir,
      platform: 'node',
      sourcemap: false,
      sourcesContent: false,
      target: 'node14',
      outExtension: {
        '.js': '.mjs'
      },
      loader: {
        '.astro': 'copy'
      },
      plugins: [
        clean({
          patterns: [`${outdir}/*`]
        })
      ]
    });
    console.log('⚡ Done');
  } catch (error) {
    process.exit(1);
  }
})();
