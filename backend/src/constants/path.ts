import deepFreeze from '../utils/deepFreeze';

const PATH = deepFreeze({
  default_server_url: 'http://localhost:3000',
  auth_html_file: 'src/views/loginOrSignUp.html',
  default_user_profile_image_url: 'src/assets/images/userProfile/defaultUserProfileImage.png',
});

export default PATH;
