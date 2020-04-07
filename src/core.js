import * as ImportedVue from 'vue';

let Vue = ImportedVue;

export function setVue(vue) {
  Vue = vue;
}

function shouldUseGlobalCreateElement() {
  if (Vue && Vue.version && /^[3-9]\./.test(Vue.version)) {
    return true;
  }

  return false;
}

export function getLoaderName(fileName) {
  return 'VueLoaders' + fileName
    .replace(/\..+/, '')
    .replace(/-[\w]/g, (match) => match.slice(-1).toUpperCase())
    .replace(/^\w/, (match) => match.toUpperCase());
}

export function createLoaderComponent(mixin) {
  const originName = mixin.name;
  const name = getLoaderName(mixin.name);
  const component = Object.assign({
    props: {
      color: {
        type: String,
        default: '#ffffff'
      },
      scale: {
        type: [String, Number]
      }
    }
  }, mixin, {name});
  return {
    originName,
    setVue,
    component: useCreateElementResolver(component),
    install(Vue) {
      Vue.component(name, this.component);
    }
  }
}

export function createRoot(createElement, name, scale, children) {
  return createElement(
    'div',
    {
      class: {
        'vue-loaders': true,
        [name]: true
      },
      style: {
        transform: scale !== void 0 ? `scale(${scale})` : void 0
      }
    },
    children
  );
}

export function createChild(createElement, color, colorPropsOrChildren = 'background-color', children) {
  const style = {};

  if (
    Array.isArray(colorPropsOrChildren)
    && colorPropsOrChildren[0] !== void 0
    && typeof colorPropsOrChildren[0] !== 'string'
  ) {
    children = colorPropsOrChildren;
    colorPropsOrChildren = 'background-color';
  }

  if (colorPropsOrChildren) {
    if (Array.isArray(colorPropsOrChildren)) {
      for (const prop of colorPropsOrChildren) {
        style[prop] = color;
      }
    } else {
      style[colorPropsOrChildren] = color;
    }
  }

  return createElement(
    'div',
    {
      style
    },
    children
  );
}

export function useCreateElementResolver(component) {
  if (typeof component.render === 'function') {
    if (shouldUseGlobalCreateElement()) {
      const origin = component.render;
      component.render = function() {
        const argsArray = Array.prototype.slice.call(arguments);
        const args = typeof argsArray[0] === 'function'
          ? argsArray
          : [Vue.h].concat(argsArray);
        return origin.apply(this, args);
      };
    }
  }

  return component;
}

export class Loaders {
  constructor(...loaders) {
    this.loaders = {};

    loaders.forEach(loader => {
      this.loaders[loader.originName] = loader;
    });
  }

  get(name) {
    return this.loaders[name];
  }

  install(Vue) {
    const loaders = Object.values(this.loaders);
    loaders.forEach(loader => {
      loader.install(Vue);
    });
  }
}
