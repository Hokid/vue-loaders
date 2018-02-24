import 'loaders.css';
import './style.css';
import * as components from './loader';

export default function install(Vue) {
  const compKeys = Object.keys(components);
  let ln = compKeys.length;

  while (ln--) {
    const component = components[compKeys[ln]];
    Vue.component(component.name, component);
  }
}

export * from './loader';
