import { terser } from 'rollup-plugin-terser';

export default {
    input: './index.js',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js',
    },
    plugins: [terser()],
};
