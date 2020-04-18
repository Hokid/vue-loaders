export function formatLoaderName(fileName) {
  return 'VueLoaders' + fileName
    .split(/-|\.js/)
    .map(_ =>
      _.charAt(0)
        ? _.charAt(0).toUpperCase() + _.slice(1)
        : _
    )
    .join('');
}

export function createSingleLoaderComponent(options) {
  const component = createComponentBase();

  component.name = formatLoaderName(options.name);
  component.render = createRender(options);

  return {
    originName: options.name,
    component,
    install(Vue) {
      Vue.component(this.component.name, this.component);
    }
  }
}

function createComponentBase() {
  return {
    props: {
      color: {
        type: String,
        default: '#ffffff'
      },
      scale: {
        type: [String, Number]
      }
    }
  };
}

function createRender(options) {
  const renderChildren = createChildrenRenderer(options.children);
  return function render(createElement) {
    return renderRoot(
      createElement,
      options.name,
      this.scale,
      renderChildren(createElement, this.color)
    );
  }
}

function createChildrenRenderer(children) {
  const args = createChildrenRenderArgs(children);
  return function renderChildren(createElement, color, renderArgs = args) {
    return renderArgs.map(_ => {
      const style = _[0];
      const nestedRenderArgs = _[1];
      const children = nestedRenderArgs
        ? renderChildren(createElement, color, nestedRenderArgs)
        : void 0;
      return renderChild(createElement, style(color), children);
    });
  }
}

function createChildrenRenderArgs(children) {
  const args = [];

  if (typeof children === 'number') {
    const colorStyleFactory = createColorFactory();
    let count = children > 0 ? children : 1;
    while (count--) {
      args.push([colorStyleFactory]);
    }
  } else if (Array.isArray(children)) {
    let currentArg;
    for (const child of children) {
      const colorStyleFactory = createColorFactory(child.color);
      let count = child.count > 0 ? child.count : 1;
      while (count--) {
        currentArg = [colorStyleFactory];
        if (child.children !== undefined) {
          currentArg.push(createChildrenRenderArgs(child.children));
        }
        args.push(currentArg);
      }
    }
  } else {
    throw new TypeError('Invalid children');
  }

  return args;
}

function renderRoot(createElement, name, scale, children) {
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

function renderChild(createElement, style, children) {
  return createElement(
    'div',
    {
      style
    },
    children
  );
}

function createColorFactory(propsOrFn = 'background-color') {
  return color => {
    if (typeof propsOrFn === 'function') {
      return propsOrFn(color);
    }
    const props = Array.isArray(propsOrFn) ? propsOrFn : [propsOrFn];
    const style = {};
    for (const p of props) {
      style[p] = color;
    }
    return style;
  };
}

