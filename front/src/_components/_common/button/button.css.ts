import { styleVariants, style } from '@vanilla-extract/css';
import { buttonBackground1, text1, text2, warningBackground } from '@/_styles/vars.css';

export const background = styleVariants({
  default: { background: 'none', color: text1 },
  primary: { background: buttonBackground1, color: text2 },
  warning: { background: warningBackground, color: '#fff' },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  padding: '1rem',
  fontSize: '2rem',
  ':hover': {
    opacity: '0.7',
  },
});
