import { styleVariants } from '@vanilla-extract/css';
import { buttonBackground1, text1 } from '@/_styles/vars.css';

export const background = styleVariants({
  default: { background: 'none', color: text1 },
  primary: { background: buttonBackground1, color: text1 },
});
