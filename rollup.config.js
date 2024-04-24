import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';

export default {
    input: './index.js',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js',
    },
    plugins: [resolve(), commonjs(), terser(), cleanup()],
};
