import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'ball-clip-rotate-multiple';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color, ['border-right-color', 'border-left-color']),
      createChild(createElement, this.color, ['border-top-color', 'border-bottom-color'])
    ]);
  }
});
