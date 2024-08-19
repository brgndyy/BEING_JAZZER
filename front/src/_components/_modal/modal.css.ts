import { style } from '@vanilla-extract/css';
import { fadeIn, fadeOut } from '@/_styles/animation.css';
import { background1 } from '@/_styles/vars.css';

export const modalEnter = style({
  animation: `${fadeIn} 0.3s forwards`,
});

export const modalExit = style({
  animation: `${fadeOut} 0.3s forwards`,
});

export const modalContainer = style({
  width: '50rem',
  height: '52rem',
  borderRadius: '1rem',
  position: 'relative',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  background: background1,
});
