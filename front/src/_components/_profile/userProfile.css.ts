import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const profileContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0.5rem',
  cursor: 'pointer',
  position: 'relative',
});

export const iconContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
  marginTop: '0.5rem',
});

export const icon = style({
  color: text1,
  fontSize: '1rem',
});

export const motionContainer = style({
  position: 'absolute',
  top: '100%',
  marginTop: '1rem',
});
