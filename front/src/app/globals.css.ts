import { globalStyle } from '@vanilla-extract/css';
import { root_background_color_var } from '@/_styles/vars.css';

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
  background: root_background_color_var,
});

globalStyle('h1, h2, h3, p', {
  margin: '0',
  padding: '0',
});

// globalStyle("a, a:link, a:visited, a:hover", {
//   color: container_text_color_var,
//   textDecoration: "none",
// });

globalStyle('li', {
  listStyle: 'none',
});
