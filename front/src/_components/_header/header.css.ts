import { style } from '@vanilla-extract/css';
import { softAppear } from '@/_styles/animation.css';
import { headerBg } from '@/_styles/vars.css';

export const headerContainer = style({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  width: '80%',
  margin: 'auto',
  height: '80px',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  animation: `${softAppear} 0.3s forwards`,
  background: headerBg,
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

export const toggleInput = style({
  width: '0',
  height: '0',
  visibility: 'hidden',
});

export const toggleLabel = style({
  width: '5.5rem',
  height: '2rem',
  position: 'relative',
  display: 'block',
  background: '#ebebeb',
  borderRadius: '17rem',
  marginTop: '5px',
  marginRight: '5px',
  boxShadow: 'inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '::after': {
    content: '',
    width: '1.5rem',
    height: '1.5rem',
    position: 'absolute',
    top: '4px',
    left: '3px',
    borderRadius: '17rem',
    background: 'linear-gradient(180deg, #ffcc89, #d8860b)',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
  },
});

export const toggleLabelChecked = style({
  background: '#242424',
  '::after': {
    left: '5.3rem',
    transform: 'translateX(-100%)',
    background: 'linear-gradient(180deg, #fff, #3a3a3a)',
  },
});

export const loginCategory = style({});

export const settingCategory = style({});

export const underLine = style({
  position: 'relative',
  marginTop: '7px',
  marginLeft: '7px',
  marginRight: '7px',
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
    width: '85%',
    border: '0.5px solid',
    background: headerBg,
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
