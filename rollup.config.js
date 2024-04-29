import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: './index.js',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js',
    },
    plugins: [commonjs(), resolve(), terser()],
};
