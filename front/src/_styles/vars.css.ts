import { createVar, style } from '@vanilla-extract/css';

export const rootBg = createVar();
export const headerBg = createVar();

export const myStyle = style({
  vars: {
    [rootBg]: '#fff',
    [headerBg]: '#fff',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [rootBg]: '#000',
        [headerBg]: '#000',
      },
    },
  },
});
