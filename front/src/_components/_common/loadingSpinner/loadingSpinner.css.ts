import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/_styles/vars.css';

export const loadingSpinnerContainer = style({
  height: '100vh',
  width: '100vh',
  position: 'fixed',
  top: '0',
  left: '0',
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
