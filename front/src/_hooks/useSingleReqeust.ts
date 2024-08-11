import { useRef } from 'react';

const useSingleRequest = () => {
  const apiRequests = useRef<Set<string>>(new Set());

  const startRequest = (requestId: string): boolean => {
    if (apiRequests.current.has(requestId)) {
      console.warn('이미 요청이 진행 중입니다.');
      return false;
    }
    apiRequests.current.add(requestId);
    return true;
  };

  const endRequest = (requestId: string): void => {
    apiRequests.current.delete(requestId);
  };

  return { startRequest, endRequest };
};

export default useSingleRequest;
