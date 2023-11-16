import { createVar, style } from '@vanilla-extract/css';

export const rootBg = createVar();

export const myStyle = style({
  vars: {
    [rootBg]: '#fff',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [rootBg]: '#000',
      },
    },
  },
});
