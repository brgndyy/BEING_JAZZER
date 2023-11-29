import { style } from '@vanilla-extract/css';

export const registerContainer = style({
  width: '30rem',
  height: '8rem auto 0',
  lineHeight: '1.5',
});

export const bannerText = style({
  fontSize: '4rem',
  fontWeight: 'bold',
  margin: 0,
});

export const emailForm = style({
  margin: '0.5rem 0',
});

export const contentDiv = style({
  marginBottom: '2rem',
});

export const group = style({
  display: 'flex',
})

export const input = style({
  background: 'transparent',
  fontSize: '1.5rem',
  border: 'none',
  outline: 'none',
  width: '100%',
  transition: 'all 0.3s ease-in',
})

export const emailInput = style({
  display: 'flex',
  alignItems: 'center',
});

export const description = style({
  fontSize: '2rem',
  margin: '2rem 0',
});

export const contentContainer = style({
  marginTop: '6rem',
  marginBottom: '3rem',
});

export const formButton = style({
  marginTop: '6rem',
});

export const button = style({
  height: '3rem',
  fontSize: '1.5rem',
  padding: '0 2rem',
  borderRadius: '1.5rem',
  border: 'none',
  outline: 'none',
  fontWeight: 'bold',
  wordBreak: 'keep-all',
  transition: 'all 0.3s ease-in',
  cursor: 'pointer',
  margin: '0 1rem',
});

export const cancel = style({});

export const next = style({});

export const inputLabel = style({
  fontWeight: 'bold',
  fontSize: '1.125rem',
  marginBottom: '1rem',
  transition: 'all 0.3s ease-in',
});

export const inputContainer = style({
  paddingBottom: '0.5rem',
  borderBottom: '0.1rem solid',
  display: 'flex',
  alignItems: 'center',
});

export const formControl = style({
  margin: '0.5rem 0',
});

export const label = style({
  marginBottom: '1rem',
});
