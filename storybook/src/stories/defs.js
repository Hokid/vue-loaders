import readme from './readme';

const components = [
  'ball-beat',
  'ball-grid-beat',
  'ball-pulse',
  'ball-scale-ripple',
  'ball-zig-zag-deflect',
  'line-scale-pulse-out-rapid',
  'pacman',
  'ball-clip-rotate-multiple',
  'ball-grid-pulse',
  'ball-rotate',
  'ball-scale',
  'ball-zig-zag',
  'line-scale-pulse-out',
  'semi-circle-spin',
  'ball-clip-rotate-pulse',
  'ball-pulse-rise',
  'ball-scale-multiple',
  'ball-spin-fade',
  'cube-transition',
  'line-scale',
  'square-spin',
  'ball-clip-rotate',
  'ball-pulse-sync',
  'ball-scale-ripple-multiple',
  'ball-triangle-path',
  'line-scale-party',
  'line-spin-fade',
  'triangle-skew-spin'
];

function toName(component) {
  return component.charAt(0).toUpperCase() + component.replace(/-/g, ' ').slice(1);
}

function gen(component) {
  return {
    name: toName(component),
    component: `${component}-loader`,
    readme: readme[component]
  }
}

export default components.map(gen);
