import 'loaders.css';
import './vue-loaders.css';
import {setVue, useCreateElementResolver} from './core';
import loadersContainer from './loadersContainer';

const component = useCreateElementResolver({
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    scale: {
      type: [Number, String]
    }
  },
  render(createElement) {
    const loader = loadersContainer.get(this.name);

    if (loader) {
      const context = {
        color: this.color,
        scale: this.scale
      };

      return loader.component.render.call(context, createElement);
    }

    console.warn(
      'Unsupported loader name '
      + '"' + this.name + '".'
      + 'See https://github.com/Hokid/vue-loaders#loaders'
    );

    return null;
  }
});

export default {
  setVue,
  component,
  install(Vue) {
    Vue.component('vue-loaders', component);
    loadersContainer.install(Vue);
  }
}

