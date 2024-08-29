import { styleVariants, style } from '@vanilla-extract/css';
import {
  buttonBackground1,
  text1,
  text2,
  warningBackground,
  borderColor,
} from '@/_styles/vars.css';

export const background = styleVariants({
  primary: { background: buttonBackground1, color: text2 },
  warning: { background: warningBackground, color: '#fff' },
  border: { background: 'none', color: text1, border: `0.1rem solid ${borderColor} !important` },
  none: { background: 'none', color: text1 },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  padding: '1rem',
  fontSize: '2rem',
  border: 'none',
  ':hover': {
    opacity: '0.7',
  },
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
    'screen and (max-width: 375px)': {},
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});
