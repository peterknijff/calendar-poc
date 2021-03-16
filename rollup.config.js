import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: [
        'src/main.js',
    ],
    output: {
        file: 'public/dist/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        resolve(),
        production && terser(), // minify, but only in production
        postcss({
            extract: 'style.css',
            sourceMap: true,
            minimize: true,
            plugins: [
                postcssImport(),
                postcssNested,
                autoprefixer()
            ]
        }),
    ]
};