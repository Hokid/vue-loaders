import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'cube-transition';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color),
      createChild(createElement, this.color)
    ]);
  }
});
