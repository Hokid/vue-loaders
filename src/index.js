import 'loaders.css';
import './vue-loaders.css';
import {LoadersPackage} from './LoadersPackage';
import ballbeat from './loaders/ball-beat';
import ballgridbeat from './loaders/ball-grid-beat';
import ballpulsesync from './loaders/ball-pulse-sync';
import ballscaleripple from './loaders/ball-scale-ripple';
import ballzigzagdeflect from './loaders/ball-zig-zag-deflect';
import linescale from './loaders/line-scale';
import linespinfadeloader from './loaders/line-spin-fade-loader';
import triangleskewspin from './loaders/triangle-skew-spin';
import ballcliprotate from './loaders/ball-clip-rotate';
import ballgridpulse from './loaders/ball-grid-pulse';
import ballrotate from './loaders/ball-rotate';
import ballscaleripplemultiple from './loaders/ball-scale-ripple-multiple';
import ballzigzag from './loaders/ball-zig-zag';
import linescaleparty from './loaders/line-scale-party';
import pacman from './loaders/pacman';
import ballcliprotatemultiple from './loaders/ball-clip-rotate-multiple';
import ballpulse from './loaders/ball-pulse';
import ballscale from './loaders/ball-scale';
import ballspinfadeloader from './loaders/ball-spin-fade-loader';
import cubetransition from './loaders/cube-transition';
import linescalepulseout from './loaders/line-scale-pulse-out';
import semicirclespin from './loaders/semi-circle-spin';
import ballcliprotatepulse from './loaders/ball-clip-rotate-pulse';
import ballpulserise from './loaders/ball-pulse-rise';
import ballscalemultiple from './loaders/ball-scale-multiple';
import balltrianglepath from './loaders/ball-triangle-path';
import linescalepulseoutrapid from './loaders/line-scale-pulse-out-rapid';
import squarespin from './loaders/square-spin';

const loadersPackage = new LoadersPackage();

loadersPackage.add(ballbeat);
loadersPackage.add(ballgridbeat);
loadersPackage.add(ballpulsesync);
loadersPackage.add(ballscaleripple);
loadersPackage.add(ballzigzagdeflect);
loadersPackage.add(linescale);
loadersPackage.add(linespinfadeloader);
loadersPackage.add(triangleskewspin);
loadersPackage.add(ballcliprotate);
loadersPackage.add(ballgridpulse);
loadersPackage.add(ballrotate);
loadersPackage.add(ballscaleripplemultiple);
loadersPackage.add(ballzigzag);
loadersPackage.add(linescaleparty);
loadersPackage.add(pacman);
loadersPackage.add(ballcliprotatemultiple);
loadersPackage.add(ballpulse);
loadersPackage.add(ballscale);
loadersPackage.add(ballspinfadeloader);
loadersPackage.add(cubetransition);
loadersPackage.add(linescalepulseout);
loadersPackage.add(semicirclespin);
loadersPackage.add(ballcliprotatepulse);
loadersPackage.add(ballpulserise);
loadersPackage.add(ballscalemultiple);
loadersPackage.add(balltrianglepath);
loadersPackage.add(linescalepulseoutrapid);
loadersPackage.add(squarespin);

const VueLoadersComponent = {
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
    const loader = loadersPackage.get(this.name);

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
};

export default {
  component: VueLoadersComponent,
  install(Vue) {
    Vue.component('vue-loaders', VueLoadersComponent);
    loadersPackage.install(Vue);
  }
}

