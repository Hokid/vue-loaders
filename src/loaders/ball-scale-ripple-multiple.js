import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-scale-ripple-multiple';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color, 'border-color'),
      createChild(createElement, this.color, 'border-color'),
      createChild(createElement, this.color, 'border-color')
    ]);
  }
});
