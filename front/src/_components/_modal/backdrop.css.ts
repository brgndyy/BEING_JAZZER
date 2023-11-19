import { style } from '@vanilla-extract/css';

export const backDrop = style({
  height: '100vh',
  width: '100vw',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
