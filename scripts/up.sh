#!/usr/bin/env bash
version=$1

./scripts/build.sh
npm version ${version}
npm publish
cd storybook
npm install -S vue-loaders@latest
npm run deploy-storybook
