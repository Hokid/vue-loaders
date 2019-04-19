import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-scale';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color)
    ]);
  }
});
