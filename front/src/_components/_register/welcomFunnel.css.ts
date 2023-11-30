import { style } from '@vanilla-extract/css';
import { text1, text4, background2 } from '@/_styles/vars.css';
import { fadeIn } from '@/_styles/animation.css';

export const welcomeContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1.3rem 0',
});

export const logo = style({
  color: text1,
  fontSize: '3.5rem',
  animation: `${fadeIn} 0.6s ease-out forwards`,
  opacity: 0,
});

export const first = style({
  animationDelay: '0s',
});

export const second = style({
  animationDelay: '0.5s',
});

export const third = style({
  animationDelay: '1s',
});

export const fourth = style({
  animation: `${fadeIn} 0.6s ease-out 1.5s forwards`,
  opacity: 0,
});

export const nextButton = style({
  margin: '2rem 0',
  padding: '1rem',
  borderRadius: '1rem',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  background: background2,
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  transition: 'all 0.3s',
  color: text4,
  opacity: 0,
});
