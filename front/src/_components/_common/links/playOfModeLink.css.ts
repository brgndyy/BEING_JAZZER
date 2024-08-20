import { style } from '@vanilla-extract/css';
import { text1, background2 } from '@/_styles/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const linkContainer = style({
  padding: '2.5rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  borderRadius: '1rem',
  color: text1,
  fontSize: '2.5rem',
  fontWeight: 'bold',
  background: background2,
  transition: 'all 0.3s ease',
  minWidth: '20rem',
  margin: '1rem 0',
  textAlign: 'center',
  ':hover': {
    opacity: '0.7',
  },
});
