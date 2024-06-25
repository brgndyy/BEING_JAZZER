import { renderHook, act } from '@testing-library/react';
import accessTokenStore from '../accessTokenStore';

const initializeStore = () => {
  const store = accessTokenStore.getState();
  store.updateAccessToken('');
};

describe('accessTokenStore에 대한 테스트 코드 작성', () => {
  beforeEach(() => {
    initializeStore();
  });

  it('액세스 토큰을 업데이트 할 수 있어야한다.', () => {
    const { result } = renderHook(() => accessTokenStore());

    act(() => {
      result.current.updateAccessToken('newAccessToken');
    });

    expect(result.current.accessToken).toBe('newAccessToken');
  });
});
