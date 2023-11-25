import deepFreeze from '@/_utils/deepFreeze';

const PATH_ROUTES = deepFreeze({
  request_auth_email: '/api/users/sendAuthEmail',
  register_user_info: '/api/users/register',
});

export default PATH_ROUTES;
