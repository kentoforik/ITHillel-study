import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['src/**/*.js'],
		ignores: ['**/*.config.js'],
		rules: {
			semi: 'error',
		},
	},
];
