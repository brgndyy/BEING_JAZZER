import { style } from '@vanilla-extract/css';
import { fadeIn, fadeOut } from '@/_styles/animation.css';
import { background1 } from '@/_styles/vars.css';

export const modalContainer = style({
  width: '49rem',
  height: '43rem',
  borderRadius: '1rem',
  position: 'relative',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  animation: `0.3s ease-in-out 0s 1 normal forwards running ${fadeIn}`,
  background: background1,
});

export const moveOut = style({
  animation: `0.3s ease-in-out 0s 1 normal forwards running ${fadeOut}`,
});
