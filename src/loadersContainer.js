import {Loaders} from './core';

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

export default new Loaders(
  ballbeat,
  ballgridbeat,
  ballpulsesync,
  ballscaleripple,
  ballzigzagdeflect,
  linescale,
  linespinfadeloader,
  triangleskewspin,
  ballcliprotate,
  ballgridpulse,
  ballrotate,
  ballscaleripplemultiple,
  ballzigzag,
  linescaleparty,
  pacman,
  ballcliprotatemultiple,
  ballpulse,
  ballscale,
  ballspinfadeloader,
  cubetransition,
  linescalepulseout,
  semicirclespin,
  ballcliprotatepulse,
  ballpulserise,
  ballscalemultiple,
  balltrianglepath,
  linescalepulseoutrapid,
  squarespin,
);
