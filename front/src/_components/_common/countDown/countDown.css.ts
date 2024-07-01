import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/_styles/vars.css';
import { countDownText } from '@/_styles/animation.css';

export const container = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  background: background1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const text = style({
  fontSize: '80px',
  animation: `${countDownText} 0.3s ease forwards`,
  color: text1,
});

export const animate = style({
  animation: `${countDownText} 2s`,
});

export const animate1 = style({
  animation: `${countDownText} 2s`,
});

export const animate2 = style({
  animation: `${countDownText} 2s`,
});

export const animate3 = style({
  animation: `${countDownText} 2s`,
});
