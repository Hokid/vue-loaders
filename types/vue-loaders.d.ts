type Vue = {
  component(name: string, component: any): any;
}

type Component = {
  props: {
    [key: string]: any;
  };
  render(createElement?: any): any;
}

type SingleComponent = Component & {
  name: string;
}

export type VueLoadersPlugin = {
  component: Component;
  install(Vue: Vue): void;
};

export type VueLoadersSingleComponentPlugin = {
  originName: string;
  component: SingleComponent;
  install(Vue: Vue): void;
}

declare const plugin: VueLoadersPlugin;

export default plugin;

