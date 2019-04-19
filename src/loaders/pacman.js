import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'pacman';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color, ['border-top-color', 'border-left-color', 'border-bottom-color']),
      createChild(createElement, this.color, ['border-top-color', 'border-left-color', 'border-bottom-color']),
      createChild(createElement, this.color),
      createChild(createElement, this.color),
      createChild(createElement, this.color)
    ]);
  }
});
