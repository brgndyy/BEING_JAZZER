import { style } from '@vanilla-extract/css';

export const toggleInput = style({
  width: '0',
  height: '0',
  visibility: 'hidden',
});

export const toggleLabel = style({
  width: '8rem',
  height: '3rem',
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
    width: '2.3rem',
    height: '2.3rem',
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
    left: '7.7rem',
    transform: 'translateX(-100%)',
    background: 'linear-gradient(180deg, #fff, #3a3a3a)',
  },
  '@media': {
    'screen and (max-width: 1280px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 1024px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 912px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 853px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 820px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 768px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 540px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 430px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 414px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 412px)': {
      '::after': {
        left: '7.6rem',
      },
    },
    'screen and (max-width: 390px)': {
      '::after': {
        left: '7.5rem',
      },
    },
    'screen and (max-width: 375px)': {
      '::after': {
        left: '7.5rem',
      },
    },
    'screen and (max-width: 360px)': {
      '::after': {
        left: '7.7rem',
      },
    },
    'screen and (max-width: 344px)': {
      '::after': {
        left: '7.7rem',
      },
    },
  },
});
