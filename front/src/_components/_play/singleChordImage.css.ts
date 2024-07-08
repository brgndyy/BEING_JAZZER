import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem',
});

export const singleChordImage = style({
  borderRadius: '1rem',
  width: '100%',
  height: '100%',
});
