import { style } from '@vanilla-extract/css';
import { background2, text1 } from '@/_styles/vars.css';

export const menuContainer = style({
  position: 'relative',
  zIndex: '5',
  width: '12rem',
  background: background2,
  color: text1,
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 8px',
});

export const marginText = style({
  marginLeft: '1rem',
});

export const link = style({
  padding: '1rem',
});

export const linkText = style({
  color: text1,
  transition: 'all 0.3s ease',

  ':hover': {
    opacity: 0.7,
  },
});
