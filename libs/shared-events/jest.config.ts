import type { Config } from 'jest';

const config: Config = {
  displayName: 'shared-events',
  rootDir: '../../',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/libs/shared-events/**/*.(spec|test).ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/libs/shared-events/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  coverageDirectory: '<rootDir>/coverage/libs/shared-events',
};

export default config;
