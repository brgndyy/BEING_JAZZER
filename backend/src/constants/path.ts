import deepFreeze from '../utils/deepFreeze';

const PATH = deepFreeze({
  auth_html_file: 'src/views/loginOrSignUp.html',
  default_user_profile_image_url: '/images/userProfile/defaultUserProfileImage.png',
  replace_profile_image_url: '/images/userProfile/',
  user_profile_image: 'src/assets/images/userProfile',
});

export default PATH;
