import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-grid-pulse';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color)
    ]);
  }
});
