import { style } from '@vanilla-extract/css';

export const toggleInput = style({
  width: '0',
  height: '0',
  visibility: 'hidden',
});

export const toggleLabel = style({
  width: '5rem',
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
    width: '1.3rem',
    height: '1.3rem',
    position: 'absolute',
    top: '6px',
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
    left: '4.8rem',
    transform: 'translateX(-100%)',
    background: 'linear-gradient(180deg, #fff, #3a3a3a)',
  },
});
