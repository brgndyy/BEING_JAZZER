const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
};

const jestConfigWithOverrides = async (...args) => {
  const configFn = createJestConfig(customJestConfig);
  const res = await configFn(...args);

  res.moduleNameMapper = {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
    ...res.moduleNameMapper,
  };

  return res;
};

module.exports = jestConfigWithOverrides;
