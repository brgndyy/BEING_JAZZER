import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const formLogo = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      height: '100%',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const logo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  color: text1,
  padding: '1rem',
  fontSize: '2rem',
  '@media': {
    'screen and (max-width: 1280px)': {
      fontSize: '1.5rem',
    },
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {},
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const closeButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '5rem',
  width: '5rem',
  borderRadius: '100%',
  transition: 'all 0.3s',
  position: 'absolute',
  top: '0',
  right: '0',
  margin: '0.5rem',
  ':hover': {
    opacity: '0.7',
  },
});

export const closeButton = style({
  fontSize: '2rem',
  cursor: 'pointer',
  color: text1,
});

export const settingForm = style({
  width: '100%',
  height: '100%',
});

export const optionContainer = style({
  width: '100%',
  fontSize: '2.5rem',
  display: 'flex',
  flexDirection: 'row',
  margin: '0.5rem 0',
  borderBottom: `0.05rem solid ${text1}`,
  '@media': {
    'screen and (max-width: 1280px)': {
      fontSize: '2rem',
    },
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {
      height: '40vh',
    },
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      height: '100vh',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const optionSelect = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  width: '100%',
  gap: '1rem',
  padding: '1rem',
  color: text1,
  '@media': {
    'screen and (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 414px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const title = style({
  borderRight: '0.05rem solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  minWidth: '25%',
  color: text1,
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {
      minWidth: '30%',
    },
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '5rem',
  marginTop: '1rem',
});
