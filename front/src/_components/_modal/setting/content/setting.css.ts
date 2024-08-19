import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const settingIcon = style({
  fontSize: '3rem',
  color: text1,
  cursor: 'pointer',
  marginTop: '0.5rem',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'rotate(180deg)',
    opacity: '0.7',
  },
});
