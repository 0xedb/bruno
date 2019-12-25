import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: './src/app.js',
    output: {
        format: 'iife',
        file: 'public/bundle/app.js',
    },
    plugins: [
        svelte({
            dev: !production,
            css: (css) => {
                css.write('public/bundle/app.css');
            },
        }),
        resolve(),
        commonjs(),
        production && terser(),
    ],
};