const fs = require("fs");
const path = require("path");
const rollup = require('rollup');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const babel = require('rollup-plugin-babel');
const postcss = require('rollup-plugin-postcss');
const {terser} = require('rollup-plugin-terser');
const pkg = require('../package.json');

main()
  .then(
    () =>
      console.info('Success!'),
    error =>
      console.error(error)
  );

async function main() {
  console.info('Building...');
  const requests = [];

  const dist = path.join(__dirname, '../dist');

  if (fs.existsSync(dist)) {
    console.log('Removing existing dist dir...');
    await fs.promises.rmdir(dist, {
      recursive: true
    });
  }

  console.log('Creating dist dir...');
  await fs.promises.mkdir(path.join(dist, 'loaders'), {
    recursive: true
  });

  requests.push(
    rollup.rollup({
      input: 'src/index.js',
      external: ['vue'],
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
        terser()
      ]
    }).then(_ => _.write({
      name: 'VueLoaders',
      file: pkg.main,
      format: 'umd',
      exports: 'default',
      esModule: true,
      globals: {
        'vue': 'Vue'
      }
    }))
  );

  requests.push(
    rollup.rollup({
      input: 'src/index.js',
      external: ['vue'],
      plugins: [
        resolve(),
        commonjs(),
        postcss({
          inject: false,
          extract: false
        }),
        terser()
      ]
    }).then(_ => _.write({
      file: pkg.module,
      format: 'es'
    }))
  );

  const loadersList = fs.readdirSync('./src/loaders/');

  requests.push(
    ...createBundleGeneratorForEachLoader(loadersList)
  );

  requests.push(
    ...createTypesGeneratorForEachLoader(loadersList)
  );

  await Promise.all(requests);
}

function createBundleGeneratorForEachLoader(loaders) {
  return loaders.map(fileName => rollup.rollup({
    input: `src/loaders/${fileName}`,
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**'],
        runtimeHelpers: true
      }),
      terser()
    ]
  }).then(_ => _.write({
    name: formatLoaderName(fileName),
    file: `./dist/loaders/${fileName}`,
    format: 'umd',
    esModule: true,
    globals: {
      'vue': 'Vue'
    }
  })));
}

const singleLoaderDTSContent =
  `import {VueLoadersSingleComponentPlugin} from '../../types/vue-loaders';\n`
  + `declare const plugin: VueLoadersSingleComponentPlugin;\n`
  + `export default plugin;\n`;

function createTypesGeneratorForEachLoader(loaders) {
  return loaders.map(fileName => fs.promises.writeFile(
    path.join(__dirname, '../dist/loaders/', path.basename(fileName, path.extname(fileName)) + '.d.ts'),
    singleLoaderDTSContent
  ))
}

function formatLoaderName(fileName) {
  return 'VueLoaders' + fileName
    .split(/-|\.js/)
    .map(_ =>
      _.charAt(0)
        ? _.charAt(0).toUpperCase() + _.slice(1)
        : _
    )
    .join('');
}
