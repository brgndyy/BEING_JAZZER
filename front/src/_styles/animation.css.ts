import { keyframes } from '@vanilla-extract/css';

export const softAppear = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const fadeIn = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(400px) scale(0.75)',
  },
  '75%': {
    opacity: '1',
    transform: 'translateY(-16px) scale(1)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateY(0px)',
  },
});

export const fadeOut = keyframes({
  '0%': {
    opacity: '1',
    transform: 'translateY(0px)',
  },
  '75%': {
    opacity: '1',
    transform: 'translateY(-16px) scale(1)',
  },
  '100%': {
    opacity: '0',
    transform: 'translateY(400px) scale(0.75)',
  },
});

export const flipIn = keyframes({
  from: {
    transform: 'rotateY(90deg)',
    opacity: 0,
  },
  to: {
    transform: 'rotateY(0deg)',
    opacity: 1,
  },
});

export const flipOut = keyframes({
  from: {
    transform: 'rotateY(0deg)',
    opacity: 1,
  },
  to: {
    transform: 'rotateY(90deg)',
    opacity: 0,
  },
});

export const progressBarAnimation = keyframes({
  from: {
    width: '100%',
  },
  to: {
    width: '0%',
  },
});

// 카운트다운 애니메이션

export const countDownText = keyframes({
  '0%': {
    fontSize: '80px',
    opacity: 0.5,
  },
  '100%': {
    fontSize: '120px',
    opacity: '1',
  },
});
