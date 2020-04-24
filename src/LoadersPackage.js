export class LoadersPackage {
  constructor(loaders) {
    this.loaders = {};

    if (Array.isArray(loaders)) {
      for (const loader of loaders) {
        this.add(loader);
      }
    }
  }

  get(name) {
    return this.loaders[name];
  }

  add(loader) {
    this.loaders[loader.originName] = loader;
  }

  install(Vue) {
    for (const name in this.loaders) {
      if (this.loaders.hasOwnProperty(name)) {
        this.loaders[name].install(Vue);
      }
    }
  }
}
