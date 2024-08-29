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
  overflow: 'scroll',
  background: background1,
  '@media': {
    'screen and (max-width: 1280px)': {
      width: '40rem',
      height: '40rem',
    },
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {
      height: '40vh',
    },
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {
      width: '100vw',
      height: '100vh',
      borderRadius: '0',
      padding: '0.5rem',
    },
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {
      height: '60vh',
    },
    'screen and (max-width: 414px)': {
      height: '70vh',
    },
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      height: '100vh',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});
