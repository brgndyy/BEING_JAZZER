import { createVar, style } from '@vanilla-extract/css';

export const headerBg = createVar();

export const myStyle = style({
  vars: {
    [headerBg]: '#fff',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [headerBg]: '#000',
      },
    },
  },
});
