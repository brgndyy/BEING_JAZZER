import {fontFace, style } from '@vanilla-extract/css';

const myFontFace = fontFace({
  src: 'url(https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff) format("woff")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

export const myFontClass = style({
  fontFamily: myFontFace,
});
