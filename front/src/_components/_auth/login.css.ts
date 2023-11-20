import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const authText = style({
  color: text1,
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.2rem',
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: 0.7,
  },
  border: 'none',
  background: 'none',
});
