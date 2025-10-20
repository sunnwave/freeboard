import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: { builder: '@storybook/builder-webpack5' },
  docs: { autodocs: 'tag' },

  // ✅ Babel 설정에서 React preset 제거 (중복 방지)
  babel: async options => ({
    ...options,
    presets: [...(options.presets || []), '@babel/preset-env', '@babel/preset-typescript'],
  }),

  webpackFinal: async config => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': `${process.cwd()}/src`,
    };
    return config;
  },
};

export default config;
