import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import useSingleRequest from '../useSingleReqeust';

interface SingleFlightMutationOptions<TData, TError, TVariables>
  extends UseMutationOptions<TData, TError, TVariables> {
  requestId?: string;
}

const useSingleRequestMutation = <TData, TError, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: SingleFlightMutationOptions<TData, TError, TVariables>,
) => {
  const { startRequest, endRequest } = useSingleRequest();
  const requestId = options?.requestId || 'defaultRequestId';

  return useMutation<TData, TError, TVariables>({
    ...options,
    mutationFn,
    onMutate: (variables: TVariables) => {
      const canProceed = startRequest(requestId);
      if (!canProceed) {
        throw new Error('이미 요청이 진행 중입니다.');
      }
      if (options?.onMutate) {
        return options.onMutate(variables);
      }
    },
    onSuccess: (data: TData, variables: TVariables, context: unknown) => {
      endRequest(requestId);
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error: TError, variables: TVariables, context: unknown) => {
      endRequest(requestId);
      if (options?.onError) {
        options.onError(error, variables, context);
      }
    },
    onSettled: (
      data: TData | undefined,
      error: TError | null,
      variables: TVariables,
      context: unknown,
    ) => {
      endRequest(requestId);
      if (options?.onSettled) {
        options.onSettled(data, error, variables, context);
      }
    },
  });
};

export default useSingleRequestMutation;
