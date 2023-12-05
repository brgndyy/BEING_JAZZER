import deepFreeze from '@/_utils/deepFreeze';

const PATH_ROUTES = deepFreeze({
  request_auth_email: '/api/users/send-auth-email',
  register_user_info: '/api/users/register',
  signup: '/api/users/signup',
  get_new_access_token: '/api/users/new-access-token',
  get_user_info: '/api/users/info',
  existing_user_login: '/api/users/login-existing-user',
});

export default PATH_ROUTES;
