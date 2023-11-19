import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const settingIcon = style({
  fontSize: '2rem',
  color: text1,
  cursor: 'pointer',
  marginTop: '0.3rem',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'rotate(180deg)',
  },
});
