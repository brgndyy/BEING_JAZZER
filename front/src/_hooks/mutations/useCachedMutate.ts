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
  queryFn: (variables: TVariables) => Promise<TData>;
}

export const useCachedMutation = <TData, TError, TVariables>(
  options: CachedMutationOptions<TVariables, TData, TError>,
): UseMutationResult<TData, TError, TVariables> => {
  const { initialValue, equalityFn = compareDeepEqual, queryFn, ...mutationOptions } = options;
  const [previousVariables, setPreviousVariables] = useState<TVariables>(initialValue);

  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn: queryFn,
    ...mutationOptions,
  });

  const cachedMutate = useCallback(
    (variables: TVariables, options?: MutateOptions<TData, TError, TVariables>) => {
      if (equalityFn(previousVariables, variables)) {
        console.error('no change');
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
