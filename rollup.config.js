import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

import {main} from './package.json';

let globals = {
	'vue-demi': 'VueDemi',
};

export default {
	external: Object.keys(globals),
	input: 'src/index.js',
	plugins: [
		nodeResolve(),
		replace({'process.env.NODE_ENV': '"production"'}),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/preset-env'],
		}),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'VueResizeSensor',
		globals,
	},
};