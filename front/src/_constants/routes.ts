export const API_ROUTES = {
  request_auth_email: '/api/users/send-auth-email',
  register_user_info: '/api/users/register',
  signup: '/api/users/signup',
  new_access_token: '/api/users/new-access-token',
  user_info: '/api/users/info',
  existing_user_login: '/api/users/login-existing-user',
  user_chord_setting: '/api/users/chord-setting',
  default_chord_images: '/api/chord-images/default',
  user_chord_images: '/api/chord-images/user',
  withdraw_user: '/api/users/withdraw',
} as const;

export const PAGE_ROUTES = {
  main: '/',
  playChord: '/play/chords',
} as const;
