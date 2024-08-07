import { http, HttpResponse } from 'msw';
import { API_ROUTES } from '@/_constants/routes';

export const handlers = [
  http.post(
    `${process.env.NEXT_PUBLIC_DEFAULT_BE_URL}${API_ROUTES.request_auth_email}`,
    ({ request }) => {
      return HttpResponse.json();
    },
  ),
];
