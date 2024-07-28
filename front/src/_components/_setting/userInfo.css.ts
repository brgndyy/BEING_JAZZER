import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const profileWrapper = style({
  display: 'flex',
});

export const infoWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const textWrapper = style({
  display: 'flex',
  width: '50%',
  marginBottom: '3rem',
});

export const profileImage = style({
  borderRadius: '50%',
});

export const text = style({
  fontSize: '2.5rem',
  color: text1,
  fontWeight: 'bold',
  width: '50%',
});
