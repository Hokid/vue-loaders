import Vue from 'vue';
import { configure } from '@storybook/vue'
import VueLoaders from 'vue-loaders';
import 'vue-loaders/dist/VueLoaders.css';

Vue.use(VueLoaders);

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module)
