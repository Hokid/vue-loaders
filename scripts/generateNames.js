const fs = require('fs');

function getLoaderName(fileName) {
  return 'vue-loaders-' + fileName
    .replace(/\..+/, '');
}

const list = fs.readdirSync('./src/loaders/');

console.log(list
  .map(n =>
    n.replace(/\..+/, ''))
  .join('\n'));

console.log(list.map(getLoaderName).join('\n'));
