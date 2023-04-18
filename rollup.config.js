import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import { babel } from '@rollup/plugin-babel'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

const extensions = ['.ts', '.tsx']

const indexConfig = {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
  },
  external: ['react', 'react/jsx-runtime', 'react-dom/client'],
  plugins: [
    resolve({ extensions }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions,
    }),
    postcss({
      plugins: [autoprefixer(), tailwindcss()],
      minimize: true,
      inject: true,
    }),
    typescript(),
    typescriptPaths({ preserveExtensions: true }),
    terser({ output: { comments: false } }),
  ],
}

const configs = [ indexConfig ]

export default configs
