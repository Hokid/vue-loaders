#!/usr/bin/env bash
version=$1

npm run build
npm version ${version} -m 'chore: up to %s'
npm publish
