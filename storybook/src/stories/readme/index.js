const context = require.context('./', false, /\.md$/);
const pack = {};

context.keys().forEach(key => (pack[key.replace(/\.\/|\.md$/g, '')] = context(key)));

export default pack;
