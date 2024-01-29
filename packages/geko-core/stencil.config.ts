import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'geko-core',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
  ],
};
