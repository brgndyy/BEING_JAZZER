import { createVar, style } from '@vanilla-extract/css';

export const root_background_color_var = createVar();

export const myStyle = style({
  vars: {
    [root_background_color_var]: '#000',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [root_background_color_var]: '#000',
      },
    },
  },
});
