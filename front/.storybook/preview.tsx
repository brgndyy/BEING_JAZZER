import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';

const withCenterAlignment = (Story, context) => {
  if (context.viewMode === 'docs') {
    return <Story />;
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withCenterAlignment],
  globalTypes: {
    action: fn,
  },
};

export default preview;
