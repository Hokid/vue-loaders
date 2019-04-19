import {createLoaderComponent, createRoot, createChild} from '../core';

const loaderName = 'semi-circle-spin';

export default createLoaderComponent({
  name: loaderName,
  render(createElement) {
    return createRoot(createElement, loaderName, this.scale, [
      createElement(
        'div',
        {
          style: {
            backgroundImage: `linear-gradient(transparent 0,transparent 70%, ${this.color} 30%, ${this.color} 100%)`
          }
        }
      )
    ]);
  }
});
