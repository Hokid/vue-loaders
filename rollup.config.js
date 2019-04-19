import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import fs from 'fs';
import {getLoaderName} from './src/core';
import pkg from './package.json';

const loadersList = fs.readdirSync('./src/loaders/');

function createBundleOptionsForLoaders(loaders) {
  return loaders.map(fileName => ({
    input: `src/loaders/${fileName}`,
    output: {
      name: getLoaderName(fileName),
      file: `./dist/loaders/${fileName}`,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
        runtimeHelpers: true
      }),
    ]
  }));
}

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'VueLoaders',
      file: pkg.main,
      format: 'umd',
      exports: 'default'
    },
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        inject: false,
        extract: pkg.style,
        plugins: [
          autoprefixer(),
          csso()
        ]
      }),
      babel({
        exclude: ['node_modules/**'],
        runtimeHelpers: true
      }),
      // uglify()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {file: pkg.module, format: 'es'}
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        inject: false,
        extract: false
      })
    ]
  }
].concat(createBundleOptionsForLoaders(loadersList));
