import { createVar, style } from '@vanilla-extract/css';

export const background1 = createVar();
export const background2 = createVar();
export const text1 = createVar();
export const text2 = createVar();
export const text3 = createVar();
export const text4 = createVar();
export const text5 = createVar();
export const toastMessage = createVar();
export const toastProgressBar = createVar();

export const myStyle = style({
  vars: {
    [background1]: '#fff',
    [background2]: '#fff',
    [text1]: '#000',
    [text2]: '#fff',
    [text3]: '#868e96',
    [text4]: '#505050',
    [text5]: '#707070',
    [toastMessage]: '#fff',
    [toastProgressBar]: '#efefef',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [background1]: '#1e1e1e',
        [background2]: '#2b2b2b',
        [text1]: '#fff',
        [text2]: '##2c2c2c',
        [text3]: '#acacac',
        [text4]: '#e5e5e5',
        [text5]: '#1e1e1e',
        [toastMessage]: '#fff',
        [toastProgressBar]: '#efefef',
      },
    },
  },
});
