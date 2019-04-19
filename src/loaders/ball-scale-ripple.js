import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-scale-ripple';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color, 'border-color')
    ]);
  }
});
