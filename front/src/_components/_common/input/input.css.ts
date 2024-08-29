import { styleVariants, style } from '@vanilla-extract/css';
import { buttonBackground1, text1, borderColor } from '@/_styles/vars.css';

export const background = styleVariants({
  default: { background: 'none', color: text1 },
  primary: { background: buttonBackground1, color: text1 },
});

export const baseInputStyle = style({
  padding: '1rem',
  fontSize: '1.8rem',
  border: `0.1rem solid ${borderColor}`,
  minHeight: '3rem',
  borderRadius: '1rem',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});
