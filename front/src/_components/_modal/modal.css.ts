import { style } from '@vanilla-extract/css';
import { fadeIn, fadeOut } from '@/_styles/animation.css';
import { headerBg } from '@/_styles/vars.css';

export const modalContainer = style({
  width: '45rem',
  height: '50rem',
  borderRadius: '1rem',
  border: '0.3rem solid',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'scroll',
  padding: '1rem',
  animation: `0.3s ease-in-out 0s 1 normal forwards running ${fadeIn}`,
  background: headerBg,
});

export const moveOut = style({
  animation: `0.3s ease-in-out 0s 1 normal forwards running ${fadeOut}`,
});
