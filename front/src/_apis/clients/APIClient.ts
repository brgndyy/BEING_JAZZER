interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
  body?: any;
}

export default class APIClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private onError?: (error: Error) => void;

  constructor(
    baseUrl: string,
    defaultHeaders: Record<string, string> = { 'Content-Type': 'application/json' },
  ) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  public setErrorHandler(handler: (error: Error) => void) {
    this.onError = handler;
  }

  private getHeaders(options: RequestOptions, isFormData: boolean): Record<string, string> {
    const headers = {
      ...this.defaultHeaders,
      ...options.headers,
    };

    if (!isFormData) {
      headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    } else {
      delete headers['Content-Type'];
    }

    return headers;
  }

  private async handleResponse<T>(response: Response, isFormData: boolean): Promise<T | null> {
    if (!response.ok) {
      if (response.status === 401) {
        console.error('Unauthorized user logic!');
      }
      const errorData = await response.json();
      console.error('Error data:', errorData);
      throw new Error(errorData.message);
    }

    console.log('isFormData: ', isFormData);

    return isFormData ? ((await response.text()) as unknown as T) : await response.json();
  }

  private prepareBody(body: any): any {
    if (body instanceof FormData) {
      return body;
    } else if (typeof body === 'object' && body !== null) {
      return JSON.stringify(body);
    } else {
      return body;
    }
  }

  private async request<T>(url: string, options: RequestOptions): Promise<T | null> {
    const isFormData = options.body instanceof FormData;

    const headers = this.getHeaders(options, isFormData);
    const body = options.body !== undefined ? this.prepareBody(options.body) : undefined;

    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        ...options,
        headers,
        body,
      });

      return this.handleResponse<T>(response, isFormData);
    } catch (error) {
      if (this.onError) {
        this.onError(error as Error);
      } else {
        console.error('General error', error);
      }
      return null;
    }
  }

  public get<T>(url: string, options: RequestOptions = {}): Promise<T | null> {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  public post<T>(
    url: string,
    options: { body?: any; headers?: Record<string, string> } = {},
  ): Promise<T | null> {
    const { body, headers, ...restOptions } = options;
    const isFormData = body instanceof FormData;

    return this.request<T>(url, {
      ...restOptions,
      method: 'POST',
      headers: {
        ...this.defaultHeaders,
        ...headers,
      },
      body: isFormData ? body : JSON.stringify(body),
    });
  }

  public put<T>(url: string, body: any, options: RequestOptions = {}): Promise<T | null> {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body,
    });
  }

  public delete<T>(url: string, options: RequestOptions = {}): Promise<T | null> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }
}
