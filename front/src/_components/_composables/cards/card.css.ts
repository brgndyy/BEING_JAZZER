import { style } from '@vanilla-extract/css';
import { softAppear } from '@/_styles/animation.css';

export const mainCardContainer = style({
  width: '100%',
  height: '100%',
  margin: '0px auto',
  animation: `${softAppear} 0.3s ease-in forwards`,
});
