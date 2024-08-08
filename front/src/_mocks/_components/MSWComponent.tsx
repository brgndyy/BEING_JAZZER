'use client';

import { useEffect } from 'react';

/* eslint-disable global-require */

export default function MSWComponent() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        // NEXT_PUBLIC_API_MOCKING 환경 변수가 enabled일 때 MSW 실행
        require('@/_mocks/worker');
      }
    }
  }, []);

  return null;
}
