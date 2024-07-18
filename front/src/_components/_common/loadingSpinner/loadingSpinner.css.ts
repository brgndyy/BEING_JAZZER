import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/_styles/vars.css';

export const modalContainer = style({
  width: '100%',
  height: '100%',
});

export const loadingSpinnerContainer = style({
  width: '100%',
  height: '100%',
  background: background1,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 2000,
});

export const loadingSpinnerText = style({
  color: text1,
  margin: '1rem 0',
  fontSize: '1.5rem',
});
