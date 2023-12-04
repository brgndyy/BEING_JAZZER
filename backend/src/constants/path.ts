import deepFreeze from '../utils/deepFreeze';

const PATH = deepFreeze({
  default_front_url: 'http://localhost:3000',
  auth_html_file: 'src/views/loginOrSignUp.html',
  default_user_profile_image_url: 'images/userProfile/defaultUserProfileImage.png',
  replace_profile_image_url: '/images/userProfile/',
});

export default PATH;
