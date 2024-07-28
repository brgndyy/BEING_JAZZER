import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const triggerButton = style({
  padding: '1rem',
  fontSize: '2rem',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  color: text1,
});

export const text = style({
  textAlign: 'center',
  fontSize: '2rem',
  marginBottom: '1rem',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1rem',
});
