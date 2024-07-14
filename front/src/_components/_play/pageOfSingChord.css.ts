import { style } from '@vanilla-extract/css';
import { text1, background3 } from '@/_styles/vars.css';

export const metronomeContainer = style({
  padding: '0 1rem',
  display: 'flex',
});

export const text = style({
  color: text1,
  display: 'flex',
  alignItems: 'center',
  margin: '0 0.5rem',
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
});

export const input = style({
  border: 'none',
  borderRadius: '0.5rem',
});

export const button = style({
  border: 'none',
  borderRadius: '0.5rem',
  background: background3,
});
