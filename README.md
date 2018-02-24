# Vue Loaders

Vue component wrappers for [Loaders.css](https://github.com/ConnorAtherton/loaders.css).

[Sandbox](http://hokid.github.com/vue-loaders?v=1)

## Install

```JS
npm install -S vue-loaders
```


## Usage

```JS
import Vue from 'vue';
import VueLoaders from 'vue-loaders';
import 'vue-loaders/dist/VueLoaders.css';

Vue.use(VueLoaders);
// or
Vue.component(VueLoaders.BallBeat.name, VueLoaders.BallBeat);
Vue.component(VueLoaders.BallZigZigDeflect.name, VueLoaders.BallZigZigDeflect);
// ..etc
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>VueLoaders demo</title>
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/vue-loaders"></script>
    <link rel="stylesheet" href="https://unpkg.com/vue-loaders/dist/VueLoaders.css">
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

