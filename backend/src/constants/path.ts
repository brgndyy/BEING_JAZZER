import deepFreeze from '../utils/deepFreeze';

const PATH = deepFreeze({
  default_server_url: 'http://localhost:3000',
  auth_html_file: 'src/views/loginOrSignUp.html',
});

export default PATH;
