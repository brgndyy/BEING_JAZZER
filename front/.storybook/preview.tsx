import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';

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

export default preview;
