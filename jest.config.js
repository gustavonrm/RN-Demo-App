module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/*.test.{ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-redux|react-native-url-polyfill)/)',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
