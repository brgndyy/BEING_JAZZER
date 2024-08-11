import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import useWithdraw from '../mutations/useWithdraw';
import { withdrawAccount } from '@/app/actions';
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
  withdrawAccount: jest.fn(),
}));

const createQueryClient = () => new QueryClient();

const wrapper = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={createQueryClient()}>{children}</QueryClientProvider>
);

describe('회원 탈퇴와 관련 된 useWithdraw 훅 테스트', () => {
  const mockRouter = {
    refresh: jest.fn(),
    push: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  it('성공 시 router.refresh와 router.push가 호출되고 메인 페이지로 이동한다.', async () => {
    const accessToken = 'test-access-token';
    (withdrawAccount as jest.Mock).mockResolvedValueOnce({});

    const { result } = renderHook(() => useWithdraw(accessToken), { wrapper });

    result.current.handleWithdraw();

    await waitFor(() => {
      expect(withdrawAccount).toHaveBeenCalledTimes(1);
    });

    expect(withdrawAccount).toHaveBeenCalledWith(accessToken);
    expect(mockRouter.refresh).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith(PAGE_ROUTES.main);
  });

  it('실패 시 에러 토스트가 출력 된다.', async () => {
    const accessToken = 'test-access-token';
    const errorMessage = 'Withdraw failed';
    (withdrawAccount as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useWithdraw(accessToken), { wrapper });

    result.current.handleWithdraw();

    await waitFor(() => {
      expect(withdrawAccount).toHaveBeenCalledTimes(1);
    });

    expect(withdrawAccount).toHaveBeenCalledWith(accessToken);
    expect(toast.error).toHaveBeenCalledWith(ERROR_MESSAGES.fail_withdraw);
  });
});
