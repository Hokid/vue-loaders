import 'loaders.css';
import './vue-loaders.css';
import loadersContainer from './loadersContainer';

const component = {
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

    return null;
  }
};

export default {
  component,
  install(Vue) {
    Vue.component('vue-loaders', component);
    loadersContainer.install(Vue);
  }
}

