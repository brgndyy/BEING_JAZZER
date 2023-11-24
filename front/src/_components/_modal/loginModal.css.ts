import { style } from '@vanilla-extract/css';
import { background1, text1, text4, text5 } from '@/_styles/vars.css';

export const authContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55%',
});

export const modalBannerImageContainer = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
});

export const sendMailContainer = style({
  display: 'flex',
  alignItems: 'center',
  background: background1,
  padding: '0 0.75rem',
  height: '3rem',
  borderRadius: '1rem',
});

export const mailMessage = style({
  fontSize: '0.875rem',
  flex: '1 1 0%',
  textAlign: 'center',
});

export const loginBanner = style({
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  width: '80%',
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

export const logo = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  color: text1,
});

export const loginBannerText = style({
  margin: '0.5rem 0',
});

export const loginFormContainer = style({
  marginTop: '1rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const loginForm = style({
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
});

export const formLabel = style({
  margin: '1.5rem 0',
  fontSize: '1rem',
  color: text4,
});

export const formInput = style({
  padding: '0.9rem',
  fontSize: '0.9rem',
  borderRadius: '1rem',
  border: '0.3px solid #d5d5d5',
  minHeight: '3rem',
  ':focus': {
    outline: 'none',
  },
});

export const findPasswordContainer = style({
  margin: '1rem 0',
});

export const loginButton = style({
  margin: '2rem 0',
  padding: '1rem',
  borderRadius: '1rem',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  background: background1,
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  transition: 'all 0.3s',
  color: text4,
  ':hover': {
    opacity: 0.7,
  },
});

export const toggleAuthMode = style({
  cursor: 'pointer',
  border: 'none',
  fontWeight: 'bold',
  marginLeft: '1rem',
  padding: '0.8rem',
  borderRadius: '1rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  transition: 'all 0.3s',
  color: text5,
  ':hover': {
    opacity: 0.7,
  },
});

export const OAuthContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1.5rem 0',
});

export const orLogo = style({
  margin: '1rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: text4,
});

export const googleIcon = style({
  margin: '0 1rem',
  background: '#fff',
  border: '0.1rem solid #DEE2E6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%',
  padding: '0.5rem',
  cursor: 'pointer',
});

export const naverIcon = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  cursor: 'pointer',
  marginLeft: '0.7rem',
  marginRight: '0.7rem',
  marginBottom: '0.1rem',
});

export const joinContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem 0',
  padding: '1rem',
});

export const toggleText = style({
  color: text4,
});
