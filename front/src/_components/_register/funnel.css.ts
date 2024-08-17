import { style } from '@vanilla-extract/css';
import { background2, text1, text4 } from '@/_styles/vars.css';

export const funnelContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '30rem',
  width: '30rem',
  borderRadius: '1rem',
  position: 'absolute',
});

export const contentContainer = style({
  background: background2,
  width: '26rem',
  height: '18rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '1rem',
  padding: '1rem',
});

export const funnelButtonContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1rem',
});

export const funnelButton = style({
  color: text1,
  background: background2,
  border: 'none',
  fontSize: '1.2rem',
  padding: '0.5rem',
  margin: '1rem 0',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: '0.7',
  },
});

export const funnelLabel = style({
  color: text1,
  fontWeight: 'bold',
  fontSize: '1.8rem',
  margin: '1rem 0',
});

export const funnelInputContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const funnelInput = style({
  padding: '0.9rem',
  margin: '1rem 0',
  borderRadius: '0.5rem',
  border: 'none',
  width: '80%',
  fontSize: '1.2rem',
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0px 8px',
  ':focus': {
    outline: 'none',
  },
});

export const funnelImageInput = style({
  padding: '0.9rem',
  margin: '1rem 0',
  marginLeft: '4rem',
  borderRadius: '0.5rem',
  border: 'none',
  width: '80%',
  fontSize: '1rem',
  color: text1,
});

export const drag = style({
  opacity: 0.7,
  border: `0.1rem solid ${text1}`,
  borderRadius: '1rem',
  transition: 'all 0.3s ease',
});

export const alertText = style({
  color: text4,
  fontSize: '1.2rem',
});

export const emailCard = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const userEmailContainer = style({
  color: text1,
  fontSize: '1.25rem',
  margin: '1rem 0',
  padding: '0.9rem',
  borderRadius: '0.5rem',
  border: 'none',
  width: '100%',
  background: 'none',
  textAlign: 'center',
});

export const alertContainer = style({
  color: text4,
  margin: '1rem 0',
  fontSize: '1.1rem',
});

export const lockIcon = style({
  color: text1,
});
