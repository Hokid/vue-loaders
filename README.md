<h1 align="center">vue loaders</h1>

<p align="center">
  Based on <a href="https://github.com/ConnorAtherton/loaders.css">loaders.css</a>
</p>
<p align="center">
  <img src="vue-loaders.gif" alt="Preview" width="600" height="250">
</p>
<p align="center">
  <a href="http://hokid.github.com/vue-loaders?v=1">Sandbox</a>
</p>

## Install

```JS
npm install -S vue-loaders
```


## Usage

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import * as VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);

```

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader } from 'vue-loaders';

Vue.component(BallBeatLoader.name, BallBeatLoader);
```

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader, BallClipRotateLoader, install } from 'vue-loaders';

const VueLoaders = { BallBeatLoader, BallClipRotateLoader, install };

Vue.use(VueLoaders);
```

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader } from 'vue-loaders';

new Vue({ components: { BallBeatLoader }, template: '<ball-beat-loader />' });
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>VueLoaders demo</title>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-loaders"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-loaders/dist/vue-loaders.css">
  </head>
  <body>
    <div id="app">
      <ball-pulse-loader color="#000000" size="20px"></ball-pulse-loader>
    </div>
    <script>
      Vue.use(VueLoaders);
      new Vue().$mount('#app');
    </script>
  </body>
</html>
```

## Loaders

 * BallBeatLoader
 * BallClipRotateLoader
 * BallClipRotateMultipleLoader
 * BallClipRotatePulseLoader
 * BallGridBeatLoader
 * BallGridPulseLoader
 * BallPulseLoader
 * BallPulseRiseLoader
 * BallPulseSyncLoader
 * BallRotateLoader
 * BallScaleLoader
 * BallScaleMultipleLoader
 * BallScaleRippleLoader
 * BallScaleRippleMultipleLoader
 * BallSpinFadeLoader
 * BallTrianglePathLoader
 * BallZigZagLoader
 * BallZigZagDeflectLoader
 * CubeTransitionLoader
 * LineScaleLoader
 * LineScalePartyLoader
 * LineScalePulseOutLoader
 * LineScalePulseOutRapidLoader
 * LineSpinFadeLoader
 * PacmanLoader
 * SemiCircleSpinLoader
 * SquareSpinLoader
 * TriangleSkewSpinLoader
