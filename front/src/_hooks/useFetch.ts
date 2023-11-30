import { useState, useCallback, useEffect, useRef } from 'react';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      body: BodyInit | null = null,
      headers: Record<string, string> = {},
      method: string = 'GET',
    ): Promise<Response> => {
      setIsLoading(true);

      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const res = await fetch(url, {
          method,
          body,
          credentials: 'include',
          headers,
          signal: httpAbortCtrl.signal,
        });

        const data = await res.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl,
        );

        setIsLoading(false);
        return data;
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setIsLoading(false);

        throw err;
      }
    },
    [],
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError, setError };
};

export default useFetch;
