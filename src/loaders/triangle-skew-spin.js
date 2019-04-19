import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'triangle-skew-spin';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createChild(createElement, this.color, ['border-bottom-color'])
    ]);
  }
});
