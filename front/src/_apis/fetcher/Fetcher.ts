import ERROR_MESSAGES from '@/_constants/errorMessages';
import HttpError from '@/_error/HttpError';

type FetchOption = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: BodyInit | null;
  headers?: HeadersInit;
};

const Fetcher = {
  get: async <T>(url: string, { headers = {} }: Partial<FetchOption> = {}): Promise<T> => {
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGES.fail_fetch, res.status);
        throw error;
      }

      const data: T = await res.json();
      return data;
    } catch (err) {
      console.error(ERROR_MESSAGES.fail_fetch, err);
      throw err;
    }
  },

  post: async <T>(url: string, { body, headers = {} }: Partial<FetchOption>): Promise<T | void> => {
    try {
      const res = await fetch(url, {
        method: 'POST',
        body: body ? JSON.stringify(body) : undefined,
        headers,
      });
  
      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGES.fail_fetch, res.status);
        throw error;
      }
  
      const contentType = res.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data: T = await res.json();
        return data;
      } else {
        return;
      }
    } catch (err) {
      console.error(ERROR_MESSAGES.fail_fetch, err);
      throw err;
    }
  },

  put: async (url: string, { body, headers = {} }: Partial<FetchOption>) => {
    try {
      const res = await fetch(url, {
        method: 'PUT',
        body,
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGES.fail_fetch, res.status);
        throw error;
      }
    } catch (err) {
      console.error(ERROR_MESSAGES.fail_fetch, err);
      throw err;
    }
  },

  patch: async (url: string, { body, headers = {} }: Partial<FetchOption>) => {
    try {
      const res = await fetch(url, {
        method: 'PATCH',
        body,
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGES.fail_fetch, res.status);
        throw error;
      }
    } catch (err) {
      console.error(ERROR_MESSAGES.fail_fetch, err);
      throw err;
    }
  },

  delete: async (url: string, { headers = {} }: Partial<FetchOption> = {}) => {
    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers,
      });

      if (!res.ok) {
        const error = new HttpError(ERROR_MESSAGES.fail_fetch, res.status);
        throw error;
      }
    } catch (err) {
      console.error(ERROR_MESSAGES.fail_fetch, err);
      throw err;
    }
  },
};

export default Fetcher;
