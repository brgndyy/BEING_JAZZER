import { createVar, style } from '@vanilla-extract/css';

export const headerBg = createVar();
export const text1 = createVar();

export const myStyle = style({
  vars: {
    [headerBg]: '#fff',
    [text1]: '#000',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [headerBg]: '#1e1e1e',
        [text1]: '#fff',
      },
    },
  },
});
