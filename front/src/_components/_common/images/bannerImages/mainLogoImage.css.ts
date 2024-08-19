import { style } from '@vanilla-extract/css';

export const logoImage = style({
  width: '10rem',
  height: '10rem',
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      width: '8rem',
      height: '8rem',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});
