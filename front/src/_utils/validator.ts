import deepFreeze from './deepFreeze';

import {
  REQUIRE,
  MIN_LENGTH,
  MAX_LENGTH,
  MIN_NUM,
  MAX_NUM,
  EMAIL,
  NO_SPACES,
} from './validateFunctions';

type ValueType = string | number;

type ValidatorFn = (value: ValueType) => boolean;

export const VALIDATION_TYPE = deepFreeze({
  REQUIRE,
  MIN_LENGTH,
  MAX_LENGTH,
  MIN_NUM,
  MAX_NUM,
  EMAIL,
  NO_SPACES,
});

export const validate = (value: ValueType, validators: ValidatorFn[]): boolean => {
  return validators.every((validator) => validator(value));
};
