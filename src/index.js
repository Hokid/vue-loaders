import 'loaders.css';
import BallPulseLoader from './loaders/ball-pulse';
import BallGridPulseLoader from './loaders/ball-grid-pulse';

const components = {
  BallPulseLoader,
  BallGridPulseLoader
}

export default function install(Vue) {
  const compKeys = Object.keys(components);
  let ln = compKeys.length;

  while (ln--) {
    const component = components[compKeys[ln]];
    Vue.component(component.name, component);
  }
}

export {
  BallPulseLoader,
  BallGridPulseLoader
};
