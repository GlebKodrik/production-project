export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  transform: {
    '\\.svg$': '<rootDir>/config/jest/__mocks__/svgr-mock.js',
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup.ts'],
};
