# Vue Loaders

Vue components for [loaders.css](https://github.com/ConnorAtherton/loaders.css).

[Sandbox](http://hokid.github.com/vue-loaders?v=1)

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

Or:

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader } from 'vue-loaders';

Vue.component(BallBeatLoader.name, BallBeatLoader);
```

Or - to import 1 loader excluding the rest:

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader, install } from 'vue-loaders';

const VueLoaders = { BallBeatLoader, install };

Vue.use(VueLoaders);
```
^ note: `install` must be used on the end of the object.

Or - to import more than 1 loaders excluding the rest e.g. import BallBeatLoader & BallClipRotateMultipleLoader only:

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader, BallClipRotateMultipleLoader, install } from 'vue-loaders';

const VueLoaders = { BallBeatLoader, BallClipRotateMultipleLoader, install };

Vue.use(VueLoaders);
```

Or:

```JS
import Vue from 'vue';
import 'vue-loaders/dist/vue-loaders.css';
import { BallBeatLoader } from 'vue-loaders';

new Vue({ components: { BallBeatLoader }, template: '<ball-beat-loader />' });
```

Or:

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
