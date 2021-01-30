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

  requests.push(
    createWebTypes(loadersList)
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
    name: formatUMDName(fileName),
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

function createWebTypes(loaders) {
  const colorAttr = createWebTypesAttr(
    'color',
    'Set color. Accepted any CSS color value.',
    {
      kind: 'expression',
      type: 'string'
    },
    false,
    '"#ffffff"'
  );

  const scaleAttr = createWebTypesAttr(
    'scale',
    'Set scale. Accepted any CSS number value.',
    {
      kind: 'expression',
      type: [
        'string',
        'number'
      ]
    },
    false
  );

  const mainLoaderNameAttr = createWebTypesAttr(
    'name',
    'Set loader name to show.\n\nAvailable names:\n' + loaders.map(_ => ' - ' + formatNameForSingleComponent(_)).join('\n'),
    {
      kind: 'expression',
      type: 'string'
    },
    true
  );

  const webTypesContent = {
    $schema: "http://json.schemastore.org/web-types",
    framework: "vue",
    name: pkg.name,
    version: pkg.version,
    contributions: {
      html: {
        'types-syntax': 'typescript',
        tags: [
          createWebTypesTag(
            'vue-loaders',
            'Single component for all of the loaders. Use `name` attribute to specify loader.',
            {
              module: 'vue-loaders',
              symbol: 'default'
            },
            [
              mainLoaderNameAttr,
              colorAttr,
              scaleAttr
            ]
          )
        ].concat(
          loaders.map(_ =>
            createWebTypesTag(
              formatTagName(_),
              formatName(_) + ' loader component',
              {
                module: `vue-loaders/dist/${_}`,
                symbol: 'default'
              },
              [
                colorAttr,
                scaleAttr
              ]
            )
          )
        )
      }
    }
  };

  return fs.promises.writeFile(
    path.join(__dirname, '../dist/web-types.json'),
    JSON.stringify(webTypesContent, null, 2)
  );
}

function createWebTypesTag(name, description, source, attributes) {
  return {
    name,
    description,
    source,
    'doc-url': 'https://github.com/Hokid/vue-loaders',
    attributes
  };
}

function createWebTypesAttr(name, description, value, required = false, defaultValue) {
  const result = {
    name,
    description,
    value,
    required
  };

  if (defaultValue && !required) {
    result.default = defaultValue;
  }

  return result;
}

function formatName(fileName) {
  return fileName
    .replace('.js', '')
    .split('-')
    .map(_ =>
      _.charAt(0)
        ? _.charAt(0).toUpperCase() + _.slice(1)
        : _
    )
    .join(' ');
}

function formatNameForSingleComponent(fileName) {
  return fileName.replace('.js', '');
}

function formatTagName(fileName) {
  return 'vue-loaders-' + fileName.replace('.js', '');
}

function formatUMDName(fileName) {
  return 'VueLoaders' + fileName
    .replace('.js', '')
    .split('-')
    .map(_ =>
      _.charAt(0)
        ? _.charAt(0).toUpperCase() + _.slice(1)
        : _
    )
    .join('');
}
