type ValueType = string | number;

type ValidatorFn = (value: ValueType) => boolean;

export const REQUIRE: ValidatorFn = (value) => {
  return (
    value !== null && value !== undefined && value !== '' && value.toString().trim().length > 0
  );
};

export const MAX_LENGTH = (max: number): ValidatorFn => {
  return (value) => {
    if (typeof value === 'string') {
      return value.length <= max;
    }
    return true;
  };
};

export const MIN_LENGTH = (min: number): ValidatorFn => {
  return (value) => {
    if (typeof value === 'string') {
      return value.length >= min;
    }
    return true;
  };
};

export const MAX_NUM = (max: number): ValidatorFn => {
  return (value) => {
    return +value <= max;
  };
};

export const MIN_NUM = (min: number): ValidatorFn => {
  return (value) => {
    return +value <= min;
  };
};

export const EMAIL: ValidatorFn = (value) => {
  return /^\S+@\S+\.\S+$/.test(value.toString());
};

export const NO_SPACES: ValidatorFn = (value) => {
  return !/\s/.test(value.toString());
};
