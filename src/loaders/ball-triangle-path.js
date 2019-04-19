import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-triangle-path';

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
