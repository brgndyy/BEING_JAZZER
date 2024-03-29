import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, darkTheme } from '@/_styles/theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: '0',
  width: '100vw',
  minHeight: '100vh',
  height: 'auto',
  overflow: 'scroll',
  transition: 'all 0.3s ease',
  position: 'relative',
});

globalStyle('h1, h2, h3, p', {
  margin: '0',
  padding: '0',
});

globalStyle('a, a:link, a:visited, a:hover', {
  textDecoration: 'none',
});

globalStyle('li', {
  listStyle: 'none',
});

// 라이트 모드
globalStyle(`:root`, {
  background: lightTheme.colorBackground,
});

// 다크 모드
globalStyle(`[data-theme='dark']`, {
  background: darkTheme.colorBackground,
});
