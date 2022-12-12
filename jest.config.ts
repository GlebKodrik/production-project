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
    '^@app(.*)$': '<rootDir>/src/app$1',
    '^@configs(.*)$': '<rootDir>/src/configs$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@custom-types(.*)$': '<rootDir>/src/custom-types$1',
    '^@feature(.*)$': '<rootDir>/src/feature$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@page-templates(.*)$': '<rootDir>/src/page-templates$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@providers(.*)$': '<rootDir>/src/providers$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@shared-components(.*)$': '<rootDir>/src/shared-components$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@stores(.*)$': '<rootDir>/src/stores$1',
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>configs-project/jest/jest-empty-component.tsx',
  },
  transformIgnorePatterns: ['node_modules/(?!axios)'],
};
