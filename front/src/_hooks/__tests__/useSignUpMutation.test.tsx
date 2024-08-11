import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useSignUpMutation from '../mutations/useSignUpMutation';
import { userSignUp } from '@/app/actions';
import ERROR_MESSAGES from '@/_constants/errorMessages';
import { PAGE_ROUTES } from '@/_constants/routes';
import { PropsWithChildren } from 'react';

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/app/actions', () => ({
  userSignUp: jest.fn(),
}));

const createQueryClient = () => new QueryClient();

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={createQueryClient()}>{children}</QueryClientProvider>
);

describe('useSignUpMutation 훅에 대한 테스트 코드를 작성한다.', () => {
  const mockRouter = {
    refresh: jest.fn(),
    push: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('성공 시 router.refresh와 router.push가 호출되고 메인 페이지로 이동한다.', async () => {
    const signUpParams = {
      userName: 'testUser',
      userEmail: 'test@example.com',
      userImage: null,
    };

    (userSignUp as jest.Mock).mockResolvedValueOnce({});

    const { result } = renderHook(() => useSignUpMutation(signUpParams), { wrapper });

    const fakeEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement>;

    result.current.handleUserSignUp(fakeEvent);

    await waitFor(() => {
      expect(userSignUp).toHaveBeenCalledTimes(1);
    });

    expect(userSignUp).toHaveBeenCalledWith(expect.any(FormData));
    expect(mockRouter.refresh).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith(PAGE_ROUTES.main);
  });

  it('실패 시 에러 토스트가 출력 된다.', async () => {
    const signUpParams = {
      userName: 'testUser',
      userEmail: 'test@example.com',
      userImage: null,
    };

    const errorMessage = 'Sign up failed';
    (userSignUp as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useSignUpMutation(signUpParams), { wrapper });

    const fakeEvent = {
      preventDefault: jest.fn(),
    } as unknown as React.MouseEvent<HTMLButtonElement>;

    result.current.handleUserSignUp(fakeEvent);

    await waitFor(() => {
      expect(userSignUp).toHaveBeenCalledTimes(1);
    });

    expect(userSignUp).toHaveBeenCalledWith(expect.any(FormData));
    expect(toast.error).toHaveBeenCalledWith(ERROR_MESSAGES.FAIL_SIGN_UP);
  });
});
