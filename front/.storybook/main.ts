import type { StorybookConfig } from '@storybook/nextjs';
import type { PresetValue } from '@storybook/types';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  } as PresetValue<Partial<import('@storybook/types').TypescriptOptions> | undefined>,

  webpackFinal(config, options) {
    // Add Vanilla-Extract and MiniCssExtract Plugins
    config.plugins?.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin());

    // Exclude vanilla extract files from regular css processing
    config.module?.rules?.forEach((rule) => {
      if (
        rule &&
        typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('test.css')
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i, // Targets only CSS files generated by vanilla-extract
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false, // Required as image imports should be handled via JS/TS import statements
          },
        },
      ],
    });

    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};

    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    return config;
  },
};

export default config;
