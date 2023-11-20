import { style } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const formLogo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',
});

export const logo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  color: text1,
});

export const closeButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
  width: '2.5rem',
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
  fontSize: '1.25rem',
  cursor: 'pointer',
  color: text1,
});

export const settingForm = style({
  width: '100%',
  height: '100%',
});

export const optionContainer = style({
  width: '100%',
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'row',
  margin: '0.5rem 0',
  borderBottom: `0.05rem solid ${text1}`,
});

export const optionSelect = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  width: '100%',
  gap: '1rem',
  padding: '1rem',
  color: text1,
});

export const title = style({
  borderRight: '0.05rem solid',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  width: '30%',
  color: text1,
});
