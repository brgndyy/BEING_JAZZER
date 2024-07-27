import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { myFont } from '../src/assets/fonts/font';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    action: fn,
  },
};

export const decorators = [
  (Story) => (
    <div className={myFont.className}>
      <Story />
    </div>
  ),
];

export default preview;
