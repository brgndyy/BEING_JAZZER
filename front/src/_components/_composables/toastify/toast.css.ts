import { style } from '@vanilla-extract/css';
import { flipIn, flipOut, progressBarAnimation } from '@/_styles/animation.css';
import { toastProgressBar, toastMessage } from '../../../_styles/vars.css';

export const toastContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  minHeight: '2rem',
  borderRadius: '0.5rem',
  padding: '1rem',
  position: 'relative',
  margin: '0.5rem 0',
  animation: `${flipIn} 0.5s`,
  animationFillMode: 'both',
});

export const containerExit = style({
  animation: `${flipOut} 0.5s`,
  animationFillMode: 'both',
});

export const success = style({ background: '#46bb60' });
export const warning = style({ background: 'yellow' });
export const error = style({ background: '#d54141' });
export const info = style({ background: 'blue' });

export const stateMessage = style({
  color: toastMessage,
});

export const progressBar = style({
  position: 'absolute',
  left: 0,
  bottom: 0,
  height: '5px',
  animation: `${progressBarAnimation} 1.5s linear`,
  background: toastProgressBar,
});
