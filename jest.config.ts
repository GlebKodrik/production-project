export default {
  clearMocks: true,
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
    '<rootDir>/src',
    'node_modules',
  ],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>configs-project/jest/setup.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>configs-project/jest/jest-empty-component.tsx',
  },
  transformIgnorePatterns: ['node_modules/(?!axios)'],
};
