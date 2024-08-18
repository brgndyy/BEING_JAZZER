import { renderHook, waitFor } from '@testing-library/react';
import { useCachedMutation } from '../mutations/useCachedMutate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

const createQueryClient = () => new QueryClient();

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={createQueryClient()}>{children}</QueryClientProvider>
);

const mockMutationFn = jest.fn();
const initialVariables = { test: 'initial' };

describe('useCachedMutation 훅에 대한 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('초기 값이 정상적으로 설정 된다.', () => {
    const { result } = renderHook(
      () => useCachedMutation({ queryFn: mockMutationFn, initialValue: initialVariables }),
      { wrapper },
    );

    expect(result.current.mutate).toBeDefined();
  });

  it('만약 인자로 넣어주는 값이 같다면 mutate 함수를 호출하지 않는다.', async () => {
    const { result } = renderHook(
      () => useCachedMutation({ queryFn: mockMutationFn, initialValue: initialVariables }),
      { wrapper },
    );

    result.current.mutate(initialVariables);

    await waitFor(() => {
      expect(mockMutationFn).not.toHaveBeenCalled();
    });
  });

  it('만약 인자로 넣어주는 값이 다르다면 mutate 함수를 호출한다.', async () => {
    const { result } = renderHook(
      () => useCachedMutation({ queryFn: mockMutationFn, initialValue: initialVariables }),
      { wrapper },
    );

    const newVariables = { test: 'new' };

    result.current.mutate(newVariables);

    await waitFor(() => {
      expect(mockMutationFn).toHaveBeenCalledWith(newVariables);
    });
  });

  it('만약 인자로 넣어주는 값이 같다면 onSettled 함수를 호출한다.', async () => {
    const onSettled = jest.fn();
    const { result } = renderHook(
      () =>
        useCachedMutation({ queryFn: mockMutationFn, initialValue: initialVariables, onSettled }),
      { wrapper },
    );

    result.current.mutate(initialVariables);

    await waitFor(() => {
      expect(onSettled).toHaveBeenCalled();
    });
  });
});
