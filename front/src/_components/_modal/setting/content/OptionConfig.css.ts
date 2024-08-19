import { style } from '@vanilla-extract/css';

export const configLabel = style({
  position: 'relative',
  padding: '0.5rem',
  border: '0.1rem solid',
  borderRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
});

export const hiddenCheckBoxInput = style({
  display: 'none',
});

export const hideValue = style({
  opacity: '0.3',
});

export const unchecked = style({
  opacity: '0.5',
});

export const lockIconContainer = style({
  position: 'absolute',
  inset: '0',
  zIndex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0,0,0,0.5)',
  width: '100%',
  height: '100%',
});

export const lockIcon = style({
  display: 'flex',
  width: '90%',
  height: '90%',
  borderRadius: '0.5rem',
});

export const isSelectedOption = style({
  opacity: 1,
  transition: 'all 0.3s ease',
});

export const isNotSelectedOption = style({
  opacity: '0.7',
  transition: 'all 0.3s ease',
});
