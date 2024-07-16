import { useState, useCallback } from 'react';
import {
  MutateOptions,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import compareDeepEqual from '@/_utils/compareDeepEqual';

interface CachedMutationOptions<TVariables, TData, TError>
  extends UseMutationOptions<TData, TError, TVariables> {
  initialValue: TVariables;
  equalityFn?: (a: TVariables, b: TVariables) => boolean;
}

export const useCachedMutation = <TData, TError, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options: CachedMutationOptions<TVariables, TData, TError>,
): UseMutationResult<TData, TError, TVariables> => {
  const { initialValue, equalityFn = compareDeepEqual, ...mutationOptions } = options;
  const [previousVariables, setPreviousVariables] = useState<TVariables>(initialValue);

  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn,
    ...mutationOptions,
  });

  const cachedMutate = useCallback(
    (variables: TVariables, options?: MutateOptions<TData, TError, TVariables>) => {
      console.log(variables);
      if (equalityFn(previousVariables, variables)) {
        console.error('변경 사항이 없어요!');
        if (mutationOptions.onSettled) {
          mutationOptions.onSettled(undefined, null, variables, undefined);
        }
        return;
      }
      setPreviousVariables(variables);
      mutation.mutate(variables, options);
    },
    [previousVariables, equalityFn, mutation, mutationOptions],
  );

  return {
    ...mutation,
    mutate: cachedMutate,
  };
};
