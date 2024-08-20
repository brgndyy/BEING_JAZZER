import { style } from '@vanilla-extract/css';
import { softAppear } from '@/_styles/animation.css';
import { background1 } from '@/_styles/vars.css';

export const headerContainer = style({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  width: '90%',
  margin: 'auto',
  height: '80px',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  animation: `${softAppear} 0.3s forwards`,
  background: background1,
});

export const homeLink = style({
  marginTop: '1rem',
  marginLeft: '1rem',
  marginRight: '1rem',
});

export const headerCategoryContainer = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const loginOrSignUpCategory = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '0.1rem',
});

export const settingCategory = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1rem',
});

export const underLine = style({
  position: 'relative',
  marginTop: '0.5rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  fontSize: '1.25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s',
  '::before': {
    content: '',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    border: '0.5px solid',
    background: background1,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.1s ease',
  },
  selectors: {
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
  },
});
