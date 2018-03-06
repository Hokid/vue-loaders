import 'loaders.css';
import './style.css';

import BallBeatLoader from './loaders/ball-beat.vue';
import BallClipRotateLoader from './loaders/ball-clip-rotate.vue';
import BallClipRotateMultipleLoader from './loaders/ball-clip-rotate-multiple.vue';
import BallClipRotatePulseLoader from './loaders/ball-clip-rotate-pulse.vue';
import BallGridBeatLoader from './loaders/ball-grid-beat.vue';
import BallGridPulseLoader from './loaders/ball-grid-pulse.vue';
import BallPulseLoader from './loaders/ball-pulse.vue';
import BallPulseRiseLoader from './loaders/ball-pulse-rise.vue';
import BallPulseSyncLoader from './loaders/ball-pulse-sync.vue';
import BallRotateLoader from './loaders/ball-rotate.vue';
import BallScaleLoader from './loaders/ball-scale.vue';
import BallScaleMultipleLoader from './loaders/ball-scale-multiple.vue';
import BallScaleRippleLoader from './loaders/ball-scale-ripple.vue';
import BallScaleRippleMultipleLoader from './loaders/ball-scale-ripple-multiple.vue';
import BallSpinFadeLoader from './loaders/ball-spin-fade.vue';
import BallTrianglePathLoader from './loaders/ball-triangle-path.vue';
import BallZigZagLoader from './loaders/ball-zig-zag.vue';
import BallZigZagDeflectLoader from './loaders/ball-zig-zag-deflect.vue';
import CubeTransitionLoader from './loaders/cube-transition.vue';
import LineScaleLoader from './loaders/line-scale.vue';
import LineScalePartyLoader from './loaders/line-scale-party.vue';
import LineScalePulseOutLoader from './loaders/line-scale-pulse-out.vue';
import LineScalePulseOutRapidLoader from './loaders/line-scale-pulse-out-rapid.vue';
import LineSpinFadeLoader from './loaders/line-spin-fade.vue';
import PacmanLoader from './loaders/pacman.vue';
import SemiCircleSpinLoader from './loaders/semi-circle-spin.vue';
import SquareSpinLoader from './loaders/square-spin.vue';
import TriangleSkewSpinLoader from './loaders/triangle-skew-spin.vue';

function install(Vue) {
  const compKeys = Object.keys(this).filter((key) => key !== 'install');
  let ln = compKeys.length;

  while (ln--) {
    const component = this[compKeys[ln]];
    Vue.component(component.name, component);
  }
}

export {
  install,
  BallBeatLoader,
  BallClipRotateLoader,
  BallClipRotateMultipleLoader,
  BallClipRotatePulseLoader,
  BallGridBeatLoader,
  BallGridPulseLoader,
  BallPulseLoader,
  BallPulseRiseLoader,
  BallPulseSyncLoader,
  BallRotateLoader,
  BallScaleLoader,
  BallScaleMultipleLoader,
  BallScaleRippleLoader,
  BallScaleRippleMultipleLoader,
  BallSpinFadeLoader,
  BallTrianglePathLoader,
  BallZigZagLoader,
  BallZigZagDeflectLoader,
  CubeTransitionLoader,
  LineScaleLoader,
  LineScalePartyLoader,
  LineScalePulseOutLoader,
  LineScalePulseOutRapidLoader,
  LineSpinFadeLoader,
  PacmanLoader,
  SemiCircleSpinLoader,
  SquareSpinLoader,
  TriangleSkewSpinLoader
}

