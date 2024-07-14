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
  fontSize: '1.5rem',
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
});

export const input = style({
  border: 'none',
  borderRadius: '0.5rem',
  margin: '0 0.5rem',
  textAlign: 'center',
  fontSize: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
});

export const button = style({
  border: 'none',
  borderRadius: '0.5rem',
  background: background3,
  fontSize: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  cursor : 'pointer'
});
